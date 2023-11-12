// import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/database';
import {db} from '../Firebaseconfig';
import {onValue, ref, update} from 'firebase/database';

export const toggleSwitch = (itemName, newValue) => {
  return {
    type: 'TOGGLE_SWITCH',
    payload: {itemName, newValue},
  };
};
export const fetchCategoriesRequest = () => ({
  type: 'FETCH_CATEGORIES_REQUEST',
});

export const fetchCategoriesSuccess = data => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  payload: data,
});

export const fetchCategoriesFailure = error => ({
  type: 'FETCH_CATEGORIES_FAILURE',
  payload: error,
});

export const createCategoryRequest = () => ({
  type: 'CREATE_CTEGORY_REQUEST',
});

export const createCategorySuccess = data => ({
  type: 'CREATE_CTEGORY_SUCCESS',
  payload: data,
});
export const createCategoryFailure = error => ({
  type: 'CREATE_CTEGORY_FAILURE',
  payload: error,
});
export const updateCategoryRequest = () => ({
  type: 'UPDATE_CTEGORY_REQUEST',
});

export const updateCategorySuccess = data => ({
  type: 'UPDATE_CTEGORY_SUCCESS',
  payload: data,
});
export const updateCategoryFailure = errorPayload => ({
  type: 'UPDATE_CTEGORY_FAILURE',
  payload: errorPayload,
});
export const updateCategoryFailureSwitch = errorPayload => ({
  type: 'UPDATE_CTEGORY_SWITCH_FAILURE',
  payload: errorPayload,
});

export const deleteCategoryRequest = () => ({
  type: 'DELETE_CTEGORY_REQUEST',
});

export const deleteCategorySuccess = data => ({
  type: 'DELETE_CTEGORY_SUCCESS',
  payload: data,
});
export const deleteCategoryFailure = errorMessage => ({
  type: 'DELETE_CTEGORY_FAILURE',
  payload: errorMessage,
});

export const fetchCategories = () => {
  return async dispatch => {
    dispatch(fetchCategoriesRequest());
    try {
      return onValue(ref(db, '/categories'), querySnapShot => {
        let data = querySnapShot.val() || {};
        // let todoItems = {...data};
        dispatch(fetchCategoriesSuccess(data));
      });
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
// export const createCategory = categoryData => {
//   return async dispatch => {
//     dispatch(createCategoryRequest());
//     try {
//       const categoryRef = ref(db, '/categories');

//       const newCategoryKey = push(categoryRef).key;

//       const newCategory = {
//         id: newCategoryKey,
//         ...categoryData,
//       };

//       await set(child(categoryRef, newCategoryKey), newCategory);

//       dispatch(createCategorySuccess(newCategory));
//     } catch (error) {
//       dispatch(createCategoryFailure(error));
//     }
//   };
// };

export const updateCategory = (categoryId, updatedData) => {
  return async dispatch => {
    dispatch(updateCategoryRequest());
    try {
      const categoryRef = ref(db, `/categories/${categoryId}`);

      await update(categoryRef, updatedData);

      dispatch(fetchCategoriesSuccess(updatedData));
    } catch (error) {
      dispatch(updateCategoryFailure(error));
    }
  };
};
export const updateCategorySwitch = (categoryId, updatedSwitchValue) => {
  return async dispatch => {
    dispatch(updateCategoryRequest());
    try {
      const categoryRef = ref(db, `/categories/${categoryId}`);
      await update(categoryRef, updatedSwitchValue);
      // dispatch(fetchCategoriesSuccess());
    } catch (error) {
      console.log(error, 'error');
      dispatch(updateCategoryFailureSwitch(error));
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
// export const deleteCategory = categoryId => {
//   return async dispatch => {
//     dispatch(deleteCategoryRequest());
//     try {
//       const categoryRef = ref(db, `/categories/${categoryId}`);

//       await remove(categoryRef);

//       dispatch(deleteCategorySuccess(categoryId));
//     } catch (error) {
//       dispatch(deleteCategoryFailure(error));
//     }
//   };
// };
