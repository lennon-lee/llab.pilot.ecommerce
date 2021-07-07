import {
  PRODUCT_FIRST_BANNER_REQUEST,
  PRODUCT_FIRST_BANNER_SUCCESS,
  PRODUCT_FIRST_BANNER_FAIL,
  PRODUCT_SECOND_BANNER_REQUEST,
  PRODUCT_SECOND_BANNER_SUCCESS,
  PRODUCT_SECOND_BANNER_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL
} from '../constants/productConstants';
import axios from 'axios';

const listProducts = (
  category = '',
  searchKeyword = '',
  sortOrder = ''
) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products?category=' + category + '&searchKeyword=' + searchKeyword + '&sortOrder=' + sortOrder);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}

const detailProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST, payload: productId });

    const { data } = await axios.get('/api/products/' + productId);
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.message })
  }
}

export { listProducts, detailProduct };