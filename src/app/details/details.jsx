import React from 'react';
import httpSevice from '../utill/httpservice';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./../home/recipeListactions";
import recipelistreducer from './../home/recipelistreducer';
import "./details.scss";

class DetailsComponent extends React.Component {

    state = {

    };


    componentWillMount() {
        // if (this.props?.home?.recipeList?.length &&
        //     this.props.match?.params?.id != prevProp?.match?.params?.id) {
        let recepe = this.props?.home?.recipeList?.find(rec => rec.id == this.props.match.params.id);
        console.log(recepe, "recepe")
        this.props.setRecipeDetails(recepe)
        // }
    }


    render() {
        let rec = this.props?.home?.recipeDetails || {};


        console.log(this.props)
        return <React.Fragment>


            <div className="col-6 text-left">
            <span className="text-left" onClick={()=>{this.props.history.push('/')}}>Go Back</span>
                <img className="w-100 img-fluid" src={rec.image} />
            </div>
            <div className="col-6 text-right">
                <p className="font-weight-lighter text-muted">RECIPE</p>
                <h1 className="display-4">{rec.name}</h1>
                <div className="row">

                </div>
                <span>
                    <div className="badge badge-dark text-wrap" >
                        4/5
                </div>
                    <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                    <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                    <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                    <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                </span>
                <p className="font-weight-lighter text-muted text-uppercase">description</p>
                <p className="">{rec.description}</p>

                <span>
                    <span className="circle">
                        <p className="num">8</p>
                        <p className="sub-label">
                            ingredients
                       </p>

                    </span>
                    <span className="circle">
                        <p className="num">220</p>
                        <p className="sub-label">
                            bucks
                       </p>

                    </span>
                    <span className="circle">
                        <p className="num">25</p>
                        <p className="sub-label">
                            minutes
                       </p>

                    </span>
                </span>
                <p className="fav-label">FAVOURITE THIS PAGE
                <img className="heart-icon" onClick={() => {
                        let recipeList = this.props.home.recipeList;
                        let index = recipeList?.findIndex((rece) => +rece.id == +rec.id);
                        recipeList[index].isFavourite = !recipeList[index].isFavourite;
                        this.props.setRecipeList(recipeList);
                        this.props.setRecipeDetails(rec);
                    }} src={rec.isFavourite ? "/assets/Icons/Icon feather-heart.png" : "/assets/Icons/Icon feather-heart-color.png"} />
                </p>
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(DetailsComponent));