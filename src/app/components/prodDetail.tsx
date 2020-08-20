import { MyComponent } from "../../features/base/mycomponent";
import { connect } from 'react-redux';
import { productReduces } from "../../features/redux/product/product.reducer";
import { productActions } from "../../features/redux/product/product.actions";
import React from "react";
import { withRouter } from "react-router";

class ProductDetails extends MyComponent {
    componentDidMount() {
        if (!this.props.recipes?.recipesList?.lenght) {
            let data = localStorage.getItem('recipesList');
            this.props.setRecipesList(JSON.parse(true && data));
        }
    }
    render() {
        let filteredObj = this.props.recipes?.recipesList?.filter((rec, i) => { return rec.id === this.props.id });
        filteredObj = filteredObj && filteredObj[0];
        return <div className="container">
            <h2 className="justify-align-center">Recipe Details</h2>
            <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-6">
                    <span className={''} onClick={() => this.props?.history?.push('/home')}><i className='fas fa-arrow-left'></i> Go Back</span>
                    <div>
                        <iframe width="520" height="345" src="https://www.youtube.com/embed/Xt7bGFiZnY0?controls=0" style={{ borderRadius: '25px' }}></iframe>
                    </div>
                    <div>
                        <h1 className="text-capitalize">Ingredients For {filteredObj?.name} :</h1>
                        <hr />
                        <ul style={{ overflowY: 'auto' }}>
                            <li>Full cream milk – 1 liter</li>
                            <li>Lemon juice – 2 tbsp</li>
                            <li>Sugar – 1 cup</li>
                            <li>Water – 3 cups</li>
                            <li>Cardamom – 2-3 pods</li>
                        </ul>
                        <h1>How To Prepare {filteredObj?.name} :</h1>
                        <hr />
                        <ul style={{ overflowY: 'auto' }}>
                            <li> Heat milk in a pan.</li>
                            <li>Remove from heat once it comes to a boil.</li>
                            <li>Add lemon juice.</li>
                            <li>The milk will curdle and the whey will separate.</li>
                            <li>Strain the milk in a muslin cloth and collect the cheese.</li>
                            <li>Run the cheese under cold water to remove the sourness from the lemon.</li>
                            <li>Hang the muslin cloth for an hour to remove excess water from the cheese.</li>
                            <li>Take out the cheese on the work surface and knead for 4-5 minute till it becomes smooth.</li>
                            <li>Make 10-12 small balls from the cheese.</li>
                            <li>Heat water, sugar and cardamon in a pan.</li>
                            <li>When the water comes to a boil, add the cheese balls in the water.</li>
                            <li>Cook covered for 40-45 minutes on low heat.</li>
                            <li>Remove from heat and cool.</li>
                            <li>Serve chilled.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <div style={{ marginTop: '345px' }}></div>
                    <p className="font-weight-lighter text-muted">RECIPE</p>
                    <h1 className="display-4">{filteredObj?.name}</h1>
                    {/* <img className="w-100 img-fluid" src={filteredObj?.image} /> */}
                    <span>
                        <div className="badge badge-dark text-wrap" > 4/5 </div>
                        <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                        <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                        <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                        <img className="rating-icon" src="/assets/Icons/rating-icon.png" />
                    </span>
                    <p className="font-weight-lighter text-muted text-uppercase">description</p>
                    <p className="">{filteredObj?.description}</p>
                    <span>
                        <span className="circle">
                            <p className="num">8</p>
                            <p className="sub-label">ingredients</p>

                        </span>
                        <span className="circle">
                            <p className="num">220</p>
                            <p className="sub-label">bucks </p>
                        </span>
                        <span className="circle">
                            <p className="num">25</p>
                            <p className="sub-label"> minutes </p>
                        </span>
                    </span>
                    <p className="fav-label">FAVOURITE THIS PAGE
 <img className="heart-icon" onClick={() => {
                            let recipeList = this.props.home.recipeList;
                            let index = recipeList?.findIndex((rece) => +rece.id === +filteredObj?.id);
                            recipeList[index].isFavourite = !recipeList[index].isFavourite;
                            this.props.setRecipeList(recipeList);
                            this.props.setRecipeDetails(filteredObj);
                        }} src={filteredObj?.isFavourite ? "/assets/Icons/Icon feather-heart.png" : "/assets/Icons/Icon feather-heart-color.png"} />
                    </p>
                    <h5>Add Comments</h5>
                    <textarea name="comment" id="comment" placeholder="Type Something Here" className="col-12 form-control"></textarea>
                    <div className="btn btn-secondary p-2 m-3">ADD COMMENTS</div>
                </div>
            </div>
            {this.getStyle()}
        </div>
    }

    getStyle() {
        return <style>{
            `.rating-icon{
 margin-left: 3px;
 width: 15px;
 height: 15px;
  }
  .circle {
 height: 85px;
 width: 85px;
 margin-left: 25px;
 background-color: #000000;
 border-radius: 50%;
 display: inline-block;
    }
  
    .circle .num{
 font-size: 30px;
 text-align: center;
 color: #ffff;
 margin-top: 5px;
    }
    .circle .sub-label{
 font-size: 8px;
 text-align: center;
 color: #ffff;
 margin: -15px !important;
  }
  
  
  
  .heart-icon {
 margin-left: 5px;
 width: 25px;
 height: 25px;
  }
  .fav-label{
 margin-top: 10px;
  }
  
  `}
        </style>
    }
}
export const ProductDetailsComponent = connect(productReduces, productActions)(withRouter(ProductDetails));