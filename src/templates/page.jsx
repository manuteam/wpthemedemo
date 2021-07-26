import * as React from 'react';
import apiFetch from '@wordpress/api-fetch';
import NotFound from "./not-found";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {}
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const url = window.location.href.split("/");
        const slug = url.pop() || url.pop();
        apiFetch( {
            path: '/wp/v2/pages?slug='+slug
        })
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(res => {
                this.setState({ page: res[0] });
            })
            .catch( ( error ) => {
                if ( error.name === 'AbortError' ) {
                    console.log( 'Request has been aborted' );
                }
            } );
    };

    renderPage() {
        if (this.state.page.title) {
            return (
                <article className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.state.page.title.rendered}</h4>
                        <p
                            className="card-text"
                            dangerouslySetInnerHTML={{
                                __html: this.state.page.content.rendered
                            }}
                        />
                    </div>
                </article>
            );
        } else {
            this.renderEmpty();
        }
    }

    renderEmpty() {
        return <NotFound />;
    }

    render() {

        return (
            <div className="container post-entry">
                {this.state.page ? this.renderPage() : this.renderEmpty()}
            </div>
        );
    }
}

export default Page;