import * as React from 'react';
import servicesData from './jsonData/Home/services.json'
import {Component} from "react";
import ServiceItem from './service-item'

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            servicesData,
            items: servicesData.servicesArray
        }
    }

    render() {

        let { items } = this.state

        return (
            <section className="section pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12 order-1 order-lg-2">
                            <div className="section-title text-center text-lg-start mb-4 mb-lg-0 pb-2 pb-lg-0">
                                <span className="badge rounded-pill bg-soft-primary">{servicesData.tag}</span>
                                <h4 className="title mt-3 mb-4">{servicesData.title}</h4>
                                <p className="text-muted para-desc mx-auto ms-lg-auto mb-0">{servicesData.text}</p>
                                <div className="mt-4 d-lg-block d-none">
                                    <a href="javascript:void(0)" className="btn btn-primary">{servicesData.buttonTitle}</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                            <div className="row me-lg-5">
                                <div className="col-md-6 col-12">
                                    <div className="row">
                                        <ServiceItem classes={items[0].wrapClasses}
                                                     iconClass={items[0].icon}
                                                     link={items[0].link.url}
                                                     linkTitle={items[0].link.title}
                                                     text={items[0].text}/>

                                        <ServiceItem classes={items[1].wrapClasses}
                                                     iconClass={items[1].icon}
                                                     link={items[1].link.url}
                                                     linkTitle={items[1].link.title}
                                                     text={items[1].text}/>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div className="row pt-lg-4 mt-lg-4">
                                        <ServiceItem classes={items[2].wrapClasses}
                                                     iconClass={items[2].icon}
                                                     link={items[2].link.url}
                                                     linkTitle={items[2].link.title}
                                                     text={items[2].text}/>

                                        <ServiceItem classes={items[3].wrapClasses}
                                                     iconClass={items[3].icon}
                                                     link={items[3].link.url}
                                                     linkTitle={items[3].link.title}
                                                     text={items[3].text}/>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 d-lg-none d-block text-center">
                                <a href="javascript:void(0)" className="btn btn-primary">See more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;