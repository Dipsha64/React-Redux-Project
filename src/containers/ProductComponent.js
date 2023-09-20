import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductComponent = () =>{
    const productData = useSelector((state) => state.allProducts.products);
    const renderList = productData.map((pro)=>{
        const { id, image, title, category, price } = pro;
        return(
            <>
            <Container>
            <div className="column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="cards">
                    <div className="image"><img src={image} alt={title}/></div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta-price">$ {price}</div>
                        <div className="meta-category">{category}</div>
                    </div>
                </div>
                </Link>
            </div>
            </Container>
            </>
        )
    })
    return(
        <>{renderList}</>
    )
    
}

const Container = styled.div`
    .cards {
        padding: 3rem;
        box-sizing: border-box;
        border-color: black;
    }
    .column {
        border-style: solid;
        border-color: #80808059;
        border-radius: 0.5rem;
        margin: 1rem;
    }
    .image {
        height: 30vh;
        width: 30vh;
    }
    img {
        height: 30vh;
        width: 30vh;
        margin-top: -35px;
    }
    .header {
        font-size: 18px;
        font-weight: bold;
    }
    .meta-price {
        font-size: 18px;
        text-align: center;
        padding-top: 10px;
        font-weight: bolder;
    }
    .meta-category {
        padding-top: 3px;
        font-size: 15px;
        color: #8b8181;
    }
`;

export default ProductComponent;