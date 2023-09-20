import React,{ useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from '../redux/actions/productActions';
import styled from "styled-components";

const Productlisting = () =>{
    const products = useSelector((state) => state);
    // We need to dispatch data from API to Action so that it will store in Redux Store.
    const dispatch = useDispatch();

    const fetchProducts = async () =>{
       const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
        console.log(err);
       });
       dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();    
    },[]);
    console.log("products...List",products);
    return(
        <>
        <Container>
            <div className="product-mainlist">
                <ProductComponent/>
            </div>
        </Container></>
    )
}

const Container = styled.div`
    .product-mainlist{
        margin: 10rem;
        margin-left:20px;
        margin-right:20px;
        overflow: hidden;
        display: grid;
        grid-gap: 20px;
        justify-content: center;
        grid-template-columns: repeat(4, calc(25% - 20px));
    }
`;

export default Productlisting;