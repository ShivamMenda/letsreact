import React from "react";
import Navbar from "./navbar";
import Products from "./Products";

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: []
    };
  }


  //Here componentDidMount and handleCategoryChange will come
  
  render() {
    return (
      <div className="container m-4">
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
             {/* Display list of phones under a particular category */}
            </ul>
          </div>
          <div className="col-9">
            <Products list={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
