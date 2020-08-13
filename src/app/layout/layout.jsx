import React from 'react';
import { withRouter } from 'react-router-dom';
import './layout.css';
import recipelistreducer from '../home/recipelistreducer';
import recipeListactions from '../home/recipeListactions';
import { connect } from 'react-redux';

class LayoutComponet extends React.Component {


    render() {
        return <React.Fragment>

            <div className=" bg-image">

                <div className="container ">
                    <div className="row top-row">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <img className="search-icon" src={"assets/Icons/Icon feather-search.png"} />
                            </div>
                            <input type="text" className="search-input form-control" placeholder="Search your Favourite Recipe..."
                                value={this.props.home.searchField} onChange={(e) => { this.props.setSearchInput(e.target.value) }} />
                        </div>
                    </div>
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(LayoutComponet));