import React, { Fragment } from 'react'


// Default Image
const DefaultImage = ({ slice }) =>
	<div className="post-image container">
		<figcaption className="block-img">
			<img src={ slice.primary.featured_image.url } alt={ slice.primary.featured_image.alt } />
		</figcaption>
	</div>

// Emphasized Image
const EmphasizedImage = ({ slice }) =>
	<div className="post-image container">
		<figcaption className="block-img emphasized">
			<img src={ slice.primary.featured_image.url } alt={ slice.primary.featured_image.alt } />
		</figcaption>
	</div>

// Full Width Image
const FullWidthImage = ({ slice }) =>
	<div className="post-image full-width-image" style={{ backgroundImage: 'url('+ slice.primary.featured_image.url +')' }}>
		<div className="wrapper">
		</div>
	</div>

// Function to determine the image type
const renderSwitch = function(slice) {
	switch(slice.label) {
		case "image-full-width":
			return <FullWidthImage slice={ slice } />
		case "emphasized":
			return <EmphasizedImage slice={ slice } />
		default:
			return <DefaultImage slice={ slice } />
	}
}

export default ({ slice }) => {
  return (
		<Fragment>
			{ renderSwitch(slice) }
		</Fragment>
	);
}
