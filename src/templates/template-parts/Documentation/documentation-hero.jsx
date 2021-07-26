import * as React from 'react';

let sectionStyle = {
    background: 'url(' + rootSettings.URL.build + 'images/shapes/shape2.png) top',
    zIndex: '0'
};

const DocumentationHero = () => (
    <section className="bg-half-170 bg-light d-table w-100 pb-0">
        <div className="container container__inner-page-hero">
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h4 className="title mb-0"> Documentation </h4>
                    </div>
                </div>
            </div>

            <div className="position-breadcrumb">
                <nav aria-label="breadcrumb" className="d-inline-block">
                    <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                        <li className="breadcrumb-item"><a href="index.html">Landrick</a></li>
                        <li className="breadcrumb-item"><a href="#">Docs</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Documentation</li>
                    </ul>
                </nav>
            </div>
        </div>

        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
    </section>
);

export default DocumentationHero;