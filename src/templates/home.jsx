import * as React from 'react';
import Hero from "./template-parts/hero"
import Partners from "./template-parts/partners";
import Services from "./template-parts/services";
import Workflow from "./template-parts/workflow";
import Reviews from "./template-parts/reviews";
import About from "./template-parts/about";
import Shop from "./template-parts/shop";
import Header from "./header";
import Footer from "./footer";

class Home extends React.Component {

    render() {
        return (
            <main id="content">
                <Header/>
                <Hero/>
                <Partners/>
                <Services/>
                <Workflow/>
                <Reviews/>
                <About/>
                <Shop/>
                <Footer/>
            </main>
        )
    };
}

export default Home;