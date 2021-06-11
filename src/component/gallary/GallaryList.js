import React from 'react';
import GallaryCard from './GallaryCard'

class GallaryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gallaryLists: [],
			limit:10,
			offset:0
		}
	}

	getData = () => {
		fetch(`https://api.giphy.com/v1/gifs/trending?api_key=2zE7UXfwOk9d888taHix1XudZ0claN1t
			&limit={${this.state.limit}}&offset=${this.state.offset}`, 
			{"method": "GET"})
		.then(response => response.json())
		.then(response => {
			// Create a new array based on current state:
			let gallaryLists = [...this.state.gallaryLists];
			// Add item to it
			response.data.map((data) => gallaryLists.push(data));
			// Set state
			this.setState({ gallaryLists });
		})
		.catch(err => { console.log(err); 
		});
	}

	async componentDidMount() {
        // read all entities
        try {
			const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=2zE7UXfwOk9d888taHix1XudZ0claN1t&limit=10&offset=0", {"method": "GET"})
			const json = await response.json()
			this.setState({
		    	gallaryLists: json.data
		    })
        } catch(err) {
        	console.log(err)
        }
        // save it to the state
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (e) => {
    	const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
	    if ((scrollTop + window.innerHeight) === scrollHeight) {
	    	this.setState({
	    		offset: this.state.offset+=15
	    	})
	      this.getData()
	    }
  	}

	render() {
		return (
			<div id="gallery" className="container-fluid">  
				{ this.state.gallaryLists.map((gallaryList, index) => <GallaryCard key={index} gif={gallaryList.images.preview_gif.url} /> ) }
			</div>
		);
	}
}

export default GallaryList
