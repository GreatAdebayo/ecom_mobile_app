import productReducer from "./reducer";
import {
  GET_WEARABLES_SUCCESS,
  GET_WEARABLES_FAILED,
  GET_WEARABLES_LOADING,
  GET_LAPTOPS_SUCCESS,
  GET_LAPTOPS_FAILED,
  GET_LAPTOPS_LOADING,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILED,
  GET_PHONES_LOADING,
  GET_ACCESSORIES_SUCCESS,
  GET_ACCESSORIES_FAILED,
  GET_ACCESSORIES_LOADING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILED,
  GET_PRODUCT_DETAILS_LOADING,
  SET_VARIANT,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  INCREASE_QUANTITY,
  REDUCE_QUANTITY,
  GET_BASKET_LOADING,
  GET_BASKET_SUCCESS,
  GET_BASKET_FAILED,
  NEW_ORDER_LOADING,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAILED,
  FETCH_ORDERS_LOADING,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
  FETCH_ORDER_DETAILS_LOADING,
  FETCH_ORDER_DETAILS_SUCCESS,
  FETCH_ORDER_DETAILS_FAILED,
} from "./action";
import { createContext, useReducer } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProductContext = createContext();

export const ProductState = (props) => {
  const initialState = {
    wearables: [],
    laptops: [],
    phones: [],
    accessories: [],
    isWearablesLoading: false,
    isLaptopsLoading: false,
    isPhonesLoading: false,
    isAccessoriesLoading: false,
    wearablesErrMsg: {},
    laptopsErrMsg: {},
    phonesErrMsg: {},
    accessoriesErrMsg: {},
    productDetails: {},
    productDetailsErrMsg: {},
    isProductDetailsLoading: false,
    variant: {},
    favorites: [],
    basket: [],
    isGetBasketLoading: false,
    basketErrMsg: {},
    newOrderLoading: false,
    order: {},
    newOrderErrMsg: {},
    fetchOrdersLoading: false,
    orders: [],
    fetchOrdersErrMsg: {},
    fetchOrderDetailsLoading: false,
    orderDetails: [],
    fetchOrderDetailsErrMsg: {},
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getProducts = async (type) => {
    try {
      const res = await axios.get(`${baseUrl}/product/${type}`);
      const { products } = res.data;
      return products;
    } catch (error) {
      return error;
    }
  };

  const getWearables = async () => {
    dispatch({
      type: GET_WEARABLES_LOADING,
    });
    try {
      const products = await getProducts("wearables");
      dispatch({
        type: GET_WEARABLES_SUCCESS,
        payload: products,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: GET_WEARABLES_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: GET_WEARABLES_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  const getLaptops = async () => {
    dispatch({
      type: GET_LAPTOPS_LOADING,
    });
    try {
      const products = await getProducts("laptops");
      dispatch({
        type: GET_LAPTOPS_SUCCESS,
        payload: products,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: GET_LAPTOPS_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: GET_LAPTOPS_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  const getPhones = async () => {
    dispatch({
      type: GET_PHONES_LOADING,
    });
    try {
      const products = await getProducts("phones");
      dispatch({
        type: GET_PHONES_SUCCESS,
        payload: products,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: GET_PHONES_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: GET_PHONES_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  const getAccessories = async () => {
    dispatch({
      type: GET_ACCESSORIES_LOADING,
    });
    try {
      const products = await getProducts("accessories");
      dispatch({
        type: GET_ACCESSORIES_SUCCESS,
        payload: products,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: GET_ACCESSORIES_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: GET_ACCESSORIES_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  const getProductDetails = async (id) => {
    dispatch({
      type: GET_PRODUCT_DETAILS_LOADING,
    });
    try {
      const res = await axios.get(`${baseUrl}/product-details/${id}`);
      const { product } = res.data;
      setVariant(product.variant[0]);
      dispatch({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        payload: product,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: GET_PRODUCT_DETAILS_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: GET_PRODUCT_DETAILS_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  const setVariant = (product) => {
    dispatch({
      type: SET_VARIANT,
      payload: product,
    });
  };

  const addToFavorites = (product) => {
    const findFavorites = state.favorites.find((f) => f._id === product._id);
    if (!findFavorites)
      dispatch({
        type: ADD_TO_FAVORITES,
        payload: product,
      });
  };

  const removeFromFavorites = (_id) => {
    const filteredFavorites = state.favorites.filter((f) => f._id !== _id);
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: filteredFavorites,
    });
  };

  const addToBasket = async (product) => {
    const findBasket = state.basket.find((f) => f._id === product._id);
    if (!findBasket) {
      let addQTyToProduct = {
        ...product,
        quantity: 1,
        total: parseFloat(product.price) * 1,
      };
      dispatch({
        type: ADD_TO_BASKET,
        payload: addQTyToProduct,
      });
      // save basket in Local Storage
      const basket = JSON.parse(await AsyncStorage.getItem("@EcommBasket"));
      if (!basket) {
        const newBasket = [];
        newBasket.push(addQTyToProduct);
        await AsyncStorage.setItem("@EcommBasket", JSON.stringify(newBasket));
      } else {
        basket.push(addQTyToProduct);
        await AsyncStorage.setItem("@EcommBasket", JSON.stringify(basket));
      }
    }
  };

  const getBasket = async () => {
    dispatch({
      type: GET_BASKET_LOADING,
    });
    const value = JSON.parse(await AsyncStorage.getItem("@EcommBasket"));
    dispatch({
      type: GET_BASKET_SUCCESS,
      payload: value,
    });
  };

  const removeFromBasket = async (_id) => {
    const filteredBasket = state.basket.filter((f) => f._id !== _id);
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: filteredBasket,
    });
    await AsyncStorage.setItem("@EcommBasket", JSON.stringify(filteredBasket));
  };

  const increaseQuantity = (product) => {
    let findBasket = state.basket.find((f) => f._id === product._id);
    findBasket.quantity = findBasket.quantity + 1;
    findBasket.total = parseFloat(findBasket.price) * findBasket.quantity;
    dispatch({
      type: INCREASE_QUANTITY,
      payload: state.basket,
    });
  };

  const reduceQuantity = (product) => {
    let findBasket = state.basket.find((f) => f._id === product._id);
    if (findBasket.quantity > 1) {
      findBasket.quantity = findBasket.quantity - 1;
      findBasket.total = parseFloat(findBasket.price) * findBasket.quantity;
      dispatch({
        type: REDUCE_QUANTITY,
        payload: state.basket,
      });
    }
  };

  const checkout = async () => {
    dispatch({
      type: NEW_ORDER_LOADING,
    });
    const checkout = state.basket.map((basket) => ({
      _id: basket._id,
      quantity: basket.quantity,
      price: basket.price,
    }));
    try {
      const res = await axios.post(`${baseUrl}/order`, checkout, config);
      dispatch({
        type: NEW_ORDER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: NEW_ORDER_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: NEW_ORDER_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  const fetchOrders = async () => {
    dispatch({
      type: FETCH_ORDERS_LOADING,
    });
    try {
      const res = await axios.get(`${baseUrl}/orders`);
      const { orders } = res.data;
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: orders,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: FETCH_ORDERS_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: FETCH_ORDERS_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  const fetchOrderDetails = async (id) => {
    dispatch({
      type: FETCH_ORDER_DETAILS_LOADING,
    });
    try {
      const res = await axios.get(`${baseUrl}/order/${id}`);
      const { order } = res.data;
      dispatch({
        type: FETCH_ORDER_DETAILS_SUCCESS,
        payload: order,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: FETCH_ORDER_DETAILS_FAILED,
          payload: "server not responding",
        });
      if (data)
        dispatch({
          type: FETCH_ORDER_DETAILS_FAILED,
          payload: status === 503 ? "server error" : data.error,
        });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        wearables: state.wearables,
        laptops: state.laptops,
        phones: state.phones,
        accessories: state.accessories,
        isWearablesLoading: state.isWearablesLoading,
        isLaptopsLoading: state.isLaptopsLoading,
        isPhonesLoading: state.isPhonesLoading,
        isAccessoriesLoading: state.isAccessoriesLoading,
        wearablesErrMsg: state.wearablesErrMsg,
        laptopsErrMsg: state.laptopsErrMsg,
        phonesErrMsg: state.phonesErrMsg,
        accessoriesErrMsg: state.accessoriesErrMsg,
        getWearables,
        getLaptops,
        getPhones,
        getAccessories,
        getProductDetails,
        productDetails: state.productDetails,
        productDetailsErrMsg: state.productDetailsErrMsg,
        isProductDetailsLoading: state.isProductDetailsLoading,
        setVariant,
        variant: state.variant,
        addToFavorites,
        favorites: state.favorites,
        removeFromFavorites,
        addToBasket,
        removeFromBasket,
        basket: state.basket,
        increaseQuantity,
        reduceQuantity,
        getBasket,
        isGetBasketLoading: state.isGetBasketLoading,
        basketErrMsg: state.basketErrMsg,
        checkout,
        newOrderLoading: state.newOrderLoading,
        order: state.order,
        newOrderErrMsg: state.newOrderErrMsg,
        orders: state.orders,
        fetchOrdersErrMsg: state.fetchOrdersErrMsg,
        fetchOrderDetailsLoading: state.fetchOrderDetailsLoading,
        orderDetails: state.orderDetails,
        fetchOrderDetailsErrMsg: state.fetchOrderDetailsErrMsg,
        fetchOrders,
        fetchOrderDetails,
        fetchOrdersLoading: state.fetchOrdersLoading,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
