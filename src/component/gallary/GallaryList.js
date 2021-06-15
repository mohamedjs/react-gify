import React, { useEffect, useState } from 'react';
import GallaryCard from './GallaryCard'
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/action/gallary-action';

function GallaryList ({ gallaryLists, hasErrored, isLoading , fetchData}) {
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
	
	  if (hasErrored) {
		return <p>There has been an Error</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div id="gallery" className="container-fluid">  
			{ gallaryLists.map((gallaryList, index) => <GallaryCard key={index} gif={gallaryList.images.preview_gif.url} /> ) }
		</div>
	);
	
}

// Get state data from store to props
function mapStateToProps(state){
    return {
        gallaryLists: state.reduxThunk.data,
        hasErrored: state.reduxThunk.loading,
        isLoading: state.reduxThunk.error
    };
}

// Get actions to handle store data
function mapDispatchToProps(dispatch) {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
}

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(GallaryList);
