import * as React from 'react';
import heroData from './jsonData/Home/hero.json'
import {Component} from "react";

let sectionStyle = {
    background: 'url(' + rootSettings.URL.build + 'images/shapes/shape2.png) top',
    zIndex: '0'
};

class Hero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heroData
        }
    }

    render() {
        return (
            <section className="bg-half-170 pb-0 bg-light d-table w-100 overflow-hidden"
                     style={sectionStyle}
            >
                <div className="container">
                    <div className="row align-items-center mt-5 mt-sm-0">
                        <div className="col-md-6">
                            <div className="title-heading text-center text-md-start">
                                <span className="badge rounded-pill bg-soft-primary">{heroData.tag}</span>
                                <h4 className="heading mb-3 mt-2">
                                    {heroData.headTitle.title}
                                    <span className="fw-bold d-block">{heroData.headTitle.strong}</span>
                                </h4>
                                <p className="text-muted mb-0 para-dark para-desc mx-auto ms-md-auto">
                                    {heroData.text}
                                </p>

                                <div className="mt-4">
                                    <a href="" className="btn btn-primary">{heroData.buttonText}</a>
                                    <p className="text-muted mt-1 mb-0">{heroData.buttonNote}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="freelance-hero position-relative">
                                <div className="bg-shape position-relative">
                                    <img src={rootSettings.URL.build + `${heroData.image}`} className="mx-auto d-block img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;