import React, { useEffect } from "react";
import axios from "axios";
// To get parameter we can use useParams hook
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from '../redux/actions/productActions'
import styled from "styled-components";

const ProductDetails = () =>{
    const product = useSelector((state) => state.singleProduct);
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log("product..",product);
    // const { title , image} = product;
    const { id, title, category, price, image, description } = product;

    const fetchProductDetails = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((error)=>{
            console.log(error);
        })
        dispatch(selectedProducts(response.data));
    }
    useEffect(()=>{
        if(productId && productId !== ""){
            fetchProductDetails()
        }
    },[productId])
    return(
        <>
        <Container>
            {Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
                <div className="main-detail-section">
                    <div className="left-section">
                        <img src={image}/>
                    </div>
                    <div className="right-section">
                        <div className="header">{title}</div>
                        <div className="meta-price"> <p> $ {price} </p></div>
                        <div className="meta-category">{category}</div>
                        <div className="meta-description">$ {description}</div>
                    </div>
                </div>
            )}
            
        </Container>
        </>
    )
}

const Container = styled.div`
    .main-detail-section {
        display: flex;
        border-style: solid;
        border-radius: 0.5rem;
        padding: 26px;
        margin-right: 277px;
        margin-left: 277px;
        border-color: #80808096;
        margin-top: 71px;
        align-items: center;
    }
    img {
        border-style: none;
        height: 40rem;
        width: auto;
    }
    .right-section {
        position: relative;
        margin-top: -321px;
    }
    .header {
        font-size: 2rem;
        text-align: left;
    }
    .meta-price {
        margin: 20px;
        padding: 30px;
        background: orange;
        line-height: 18px;
        height: 18px;
        font-size: 18px;
    }
`;
export default ProductDetails;