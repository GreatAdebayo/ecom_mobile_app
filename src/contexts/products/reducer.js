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
} from "./action";

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_WEARABLES_LOADING:
      return {
        ...state,
        isWearablesLoading: true,
      };
    case GET_WEARABLES_SUCCESS:
      return {
        ...state,
        wearables: action.payload,
        isWearablesLoading: false,
      };
    case GET_WEARABLES_FAILED:
      return {
        ...state,
        wearables: [],
        isWearablesLoading: false,
        wearablesErrMsg: { msg: action.payload, type: "bad" },
      };
    case GET_LAPTOPS_LOADING:
      return {
        ...state,
        isLaptopsLoading: true,
      };
    case GET_LAPTOPS_SUCCESS:
      return {
        ...state,
        laptops: action.payload,
        isLaptopsLoading: false,
      };
    case GET_LAPTOPS_FAILED:
      return {
        ...state,
        laptops: [],
        isLaptopsLoading: false,
        laptopsErrMsg: { msg: action.payload, type: "bad" },
      };
    case GET_PHONES_LOADING:
      return {
        ...state,
        isPhonesLoading: true,
      };
    case GET_PHONES_SUCCESS:
      return {
        ...state,
        phones: action.payload,
        isPhonesLoading: false,
      };
    case GET_PHONES_FAILED:
      return {
        ...state,
        phones: [],
        isPhonesLoading: false,
        phonesErrMsg: { msg: action.payload, type: "bad" },
      };
    case GET_ACCESSORIES_LOADING:
      return {
        ...state,
        isAccessoriesLoading: true,
      };
    case GET_ACCESSORIES_SUCCESS:
      return {
        ...state,
        accessories: action.payload,
        isAccessoriesLoading: false,
      };
    case GET_ACCESSORIES_FAILED:
      return {
        ...state,
        accessories: [],
        isAccessoriesLoading: false,
        accessoriesErrMsg: { msg: action.payload, type: "bad" },
      };
    case GET_PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        isProductDetailsLoading: true,
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
        isProductDetailsLoading: false,
        productDetailsErrMsg: { msg: action.payload, type: "bad" },
      };
    case GET_PRODUCT_DETAILS_FAILED:
      return {
        ...state,
        productDetails: {},
        isProductDetailsLoading: false,
        productDetailsErrMsg: { msg: action.payload, type: "bad" },
      };
    case SET_VARIANT:
      return {
        ...state,
        variant: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [action.payload, ...state.basket],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: action.payload,
      };

    case INCREASE_QUANTITY:
    case REDUCE_QUANTITY:
      return {
        ...state,
        basket: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
