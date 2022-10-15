import React from "react";

function Review({ name, job, image, text }) {
	return (
		<div className="review">
			<div
				className="img-container"
				style={{ backgroundImage: `url(${image})` }}
			></div>
		</div>
	);
}

export default Review;
