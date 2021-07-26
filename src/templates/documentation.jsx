import * as React from 'react';
import Header from "./header";
import DocumentationHero from "./template-parts/Documentation/documentation-hero";
import DocumentationContent from "./template-parts/Documentation/documentation-content";
import Footer from "./footer";

class Documentation extends React.Component {

    render() {
        return (
            <main id="content">
                <Header/>
                <DocumentationHero/>
                <DocumentationContent/>
                <Footer/>
            </main>
        )
    };
}

export default Documentation;