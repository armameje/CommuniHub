"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [clickReview, setClickReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClickReview() {
    setClickReview(!clickReview);
  }

  function handleStarRate(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    const starRating = e.currentTarget.value;
    console.log(`Star Rating ${starRating}`);

    handleClickReview();
  }

  return (
    <div className="relative">
      <div className="flex w-full justify-center">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={currentRating}>
              <input type="radio" name="rating" value={currentRating} onClick={clickReview ? handleStarRate : () => {}} />
              <FaStar
                className="star"
                size={20}
                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={clickReview ? () => setRating(currentRating) : () => {}}
                onMouseLeave={() => {
                  setHover(0);
                  if (clickReview) setRating(0);
                }}
              />
            </label>
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-2">
        <button
          className={`border w-3/5 py-2 ${clickReview ? "border-zinc-200 bg-zinc-200 text-zinc-600" : "border-zinc-600 bg-zinc-600 text-white"}`}
          onClick={handleClickReview}
          disabled={clickReview}
        >
          -- REVIEW --
        </button>
      </div>
    </div>
  );
}
