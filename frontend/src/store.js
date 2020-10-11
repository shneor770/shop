import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducers";


const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const composeEnhancer = window.__redux_devtools_extension_compose__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))




export default store