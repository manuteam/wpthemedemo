import * as React from 'react';
import {Component} from "react";
import TinySlider from 'tiny-slider-react'
import reviewsData from './jsonData/Home/reviews.json'
import ReviewItem from './review-item'


let sectionStyle = {
    background: rootSettings.URL.build + 'images/shapes/shape2.png center center'
}

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewsData,
            items: reviewsData.reviewsArray
        }
    }

    render() {

        let {items} = this.state

        const settings = {
            container: '.tiny-three-item',
            controls: false,
            mouseDrag: true,
            loop: true,
            rewind: true,
            autoplay: true,
            autoplayButtonOutput: false,
            autoplayTimeout: 3000,
            navPosition: "bottom",
            speed: 400,
            gutter: 12,
            responsive: {
                992: {
                    items: 3
                },

                767: {
                    items: 2
                },

                320: {
                    items: 1
                },
            },
        }

        return (
            <section className="section bg-light" style={sectionStyle}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <h4 className="title mb-4">
                                    {reviewsData.title}
                                </h4>
                                <p className="text-muted para-desc mx-auto mb-0">
                                    {reviewsData.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12 mt-4">
                            <TinySlider settings={settings} className="tiny-three-item">
                                {
                                    items.map(item => (
                                        <ReviewItem image={item.image}
                                                    text={item.text}
                                                    name={item.name}
                                                    position={item.position}/>
                                    ))
                                }
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Reviews;