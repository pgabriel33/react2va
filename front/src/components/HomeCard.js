import React, { Component } from 'react';

function HomeCard(props) {
        return (
            <div>
                <div className="product-imagem">
                    <div className="place-container">
                         <li> <a href="#"><img className="div-produto"
                            src={process.env.PUBLIC_URL+"/img/" + props.image} width="200" height="200"
                            style={{ margin: '0 0 0 0' }} /></a> 

                            <div className="detail-product">
                                    <div className="item-title"style={{margin:'0px 0 0 40'}}>
                                    <a>{props.tittle}</a>
                                </div>
                                <div className="item-price-row">
                                    <span className="price-current">{props.price}</span>
                                </div>
                                <div className="item-shipping-wrap">
                                    <span className="shipping-value">Frete Grátis</span>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>

            </div>
        );
    }
export default HomeCard;