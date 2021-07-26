import * as React from 'react';
import partnersData from './jsonData/Home/partners.json'
import {Component} from "react";


class Partners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partnersData
        }
    }

    render() {
        return (
            <section className="py-4 border-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        {partnersData.map(item => (
                                <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                                    <img src={rootSettings.URL.build + `${item.image}`} className="avatar avatar-ex-sm"
                                         alt={item.name}/>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        )
    }
}

export default Partners;