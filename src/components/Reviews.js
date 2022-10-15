import React, { useState } from "react";
import Review from "./Review";
import reviews from "../data";

function Reviews() {
	const [currReview, setCurrReview] = useState(0);
	return (
		<div className="review">
			<Review key={reviews[currReview].id} {...reviews[currReview]} />
		</div>
	);
}

export default Reviews;
