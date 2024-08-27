import { useEffect } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useProviderContext } from "../../context/productContext";

const API = "https://api-data-e3yn.onrender.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProviderContext();

  const { id } = useParams();

  const { title, price } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div>.... loading </div>;
  }
  return (
    <div>
      SingleProduct {title} {price}
    </div>
  );
};

export default SingleProduct;
