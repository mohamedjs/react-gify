import React, { useEffect, useState } from 'react';
import GallaryCard from './GallaryCard'

export default function GallaryList () {
	const [gallaryLists, setGallaryLists] = useState([]);
	const [limit] = useState(10);
	const [offset, setOffset] = useState(1);

	useEffect(() => {
		async function getData()  {
			try {
				const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=2zE7UXfwOk9d888taHix1XudZ0claN1t
				&limit=${limit}&offset=${offset}`, {"method": "GET"})
				const json = await response.json()
				// Create a new array based on current state:
				let GallaryLists = [...gallaryLists];
				// Add item to it
				json.data.map((data) => GallaryLists.push(data));
				// Set state
				setGallaryLists(GallaryLists);
			} catch(err) {
				console.log(err)
			}
		}
		getData()
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
		</div>
	);
	
}
