import { Component, Fragment } from "react";
import React from "react";

class ErrorPage extends Component {

    render() {
        return (<Fragment>
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">The page you are looking for was not found.</div>
                            <a href="#" className="btn btn-link">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
            {this.getStyle()}
        </Fragment>
        );
    }
    getStyle() {
        return <style >{`body {
            background: #dedede;
        }
        .page-wrap {
            min-height: 100vh;
        }`}
        </style>
    }
}
export default ErrorPage;