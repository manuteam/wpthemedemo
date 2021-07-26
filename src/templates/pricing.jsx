import * as React from 'react';
import Header from "./header";
import PricingHero from "./template-parts/Pricing/pricing-hero";
import PricingContent from "./template-parts/Pricing/pricing-content";
import Footer from "./footer";

class Pricing extends React.Component {

    render() {
        return (
            <main id="content">
                <Header/>
                <PricingHero/>
                <PricingContent/>
                <Footer/>
            </main>
        )
    };
}

export default Pricing;