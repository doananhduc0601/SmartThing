// import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/database';
import {db} from '../Firebaseconfig';
import {onValue, ref} from 'firebase/database';

export const fetchProductsRequest = () => ({
  type: 'FETCH_PRODUCTS_REQUEST',
});

export const fetchProductsSuccess = data => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: data,
});

export const fetchProductsFailure = error => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: error,
});
export const createProductSuccess = () => ({
  type: 'CREATE_PRODUCT_SUCCESS',
});
export const createProductRequest = () => ({
  type: 'CREATE_PRODUCT_REQUEST',
});

export const createProductFailure = error => ({
  type: 'CREATE_PRODUCT_FAILURE',
  payload: error,
});
export const updateProductSuccess = () => ({
  type: 'UPDATE_PRODUCT_SUCCESS',
});
export const updateProductRequest = () => ({
  type: 'UPDATE_PRODUCT_REQUEST',
});

export const updateProductFailure = error => ({
  type: 'UPDATE_PRODUCT_FAILURE',
  payload: error,
});
export const deleteProductSuccess = () => ({
  type: 'DELETE_PRODUCT_SUCCESS',
});
export const deleteProductRequest = () => ({
  type: 'DELETE_PRODUCT_REQUEST',
});

export const deleteProductFailure = error => ({
  type: 'DELETE_PRODUCT_FAILURE',
  payload: error,
});

export const fetchProducts = () => {
  return async dispatch => {
    dispatch(fetchProductsRequest());
    try {
      return onValue(ref(db, '/categories'), querySnapShot => {
        let data = querySnapShot.val() || {};
        dispatch(fetchProductsSuccess(data));
      });
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};

export const createProduct = productData => {
  return async dispatch => {
    dispatch(createProductRequest());
    try {
      const categoryRef = ref(db, '/categories');

      const newCategoryKey = push(categoryRef).key;

      const newCategory = {
        id: newCategoryKey,
        ...categoryData,
      };

      await set(child(categoryRef, newCategoryKey), newCategory);

      dispatch(createProductSuccess(newCategory));
    } catch (error) {
      dispatch(createProductFailure(error));
    }
  };
};

export const updatePowerSwitch = (categoryId, updatedSwitchValue) => {
  return async dispatch => {
    dispatch(updateCategoryRequest());
    try {
      const categoryRef = ref(db, `/categories/${categoryId}`);
      await update(categoryRef, updatedSwitchValue);
      // dispatch(fetchCategoriesSuccess());
    } catch (error) {
      dispatch(updateCategoryFailure(error));
    }
  };
};
export const updateFeatureSwitch = (Id, name, updatedSwitchValue) => {
  return async dispatch => {
    dispatch(updateCategoryRequest());
    try {
      const categoryRef = ref(db, `/categories/${Id}/feature/${name}`);
      await update(categoryRef, updatedSwitchValue);
      // dispatch(fetchCategoriesSuccess());
    } catch (error) {
      const errorPayload = {
        message: 'Failed to update switch value.',
        code: 'UPDATE_CTEGORY_FAILURE',
      };
      dispatch(updateCategoryFailure(errorPayload + error));
      console.log('error', error);
    }
  };
};

export const deleteProduct = productId => {
  return async dispatch => {
    dispatch(deleteProductRequest());
    try {
      const categoryRef = ref(db, `/categories/${categoryId}`);

      await remove(categoryRef);

      dispatch(deleteProductSuccess(categoryId));
    } catch (error) {
      dispatch(deleteProductFailure(error));
    }
  };
};
