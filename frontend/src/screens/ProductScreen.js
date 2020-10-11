import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productActions';



function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            
        }
    }, [dispatch, props.match.params.id])
    const handleAddToCart = ()=>{
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }
return <div>
    <div className="p-3">
        <Link to="/" className="btn btn-lg btn-info"> Go Back</Link>
        {loading? <div>loading...</div>:
        error? <div>{error}</div>:( <div className="details">
        <div className="details-image">
            <img src={product.image} alt="prod act"></img>
        </div>
        <div className="details-info">
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                   {product.rating} Stars ({product.numReiews} Reiews)
                </li>
                <li>
                    Price: <b>{product.price}</b>
                </li>
                <li>
                    Description:
                    <div>
                        {product.description}
                    </div>
                </li>
            </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>
                    Price: {product.price}
                </li>
                <li>
                    Status: {product.countInStock > 0 ? "In Stock" : "Not available" }
                </li>
                <li>
                    Qty: 
                    <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                        {[...Array(product.countInStock).keys()].map(x =>
                            <option key={x + 1} value={x+1}>{x+1}</option>
                        )}
                    </select>
                </li>
                <li>
                    {product.countInStock > 0 &&  <button onClick={handleAddToCart} className="button btn-outline-success">Add to cart</button>}
                   
                </li>
            </ul>
        </div>
    </div>
)
        }
    </div>
    
    
    </div>
}


export default  ProductScreen