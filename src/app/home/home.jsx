import React from 'react';
import httpSevice from '../utill/httpservice';
import apiendpoints from '../utill/apiendpoints';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./recipeListactions";
import recipelistreducer from './recipelistreducer';
import "./home.scss";

class HomeComponet extends React.Component {

    state = {

    };
    componentDidMount() {

    }


    componentDidUpdate(prevProp) {

    }

    navigateToReceipeDetails(recipe) {
        this.props.setRecipeDetails(recipe);
        this.props.history.push('/' + recipe.id)
    }

    markSearchInput(text, searchInput) {
        return <span>{text.split(new RegExp("("+searchInput+")", 'gi')).map(t => t.toLowerCase() === searchInput.toLowerCase() ? <b>{t}</b> : t)}</span>;
    }

    render() {
        // "id":0,
        // "name":"Uthappizza",
        // "image":"https://i.imgur.com/tDnjTXf.jpg",
        // "category":"mains",
        // "label":"Hot",
        // "price":"4.99",
        // "description":"A unique combination of Indian Uthappam (pancake) and Italian pizza"
        const searchInput = this.props?.home?.searchField;

        let recipeListUI = [...this.props?.home?.recipeList].filter((rec) => {
            if (!this.props?.home?.searchField?.length) return true;
            else return new RegExp(this.props.home.searchField).test(rec.name) || new RegExp(this.props.home.searchField).test(rec.description) || new RegExp(this.props.home.searchField).test(rec.category)
        }).map((recipe, index) => {
            return <React.Fragment key={"recepeList" + index}>
                <div className="card" style={{ "backgroundImage": `url(${recipe.image})` }}>
                    {recipe.category && <span className="category">In {this.markSearchInput(recipe.category, searchInput)}</span>}
                    <div className="card-container">

                        <div className="card-header" >
                            <div className="display-on-hover">
                                <button type="button" onClick={() => { this.navigateToReceipeDetails(recipe) }} className="btn hover-btn btn-lg btn-block">View More</button>
                                <button type="button" onClick={() => { this.navigateToReceipeDetails(recipe) }} className="btn hover-btn btn-lg btn-block">Quick View</button>
                            </div>
                        </div>
                        <div className={"card-body text-left " + (index % 2 == 0 ? 'card-body-even' : 'card-body-odd')}>
                            <div className="row">
                                <h5 className="col-10 card-title">{this.markSearchInput(recipe.name, searchInput)}</h5>
                                <img className="heart-icon" onClick={() => {
                                    let recipeList = this.props.home.recipeList;
                                    recipeList[index].isFavourite = !recipeList[index].isFavourite;
                                    this.props.setRecipeList(recipeList);
                                }} src={recipe.isFavourite ? "/assets/Icons/Icon feather-heart.png" : "/assets/Icons/Icon feather-heart-color.png"} />
                            </div>
                            <p>
                                <img className="clock-icon" src="/assets/Icons/Icon feather-clock.png" />
                                {recipe.duration + " min"}
                            </p>
                            <p className="card-text">{this.markSearchInput(recipe.description, searchInput)}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        });
        return <React.Fragment>
            <div className="card-columns">
                {recipeListUI}
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(HomeComponet));