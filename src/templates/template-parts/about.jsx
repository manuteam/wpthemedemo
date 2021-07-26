import * as React from 'react';
import aboutData from './jsonData/Home/about.json'
import {Component} from "react";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutData,
            items: aboutData.items
        }
    }

    render() {

        let { items } = this.state

        return (

            <section className="section pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 order-1 order-md-2">
                            <img src={rootSettings.URL.build + `${aboutData.image}`} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="section-title ms-lg-5">
                                <h4 className="title mb-4">
                                    {aboutData.title}
                                </h4>
                                <p className="text-muted">
                                    {aboutData.text}
                                </p>
                                <ul className="list-unstyled text-muted">

                                    {items.map(item => (
                                            <li className="mb-0">
                                                <span className="text-primary h5 me-2">
                                                    <i className="uil uil-check-circle align-middle"></i>
                                                </span>
                                                {item}
                                            </li>
                                        )
                                    )}

                                </ul>
                                <a href={aboutData.link.url} className="mt-3 h6 text-primary">
                                    {aboutData.link.title}
                                    <i className="uil uil-angle-right-b"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;