import React from "react";

class Products extends React.Component {
  render() {
    const { list: productsList } = this.props;
    return (
      <div className="row">
        {productsList.map((product) => (
          <div className="col border p-4 m-2" key={product.id}>
            <img src={product["image_url"]} alt={product.id} />
            <h5 className="m-2">{product.title}</h5>
            <small>₹{product.price}</small>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
