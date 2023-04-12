import { useState } from "react";
import "../index.css";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} className="img" />
      <figcaption className="tour-price">${price}</figcaption>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            read more
          </button>
        </p>
      </div>
      <button></button>
      <button
        onClick={() => removeTour(id)}
        className="btn btn-block delete-btn"
      >
        Remove
      </button>
    </article>
  );
};

export default Tour;
