import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./app/pages/home.page";
import { withRouter } from "react-router";
import ErrorPage from "./app/pages/error.page";
import './index.css';


export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={withRouter((props) => {
          props.history.push('/home');
          return <div>Hello</div>
        })}></Route>
        <Route exact path="/home/" component={HomePage} />
        <Route path={`/home/:id`} component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>
      <div className="float-right mr-2">
        <label htmlFor="" className=" bg-black">
          Developed By: Jyotikanta <br />
        CV: <a href="https://mycv.techknocker.xyz" target="_blank">https://mycv.techknocker.xyz</a>
        </label>
      </div>
    </div>
  );
}