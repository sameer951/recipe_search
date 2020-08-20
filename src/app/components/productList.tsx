import { MyComponent } from "../../features/base/mycomponent";
import { connect } from 'react-redux';
import { productReduces } from "../../features/redux/product/product.reducer";
import { productActions } from "../../features/redux/product/product.actions";
import React from "react";
import { withRouter } from "react-router";
import { AxiosService } from "../../features/util/axios.service";
import './comp.scss';

class ProductList extends MyComponent {

    recipesUrl = 'http://starlord.hackerearth.com/recipe';
    assetsdataUrl = 'assets/recipe.json'
    state = { searchField: '' };
    componentDidMount(url = this.recipesUrl) {
        AxiosService.httpDGet(url).then(recList => {
            this.props.setRecipesList(recList);
            // recipesList
        }, (err) => {
            if (url !== this.assetsdataUrl)
                this.componentDidMount(this.assetsdataUrl);
            this.props.setRecipesList([]);
        })
    }
    getHighlightedText(text, highlight) {
        // Split text on highlight term, include term itself into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <b style={{ backgroundColor: 'yellow', color: 'blue' }} key={"k" + i}>{part}</b> : <label key={"k" + i}>{part}</label>)}</span>;
    }
    getCardDesign(rec, i) {
        // style={{ background: `url(${rec?.image})` }}
        let searchedItemInMark = null;
        let description = rec?.description;
        if (this.state.searchField) {
            searchedItemInMark = this.getHighlightedText(rec?.name, this.state.searchField);
        }
        if (rec?.description.length > 33) {
            description = rec?.description?.slice(0, 28) + '...';
        }
        return <div className="card" key={rec?.id}>
            <div className="card-body">
                <div id={'catagory'} className="text-capitalize">    In {rec?.category}    </div>
                <img className="card-img-top" src={rec?.image} alt="Card_image" />
                <div className="card-dtl" id="card-dtl">
                    <h4 className={ rec?.name?.length > 24 ? 'card-title lng-title' : 'card-title'}>{!this.state.searchField ? rec?.name : searchedItemInMark}</h4>
                    <div> <span className="clock-icon"></span> 10 Mins </div>
                    <div>Price: {rec?.price}</div>
                    <p className="card-text">{description ?? rec?.description}.</p>
                    <p className="btn btn-outline-primary" onClick={e => { this.props?.history?.push('/home/' + rec?.id) }}>View Details</p>
                </div>
            </div>
        </div>
    }
    render() {
        return <div className="container">
            <div className="ownContainer">
                <div className="form-group has-search">
                    <span className="fa-search2 form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search your Favourite Recipe..."
                        value={this.state.searchField} onChange={(e) => { this.setState({ ...this.state, searchField: e.target.value }) }} />
                </div>
                <div style={{ height: '100px' }}>
                    <div id={'catagory-title'} className="float-right">
                        <p>CATAGORY</p>
                        <h4> <strong>Pizza & Noodles</strong></h4>
                    </div>
                </div>

                <div className="card-columns">
                    {this.props?.recipes?.recipesList?.filter(r => r.name?.toLowerCase().includes(this.state.searchField?.toLowerCase()) || !this.state.searchField).map((rec, recIdx) => (this.getCardDesign(rec, recIdx)))}
                </div>
            </div>
        </div>
    }
}
export const ProductListComponent = connect(productReduces, productActions)(withRouter(ProductList));