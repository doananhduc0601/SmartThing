import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import ErrorOverLay from '../../components/Ui/Handle/ErrorOverLay';
import LoadingOverlay from '../../components/Ui/Handle/LoadingOverLay';
import DetailsProducts from './DetailsProducts';

const OverView = () => {
  const route = useRoute();
  const {idCategories} = route.params;
  const {data, loading, error} = useSelector(state => state.categories);
  const product = data.find(category => category.id === idCategories);
  if (error) {
    return <ErrorOverLay message={error} />;
  }
  if (loading) {
    return <LoadingOverlay />;
  }

  return <DetailsProducts data={product} />;
};

export default OverView;
