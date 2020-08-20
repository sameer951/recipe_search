import React from "react";
import { MyComponent } from "../../features/base/mycomponent";
import { withRouter } from "react-router";
import { ProductListComponent } from "../components/productList";
import { ProductDetailsComponent } from "../components/prodDetail";


class HomePageComp extends MyComponent {

    render() {
        return <div>
            {this.state?.params}
            {this.props.match.params.id ? <ProductDetailsComponent id={this.props.match.params.id} /> : <ProductListComponent />}
        </div>
    }

}
export const HomePage = withRouter(HomePageComp);
