import axios from "axios";
const { PRUDUCT_LIST_SUCCESS, PRUDUCT_LIST_REQUEST, PRUDUCT_LIST_FAIL, PRUDUCT_DETAILS_REQUEST, PRUDUCT_DETAILS_SUCCESS, PRUDUCT_DETAILS_FAIL } = require("../constants/productConstants");

const listProducts = () => async (dispatch) =>{
   try {
    dispatch({type: PRUDUCT_LIST_REQUEST});
    const {data} = await axios.get('/api/products');
    dispatch({type: PRUDUCT_LIST_SUCCESS, payload:data});
       
   } catch (error) {
    dispatch({type: PRUDUCT_LIST_FAIL, payload:error.message});
       
   }
}
const detailsProduct = (productId) => async (dispatch) =>{
   try {
    dispatch({type: PRUDUCT_DETAILS_REQUEST, payload: productId});
    const {data} = await axios.get('/api/product/' + productId);
    dispatch({type: PRUDUCT_DETAILS_SUCCESS, payload:data});
       
   } catch (error) {
    dispatch({type: PRUDUCT_DETAILS_FAIL, payload:error.message});
       
   }
}
export {listProducts, detailsProduct}