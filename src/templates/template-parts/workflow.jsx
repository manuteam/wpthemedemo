import * as React from 'react';
import workflowData from './jsonData/Home/workflow.json'
import {Component} from "react";

class Workflow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: workflowData
        }
    }

    render() {
        let { items } = this.state

        return (

            <section className="section">
                <div className="container mt-60">
                    <div className="row">
                        <div className="col-md-4 mt-4 pt-2">
                            <ul className="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0 sticky-bar"
                                id="pills-tab" role="tablist">

                                { items.map(item => (
                                    <li className="nav-item mt-2">
                                        <a className={`nav-link rounded ${item.item.isActive ? 'active' : ''}`} id={item.item.link.id} data-bs-toggle="pill" href={item.item.link.url}
                                           role="tab" aria-controls={item.item.link.areaControls} aria-selected="false">
                                            <div className="text-start d-flex align-items-center justify-content-between py-1 px-2">
                                                <h6 className="mb-0">
                                                    <i className={`uil ${item.item.icon} me-2 h5`}></i> {item.content.title}
                                                </h6>
                                                <i className="uil uil-angle-right-b"></i>
                                            </div>
                                        </a>
                                    </li>
                                )) }

                            </ul>
                        </div>

                        <div className="col-md-8 col-12 mt-4 pt-2">
                            <div className="tab-content" id="pills-tabContent">

                                {
                                    items.map(item => (
                                        <div className={`tab-pane fade bg-white p-4 rounded shadow ${item.item.isActive ? 'active show' : ''}`} id={item.item.link.areaControls} role="tabpanel"
                                             aria-labelledby={item.item.link.id}>
                                            <h4 className="mb-4">{item.content.title}</h4>
                                            <p className="text-muted mb-0">
                                                {item.content.text}
                                            </p>

                                            <div className="mt-4">
                                                <a href={item.content.link.url} className="text-primary h6">
                                                    {item.content.link.title}
                                                    <i className="uil uil-angle-right-b align-middle"></i>
                                                </a>
                                            </div>

                                            <div className="mt-4">
                                                <img src={rootSettings.URL.build + item.content.image} className="img-fluid" alt=""/>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Workflow