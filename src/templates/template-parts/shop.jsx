import * as React from 'react';
import shopData from './jsonData/Home/shop.json'
import {Component} from "react";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopData
        }
    }

    render() {
        return (

            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-12">
                            <img src={rootSettings.URL.build + `${shopData.image}`} className="img-fluid mx-auto d-block" alt=""/>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title">
                                <div className="alert alert-light alert-pills" role="alert">
                                    <span className="badge bg-primary rounded-pill me-1">
                                        {shopData.tag.pill}
                                    </span>
                                    <span className="content">
                                        {shopData.tag.title}
                                        <i className="uil uil-angle-right-b align-middle"></i>
                                    </span>
                                </div>
                                <h4 className="title mb-4">
                                    {shopData.title}
                                </h4>
                                <p className="text-muted para-desc mb-0">
                                    {shopData.text}
                                </p>
                                <div className="my-4">
                                    {shopData.buttons.map(item => (
                                            <a href={item.url} className="btn btn-lg btn-dark mt-2 me-2">
                                                <i className={`uil ${item.icon}`}></i> {item.title}
                                            </a>
                                        )
                                    )}

                                </div>

                                <div className="d-inline-block">
                                    <div className="pt-4 d-flex align-items-center border-top">
                                        <div className="content">
                                            <h6 className="mb-0">{shopData.footer.text}</h6>
                                            <a href={shopData.footer.link.url} className="text-primary h6">
                                                {shopData.footer.link.title} <i className="uil uil-angle-right-b"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Shop;