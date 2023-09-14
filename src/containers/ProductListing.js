import React,{ useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from '../redux/actions/productActions';

const Productlisting = () =>{
    const products = useSelector((state) => state);
    // We need to dispatch data from API to Action so that it will store in Redux Store.
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
       const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
        console.log(err);
       });
       console.log("response..",response);
       dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();    
    },[]);
    console.log("products...List",products);
    return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default Productlisting;