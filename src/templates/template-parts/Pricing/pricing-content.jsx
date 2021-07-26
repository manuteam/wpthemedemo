import * as React from 'react';
import pricingData from '.././jsonData/pricing.json'
import PricingItem from "./components/pricing-item";

class PricingContent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            pricingData,
            items: pricingData.pricingArray
        }
    }

    render() {

        let { items } = this.state

        return (
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">{pricingData.sectionTitle}</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">
                                    {pricingData.text}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">

                        {items.map(item => (
                            <div className="col-md-4 col-12 mt-4 pt-2">
                                <PricingItem
                                    featuresList={item.features}
                                    hasRibbon={item.hasRibbon}
                                    ribbonText={item.ribbonText}
                                    name={item.name}
                                    currency={item.cost.currency}
                                    value={item.cost.value}
                                    per={item.cost.per}
                                    buttonUrl={item.button.url}
                                    buttonTitle={item.button.title}
                                />
                            </div>
                            )
                        )}


                    </div>
                </div>

            </section>
        )

    }

}

export default PricingContent
