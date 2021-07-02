import React, { useEffect, useState } from 'react';
import GallaryCard from './GallaryCard'
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/gallaries/gallaries.action';
import { createStructuredSelector } from "reselect";
import { selectGallaryValue, selectErrorValue, selectLoadingValue } from '../../store/gallaries/gallaries.selector';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		bottom:0,
		left:'50%'
	},
}))

function GallaryList ({ gallaryLists, hasErrored, isLoading , fetchData}) {
	const classes = useStyles();
	const [limit] = useState(10);
	const [offset, setOffset] = useState(1);

	useEffect(() => {
		fetchData(`https://api.giphy.com/v1/gifs/trending?api_key=2zE7UXfwOk9d888taHix1XudZ0claN1t
		&limit=${limit}&offset=${offset}`)
	}, [offset])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, []);

    const handleScroll = (e) => {
    	const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
	    if ((scrollTop + window.innerHeight) === scrollHeight) {
	    	setOffset(offset => offset + 15)
	    }
  	}

	return (
		<div id="gallery" className="container-fluid">  
			{ gallaryLists.map((gallaryList, index) => <GallaryCard key={index} gif={gallaryList.images.preview_gif.url} /> ) }
			{hasErrored && <Alert variant="filled" severity="error">
				This is an error alert — check it out!
			</Alert>}
			{isLoading && <div className={classes.root}> <CircularProgress color="secondary" /> </div>}
		</div>
	);
	
}

// Get state data from store to props
function mapStateToProps () {
	return createStructuredSelector({
		gallaryLists: selectGallaryValue,
		isLoading: selectLoadingValue,
		hasErrored: selectErrorValue
	});
}

// Get actions to handle store data
function mapDispatchToProps(dispatch) {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
}

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(GallaryList);
