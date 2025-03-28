import { Product } from "../types/types";
import { useNavigate } from "react-router-dom";
import "../theme/ProductInfo.css";
import getDiscountedPrice from "../utils/getDiscountedPrice";

const ProductInfo = ({ data }: { data: Product }) => {
  const navigate = useNavigate();
  const discountedPrice = getDiscountedPrice(
    data?.price,
    data?.discountPercentage
  );

  return (
    <div
      className="product-info-wrapper"
      onClick={() => navigate(`/product/${data?.id}`)}
    >
      <img
        className="product-info-image"
        src={data?.thumbnail}
        alt={data?.title}
      />

      <h3 className="product-info-title">{data?.title}</h3>

      <p className="product-info-brand-category">
        {data?.brand} • {data?.category}
      </p>

      <div className="product-info-price">
        <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
        <span className="original-price">${data?.price.toFixed(2)}</span>
      </div>

      <div className="product-info-stock-wrapper">
        <p
          className={`product-info-stock ${
            data?.availabilityStatus === "In Stock" ? "in-stock" : "low-stock"
          }`}
        >
          {data?.availabilityStatus} | Available: {data?.stock}
        </p>
      </div>
      <p className="product-info-min-order">
        Minimum Order: <strong>{data?.minimumOrderQuantity || 1}</strong>
      </p>
      <div className="product-info-rating">
        <span>⭐</span>
        <span>{data?.rating}</span>
      </div>
    </div>
  );
};

export default ProductInfo;
