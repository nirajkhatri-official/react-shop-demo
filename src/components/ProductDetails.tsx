import React from "react";
import { useFetchProductDetail } from "../hooks/useFetchProductDetail";
import "../theme/ProductDetail.css";
import getDiscountedPrice from "../utils/getDiscountedPrice";
import ProductReviewList from "./ProductReviewList";
import Loading from "./Loading";
import ApiError from "./ApiError";
import ProductListDrawer from "./ProductListDrawer";

const ProductDetails: React.FC = () => {
  const { loading, error, data } = useFetchProductDetail();

  const discountedPrice = getDiscountedPrice(
    data?.price ?? 0,
    data?.discountPercentage ?? 0
  );

  return (
    <div className="container">
      <div className="header-wrapper">
        <h2 className="header">Product Details</h2>
        <ProductListDrawer />
      </div>
      {loading && <Loading />}
      {error && <ApiError />}
      {data && (
        <>
          <div className="product-info">
            <div className="image-container">
              <img src={data?.images[0]} alt={data?.title} className="image" />
            </div>

            <div className="product-details">
              <h3 className="product-title">{data?.title}</h3>
              <p className="product-category">{data?.category}</p>
              <p className="product-description">{data?.description}</p>

              <div className="price-container">
                <span className="price">${discountedPrice.toFixed(2)}</span>
                <span className="original-price">
                  ${data?.price.toFixed(2)}
                </span>
              </div>
              <div>
                <p
                  className={`${
                    data?.availabilityStatus === "In Stock"
                      ? "in-stock"
                      : "low-stock"
                  }`}
                >
                  {data?.availabilityStatus} | Available: {data?.stock}
                </p>
                <p>
                  Minimum Order:{" "}
                  <strong>{data?.minimumOrderQuantity || 1}</strong>
                </p>
              </div>

              <div className="brand">
                <span className="brand-label">Brand:</span>
                <span>{data?.brand}</span>
              </div>
            </div>
          </div>

          <ProductReviewList data={data?.reviews} />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
