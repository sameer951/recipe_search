import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import HomeComponet from './app/home/home';
import DetailsComponent from './app/details/details';
import LayoutComponet from './app/layout/layout';
import './App.css';
import "./mfont.css";
// import "./font.scss";
import recipelistreducer from './app/home/recipelistreducer';
import recipeListactions from './app/home/recipeListactions';
import apiendpoints from './app/utill/apiendpoints';
import HttpSevice from './app/utill/httpservice';


class App extends React.Component {

  componentDidMount() {
    if (!this.props?.home?.recipeList?.length)
      HttpSevice.get(apiendpoints.GET_RECIPE_LIST).then((response) => {
        let recipeList = response.data;
        recipeList.forEach((recipe) => {
          if (recipe.duration === undefined) {
            recipe.duration = Math.floor(Math.random() * 10);
          }
          if (recipe.isFavourite === undefined) {
            let ran = Math.floor(Math.random() * 10);
            recipe.isFavourite = ran >= 5;
          }
        })
        this.props.setRecipeList(recipeList);
        console.log(recipeList, this.props, window)
        let path = window.location.pathname;
        let id = path?.match(/\/([0-9])/)?.[1];
        if (id) {
          let recepe = recipeList?.find(rec => {
            console.log(+rec.id == +id, +rec.id, +id)
            return +rec.id == +id
          });
          console.log(recepe, "recepe")
          this.props.setRecipeDetails(recepe)
        }
      })
  }
  componentWillUpdate(prevProp) {

  }

  componentDidUpdate(prevProp) {

  }

  render() {
    return (
      <div className="App">
        <LayoutComponet>
          <Switch>
            <Route exact path="/" component={HomeComponet} />
            <Route path="/:id" component={DetailsComponent} />
            <Route path="*" component={HomeComponet} />
          </Switch>
        </LayoutComponet>
      </div>
    );
  }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(App));