const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'CREATE_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'CREATE_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'CREATE_PRODUCT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'UPDATE_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'UPDATE_PRODUCT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DELETE_PRODUCT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'DELETE_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'DELETE_PRODUCT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
