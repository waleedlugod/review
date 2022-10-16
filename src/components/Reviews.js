import React, { useState } from "react";
import Review from "./Review";
import reviews from "../data";
import { ReactComponent as LeftArrow } from "../images/left-svgrepo-com.svg";
import { ReactComponent as RightArrow } from "../images/right-svgrepo-com.svg";

function Reviews() {
	const [currReview, setCurrReview] = useState(0);

	function handleChangeReview(offset) {
		const resultIndex = currReview + offset;
		if (resultIndex < 0) {
			setCurrReview(() => reviews.length + resultIndex);
		} else if (resultIndex >= reviews.length) {
			setCurrReview(() => resultIndex - reviews.length);
		} else {
			setCurrReview(() => resultIndex);
		}
	}

	function getRandomReview() {
		let num = 0;
		do {
			num = Math.floor(Math.random() * reviews.length);
		} while (num == currReview);
		return num;
	}

	return (
		<div className="reviews">
			<Review key={reviews[currReview].id} {...reviews[currReview]} />
			<div className="change-btns">
				<div>
					<button className="next-btn" onClick={() => handleChangeReview(-1)}>
						<LeftArrow />
					</button>
					<button className="next-btn" onClick={() => handleChangeReview(1)}>
						<RightArrow />
					</button>
				</div>
				<button
					className="rnd-btn"
					onClick={() => setCurrReview(() => getRandomReview())}
				>
					Surprise Me
				</button>
			</div>
		</div>
	);
}

export default Reviews;
