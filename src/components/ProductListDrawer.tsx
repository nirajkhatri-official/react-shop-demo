import React, { useState } from "react";
import ProductList from "./ProductList";
import "../theme/ProductListDrawer.css";
const ProductListDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer} className="toggle-btn">
        ☰
      </button>
      {isDrawerOpen && (
        <div className="product-drawer">
          <ProductList toggleDrawer={toggleDrawer} />
        </div>
      )}
    </>
  );
};

export default ProductListDrawer;
