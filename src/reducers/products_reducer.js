import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  const { type, payload } = action;

  if (type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (type === GET_PRODUCTS_SUCCESS) {
    const featured_products = payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: payload,
      featured_products,
    };
  }
  if (type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: false,
      single_product: payload,
    };
  }
  if (type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
