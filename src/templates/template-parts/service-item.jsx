import * as React from 'react';

export default (props) => (
    <div className={props.classes}>
        <div
            className="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow">
            <div className="icons text-primary text-center mx-auto icon-back-decoration">
                <span className="iconify d-block rounded-pill h3 mb-0" data-icon={`uil:${props.iconClass}`} data-inline="false"></span>
            </div>
            <div className="card-body p-0 mt-4">
                <a href={props.link}
                   className="title h5 text-dark">
                    {props.linkTitle}
                </a>
                <p className="text-muted mt-2 mb-0">
                    {props.text}
                </p>
                <span className="iconify text-primary full-img" data-icon={`uil:${props.iconClass}`} data-inline="false"></span>
            </div>
        </div>
    </div>
);