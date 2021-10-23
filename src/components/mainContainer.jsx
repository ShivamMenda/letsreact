import React, { Component } from "react";
import Products from "./Products";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: "",
      products: [],
    };
  }

  componentDidMount() {
    // fetch the categories details and first category products
    fetch("https://api.lccsjce.ga/categories")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ categories: res });
        if (res.length > 0) {
          console.log("Changing category for first time");
          this.handleCategoryChange(res[0].id);
        }
      });
  }

  handleCategoryChange = (id) => {
    console.log("Changed Category to", id);
    fetch("https://api.lccsjce.ga/categories/" + id)
      .then((res) => res.json())
      .then((res) => {
        console.log("Result from products", res);
        this.setState({
          products: res.products,
        });
      });
    this.setState({ selectedCategory: id });
  };

  render() {
    console.log("Products list in mainContainer", this.state.products);
    return (
      <div className="container m-4">
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              {this.state.categories.map((category) => (
                <li
                  className="list-group-item"
                  key={category.id}
                  onClick={() => this.handleCategoryChange(category.id)}
                >
                  {category.name}
                </li>
              ))}
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
