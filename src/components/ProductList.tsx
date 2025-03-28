import React from "react";
import ProductInfo from "./ProductInfo";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Loading from "./Loading";
import ApiError from "./ApiError";
import ProductListPagination from "./ProductListPagination";
import "../theme/ProductList.css";

const ProductList: React.FC = () => {
  const { loading, error, data, limit, setSkip, skip } = useFetchProducts();

  return (
    <>
      <h2 className="product-list-header">Product List</h2>
      {loading && <Loading />}
      {error && <ApiError />}
      {data && (
        <>
          <div className="product-list-container">
            {data?.products?.map((product) => (
              <ProductInfo key={product?.id} data={product} />
            ))}
          </div>
          <ProductListPagination
            limit={limit}
            setSkip={setSkip}
            skip={skip}
            total={data?.total}
          />
        </>
      )}
    </>
  );
};

export default ProductList;
