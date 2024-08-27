import {useEffect} from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useProviderContext } from "../../context/productContext";

const API = "https://api-data-e3yn.onrender.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProviderContext();

//   console.log(singleProduct);

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // eslint-disable-next-line
  }, []);

  if (isSingleLoading) {
    return <div>.... loading </div>;
  }
  return (
    <div>
      {" "}
      <h1>SingleProduct {singleProduct.title}</h1>{" "}
    </div>
  );
};

export default SingleProduct;
