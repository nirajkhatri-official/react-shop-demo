import { useEffect, useState } from "react";
import { Product, ProductsResponse } from "../types/types";
import { getAllProducts, getProductById } from "../api/product.api";
import { useParams } from "react-router-dom";

export const useFetchProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Product | undefined>(undefined);
  const { id: id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      setData(undefined);
      setError(false);
      try {
        const products = await getProductById(Number(id));
        setData(products);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return { loading, error, data };
};
