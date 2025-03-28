import { IProductReview } from "../types/types";
import "../theme/ProductReviewList.css";

const ProductReviewList = ({ data }: { data: IProductReview[] }) => {
  return (
    <div className="reviews-container">
      <h3 className="reviews-header">Customer Reviews</h3>
      {data?.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <span className="reviewer-name">{review.reviewerName}</span>
            <span className="review-date">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          <div className="review-rating">
            {"★".repeat(Math.round(review.rating))}
            <span className="review-rating-text">({review.rating})</span>
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviewList;
