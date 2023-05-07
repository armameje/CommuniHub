import { AiOutlineStar } from "react-icons/ai";

export default function StarRating() {
  return (
    <div>
      <div className="flex flex-row-reverse">
        <label className="label-star">
          <input type="radio" name="stars" className="input-star" />
          <AiOutlineStar />
        </label>
        <label className="label-star">
          <input type="radio" name="stars" className="input-star" />
          <AiOutlineStar />
        </label>
        <label className="label-star">
          <input type="radio" name="stars" className="input-star" />
          <AiOutlineStar />
        </label>
        <label className="label-star">
          <input type="radio" name="stars" className="input-star" />
          <AiOutlineStar />
        </label>
        <label className="label-star">
          <input type="radio" name="stars" className="input-star" />
          <AiOutlineStar />
        </label>
      </div>
    </div>
  );
}
