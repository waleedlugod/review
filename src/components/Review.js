import React from "react";

function Review({ name, job, image, text }) {
	return (
		<>
			<div
				className="image-container"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<h4 className="name">{name}</h4>
			<p className="job">{job}</p>
			<p className="text">{text}</p>
		</>
	);
}

export default Review;
