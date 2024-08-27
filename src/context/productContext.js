import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api-data-e3yn.onrender.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  homeMapping: [],
  isSingleLoading:false,
  isSingleError: false,
  singleProduct:{},
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({type:"SET_LOADING"})
    try {
      const res = await axios.get(url);
      const products = res.data;
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
        dispatch({type:"API ERROR"})
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
        dispatch({type:"SINGLE_PRODUCT_ERROR"})
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

const useProviderContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProviderContext };
