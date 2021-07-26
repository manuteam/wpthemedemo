import * as React from 'react';

const DocumentationContent = () => (
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Introduction</h3>
                    <p className="text-muted h6 fw-normal">Get Start With <span
                        className="text-primary fw-bold">Landrick.</span> Launch your campaign and benefit from our
                        expertise on designing and managing conversion centered <strong className="text-primary">Bootstrap
                            5</strong> html page.</p>

                    <h4 className="mt-4 pt-2">Quick start</h4>
                    <p className="text-muted">Start working with <span
                        className="text-primary fw-bold">Landrick</span> that can provide everything you need to
                        generate awareness, drive traffic, connect. <a
                            href="https://getbootstrap.com/docs/5.0/getting-started/download/" target="_blank"
                            className="text-primary h6">Head to the downloads page.</a></p>

                    <h5 className="mt-4 pt-2">CSS</h5>
                    <p className="text-muted">Copy-paste the stylesheet <code
                        className="text-danger fw-bold">&lt;link&gt;</code> into your <code
                        className="text-danger fw-bold">&lt;head&gt;</code> before all other stylesheets to load
                        Bootstrap CSS.</p>

                    <code className="text-success rounded p-2 bg-dark fw-bold">&lt;link href="css/bootstrap.min.css"
                        rel="stylesheet" type="text/css" /&gt;</code>

                    <h5 className="mt-4 pt-2">JS</h5>
                    <p className="text-muted">Many of our components require the use of JavaScript to function and
                        JavaScript plugins. Place the following <code
                            className="text-danger fw-bold">&lt;script&gt;</code> near the end of your pages, right
                        before the closing <code className="text-danger fw-bold">&lt;/body&gt;</code> tag, to enable
                        them. Bootstrap.bundle.min.js must come first, and then our JavaScript plugins.</p>

                    <h6 className="mt-3"><code className="text-success rounded p-2 bg-dark fw-bold">&lt;script
                        src="js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</code></h6>


                    <h5 className="mt-4 pt-2">Starter Template</h5>
                    <p className="text-muted">Be sure to have your pages set up with the latest design and development
                        standards. That means using an HTML5 doctype and including a viewport meta tag for proper
                        responsive behaviors. Put it all together and your pages should look like this:</p>

                    <h5 className="mt-4"><i className="uil uil-angle-right-b"></i> HTML : </h5>
                    <pre className="code mb-0 mt-4 fw-bold p-4 bg-light rounded shadow text-muted">
                        {`
                    <span className="text-primary">&lt;!doctype html&gt;</span>
<span className="text-warning">&lt;html lang="en"&gt;</span>
    <span className="text-danger">&lt;head&gt;</span>

        <span className="text-danger">&lt;meta charset="utf-8" /&gt;</span>
        <span className="text-danger">&lt;title&gt;</span><span className="text-primary"> Landrick - Saas & Software Landing Page Template </span><span
                        className="text-danger">&lt;/title&gt;</span>
        <span
            className="text-danger">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</span>
        <span className="text-danger">&lt;meta name="description" content="Site description" /&gt;</span>
        <span className="text-danger">&lt;meta name="keywords" content="Your tags" /&gt;</span>

        <span className="text-muted">&lt;!-- favicon icon --&gt;</span>
        <span className="text-info">&lt;link rel="shortcut icon" href="images/favicon.ico"&gt;</span>

        <span className="text-muted">&lt;!-- Bootstrap --&gt;</span>
        <span className="text-info">&lt;link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" /&gt;</span>

        <span className="text-muted">&lt;!-- Main css --&gt;</span>
        <span className="text-info">&lt;link href="css/style.css" rel="stylesheet" type="text/css" /&gt;</span>

    <span className="text-danger">&lt;/head&gt;</span>

    <span className="text-danger">&lt;body&gt;</span>

        <span className="text-muted">&lt;!-- Loader Start --&gt;</span>
        <span className="text-danger">&lt;div id="#--------"&gt;</span>
            --------
            --------
        <span className="text-danger">&lt;/div&gt;</span>
        <span className="text-muted">&lt;!-- Loader End --&gt;</span>

        <span className="text-muted">&lt;!-- Navbar Start --&gt;</span>
        <span className="text-danger">&lt;header&gt;</span>
            <span className="text-danger">&lt;div class="--------"&gt;</span>
                --------
                --------
                --------
                --------
            <span className="text-danger">&lt;/div&gt;</span>
        <span className="text-danger">&lt;/header&gt;</span>
        <span className="text-muted">&lt;!-- Navbar End --&gt;</span>

        <span className="text-muted">&lt;!-- Hero Start --&gt;</span>
        <span className="text-danger">&lt;section class="--------"&gt;</span>
            <span className="text-danger">&lt;div class="--------"&gt;</span>
                --------
                --------
                --------
                --------
            <span className="text-danger">&lt;/div&gt;</span>
        <span className="text-danger">&lt;/section&gt;</span>
        <span className="text-muted">&lt;!-- Hero End --&gt;</span>

        <span className="text-muted">&lt;!-- Footer Start --&gt;</span>
        <span className="text-danger">&lt;footer&gt;</span>
            <span className="text-danger">&lt;div class="--------"&gt;</span>
                --------
                --------
                --------
                --------
            <span className="text-danger">&lt;/div&gt;</span>
        <span className="text-danger">&lt;/footer&gt;</span>
        <span className="text-muted">&lt;!-- Footer End --&gt;</span>

        <span className="text-muted">&lt;!-- Back To Home Start --&gt;</span>
        <span className="text-danger">&lt;a href="#" class="--------" id="#--------"&gt;</span>
            --------
            --------
        <span className="text-danger">&lt;/a&gt;</span>
        <span className="text-muted">&lt;!-- Back To Home End --&gt;</span>

        <span className="text-muted">&lt;!-- Javascript Start --&gt;</span>
        <span className="text-info">&lt;script src="js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</span>
        --------
        --------
        --------
        <span className="text-info">&lt;script src="js/app.js"&gt;&lt;/script&gt;</span>
        <span className="text-muted">&lt;!-- Javascript End --&gt;</span>
    <span className="text-danger">&lt;/body&gt;</span>
<span className="text-warning">&lt;/html&gt;</span>
                    `}
                    </pre>

                    <h5 className="mt-5">RTL Version</h5>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">In order to have RTL mode enabled, replace the reference of <code
                            className="fw-bold">style.css</code> to <code className="fw-bold">style-rtl.css</code></p>
                    </div>

                    <h5 className="mt-5">Dark Version</h5>
                    <h6 className="h6 mt-4"><i className="uil uil-angle-right-b"></i> Dark Version : </h6>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">In order to have Dark mode enabled, replace the reference
                            of <code className="fw-bold">style.css</code> to <code
                                className="fw-bold">style-dark.css</code></p>
                    </div>

                    <h6 className="h6 mt-4"><i className="uil uil-angle-right-b"></i> Dark RTL Version : </h6>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">In order to have Dark RTL mode enabled, replace the reference
                            of <code className="fw-bold">style.css</code> to <code
                                className="fw-bold">style-dark-rtl.css</code></p>
                    </div>

                    <h5 className="mt-5">Menu</h5>
                    <h6 className="h6 mt-4"><i className="uil uil-angle-right-b"></i> Menu Center to Right </h6>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">To move menu from center to right side then just add class <code
                            className="fw-bold">navigation-menu</code> along with <code
                            className="fw-bold">nav-right</code></p>
                    </div>

                    <h6 className="h6 mt-4"><i className="uil uil-angle-right-b"></i> Menu Center to Left </h6>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">To move menu from center to right side then just add class <code
                            className="fw-bold">navigation-menu</code> along with <code
                            className="fw-bold">nav-left</code></p>
                    </div>

                    <h6 className="h6 mt-4"><i className="uil uil-angle-right-b"></i> Menu Light with Center </h6>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">If you want menu center and light navigation just add class <code
                            className="fw-bold">navigation-menu</code> along with <code
                            className="fw-bold">nav-light</code></p>
                    </div>

                    <h6 className="h6 mt-4"><i className="uil uil-angle-right-b"></i> Menu Light with Right </h6>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">If you want menu right side and light navigation just add
                            class <code className="fw-bold">navigation-menu nav-right</code> along with <code
                                className="fw-bold">nav-light</code></p>
                    </div>

                    <h6 className="h6 mt-4"><i className="uil uil-angle-right-b"></i> Menu Light with Left </h6>
                    <div className="mt-4 p-4 bg-light rounded shadow">
                        <p className="mb-0 text-muted">If you want menu left side and light navigation just add
                            class <code className="fw-bold">navigation-menu nav-left</code> along with <code
                                className="fw-bold">nav-light</code></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default DocumentationContent;