"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";

type star = {
  clickReview: boolean;
  onClickReview: () => void;
  setClickReview: Dispatch<SetStateAction<boolean>>;
};

export default function StarRating({ onClickReview, setClickReview, clickReview }: star) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)} disabled={clickReview} />
              <FaStar
                className="star"
                size={20}
                color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={clickReview ? () => setRating(currentRating) : () => console.log("test")}
                onMouseLeave={() => {
                  setHover(0);
                  setRating(0);
                }}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
