import * as React from 'react';

class PricingItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let ribbonShowCondition

        let features = this.props.featuresList.map(item => (
                <li className="h6 text-muted mb-0">
                    <span className="text-primary h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    {item}
                </li>
            )
        )

        if (this.props.hasRibbon) {
            ribbonShowCondition =
                <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                    <span className="text-center d-block shadow small h6">
                        {this.props.ribbonText}
                    </span>
                </div>
        }

        return (
            <div className="card pricing-rates business-rate shadow bg-light rounded text-center border-0">
                {ribbonShowCondition}
                <div className="card-body py-5">
                    <h6 className="title fw-bold text-uppercase text-primary mb-4">{this.props.name}</h6>
                    <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">{this.props.currency}</span>
                        <span className="price h1 mb-0">{this.props.value}</span>
                        <span className="h4 align-self-end mb-1">/{this.props.per}</span>
                    </div>

                    <ul className="list-unstyled mb-0 ps-0">
                        {features}
                    </ul>
                    <a href={this.props.buttonUrl} className="btn btn-primary mt-4">{this.props.buttonTitle}</a>
                </div>
            </div>
        )


        }
}

export default PricingItem