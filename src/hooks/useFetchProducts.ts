import { useEffect, useState } from "react";
import { ProductsResponse } from "../types/types";
import { getAllProducts } from "../api/product.api";

export const useFetchProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<ProductsResponse | undefined>(undefined);
  const [skip, setSkip] = useState(0);
  const limit = 30;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(false);
      try {
        const products = await getAllProducts({ skip });
        setData(products);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [skip]);

  return { loading, error, data, skip, setSkip, limit };
};
