import React from "react";
import "../theme/ProductListPagination.css";

interface PaginationProps {
  skip: number;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  total: number | undefined;
}

const ProductListPagination: React.FC<PaginationProps> = ({
  skip,
  setSkip,
  limit,
  total,
}) => {
  return (
    <div className="pagination-container">
      <button
        onClick={() => setSkip((prev) => Math.max(prev - limit, 0))}
        disabled={skip === 0}
        className={`button ${
          skip === 0 ? "button-disabled" : "button-enabled"
        }`}
      >
        Previous
      </button>
      <button
        onClick={() =>
          setSkip((prev) =>
            total
              ? prev + limit < total
                ? prev + limit
                : total - Math.min(limit, total % limit)
              : prev
          )
        }
        disabled={!total || skip + limit >= total}
        className={`button ${
          !total || skip + limit >= total ? "button-disabled" : "button-enabled"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default ProductListPagination;
