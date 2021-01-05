import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { listProducts } from '../../actions/ProdcutActions';
import ProductList from '../../components/ProductList'
import "../../styles/AllProducts.css"

const AllProducts = () => {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const dispatch = useDispatch();

    const productList = useSelector( state => state.productList);
    const {loading,error,products} = productList;


    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div className="admin-orders-page-container">
            <div className="header-sec">
                <h2>Hello {userInfo.name}!</h2>
                <button className="add-product-btn">
                    Add new product
                </button>
                <h3>
                    <strong>Total Products</strong>
                </h3>
                <h1 style={{textAlign:"center"}}>
                    19
                </h1>
            </div>
            
            
            <ProductList/>
        </div>
    )
}

export default AllProducts
