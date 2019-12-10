import React, { Component } from 'react';
import './inicio.css';
import produtos from './produtos';
import HomeCard from './HomeCard';

export class inicio extends Component {
    data = [
        {
            title: "pedra 1",
            price: '50',
            image: 'pedra1.jpeg'
        },
        {
            title: "pedra 2",
            price: '100',
            image: 'pedra2.jpeg'
        },
        {
            title: "pedra 3",
            price: '200',
            image: 'pedra3.jpeg'
        },
        {
            title: "pedra 4",
            price: '300',
            image: 'pedra4.jpeg'
        },
        {
            title: "pedra 5",
            price: '700',
            image: 'pedra5.jpeg'
        }
    ];

    render() {
        return (
            <div>

                <div className="header-area">
                    <div className="row">
                        <div className="col-md-12" style={{ backgroundColor: 'gray' }}>
                            <ul className="nav">
                                <li>
                                    <a href="inicio">
                                        <img src="/img/logo1.png" style={{ backgroundColor: 'gray' }}></img>
                                    </a>
                                </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="./login"><i className="fas fa-user"></i> Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fas fa-heart"></i> Favoritos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../PedrasCampinas/public/html/login.html"><i className=""></i>Minha
                                </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Categoria</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Idioma</a>
                                    </li>
                                    <li className="nav-item-1">
                                        <a href="#cart">
                                            <span className="cart-amunt">$100
                                    <i className="fas fa-shopping-cart"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>  
                        </div>
                    </div>

                    <div className="carousel-area">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="div-img-carousel">
                                        <img src="/img/carousel4.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="div-img-carousel">
                                        <img src="/img/carousel2.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="div-img-carousel">
                                        <img src="/img/carousel3.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="promo-area col-md-12">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo1">
                                    <i className="fas fa-sync-alt">
                                    </i>
                                    <p>30 Dias de Retorno</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo2">
                                    <i className="fas fa-truck"></i>
                                    <p>Frete Grátis</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo3">
                                    <i className="fas fa-lock"></i>
                                    <p>Pagamento Seguro</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-promo promo4">
                                    <i className="fas fa-gift"></i>
                                    <p>Novos Produtos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="lastest-product">
                                        <h2 className="section-title">Últimos Produtos</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-12">
                                    <div className="row">
                        
                                    {this.data.map(card => <HomeCard tittle={card.title} image={card.image} price={card.price} />)}
         
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="row" style={{ backgroundColor: 'black' }}>
                                <div className="col-md-12">
                                    <div className="copyright">
                                        <p>@ PedrasCampinas. Todos os direitos reservados</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-card-icon">
                                        <i className="fab fa-cc-mastercard"></i>
                                        <i className="fab fa-cc-visa "></i>
                                        <i className="fab fa-cc-paypal"></i>
                                        <i className="fab fa-cc-amazon-pay"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        };
        
export default inicio;