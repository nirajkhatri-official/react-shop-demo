import React from "react";
import ProductInfo from "./ProductInfo";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Loading from "./Loading";
import ApiError from "./ApiError";
import ProductListPagination from "./ProductListPagination";
import "../theme/ProductList.css";

interface IProductListProps {
  toggleDrawer?: () => void;
}

const ProductList: React.FC<IProductListProps> = ({ toggleDrawer }) => {
  const { loading, error, data, limit, setSkip, skip } = useFetchProducts();

  return (
    <>
      <div className="product-list-header">
        <h2>Product List</h2>
        {toggleDrawer && (
          <button onClick={toggleDrawer} className="close-btn">
            ✖
          </button>
        )}
      </div>
      {loading && <Loading />}
      {error && <ApiError />}
      {data && (
        <>
          <div className="product-list-container">
            {data?.products?.map((product) => (
              <ProductInfo
                key={product?.id}
                data={product}
                toggleDrawer={toggleDrawer}
              />
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
