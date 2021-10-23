import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    console.log("Products list in Products", this.props.list);
    this.state = {
      searchTerm: "",
    };
  }

  handleSearchItemChange = (val) => {
    this.setState({ searchTerm: val });
  };

  moneyFormat = (price) => {
    let priceArray = parseFloat(price).toFixed(2).split("");
    if (priceArray.length > 6) {
      priceArray.splice(priceArray.length - 6, 0, ",");
    }
    return priceArray.join("");
  };

  render() {
    const { searchTerm } = this.state;
    const { list: productsList } = this.props;
    return (
      <div className="row">
        <div align="center" width="10">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search"
            onChange={(event) => {
              this.handleSearchItemChange(event.target.value);
            }}
            value={searchTerm}
          />
        </div>
        {productsList
          .filter((product) => {
            let val = JSON.stringify(product);
            if (searchTerm === "") {
              return true;
            } else if (
              val.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            ) {
              return true;
            } else return false;
          })
          .map((product) => (
            <div className="col border p-4 m-2" key={product.id}>
              <img src={product["image_url"]} alt={product.id} />
              <h5 className="m-2">{product.title}</h5>
              <small>₹{this.moneyFormat(product.price)}</small>
            </div>
          ))}
      </div>
    );
  }
}

export default Products;
