import * as React from 'react';

export default (props) => (
    <div className="tiny-slide">
        <div className="d-flex client-testi m-1">
            <img src={rootSettings.URL.build + `${props.image}`}
                 className="avatar avatar-small client-image rounded shadow" alt=""/>
            <div className="flex-1 content p-3 shadow rounded bg-white position-relative">
                <ul className="list-unstyled mb-0">
                    <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="mdi mdi-star text-warning"></i>
                    </li>
                </ul>
                <p className="text-muted mt-2">
                    {`"${props.text}"`}
                </p>
                <h6 className="text-primary">
                    {props.name}
                    <small className="text-muted"> {props.position}</small>
                </h6>
            </div>
        </div>
    </div>
);