import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      productprice: 0,
    };
  }
  render() {
    return (
      <form className="row mb-5" onSubmit={(e) => {
        e.preventDefault()
        this.props.addItem(this.state.productname, this.state.productprice)}}
        >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productname"
            onChange={(e) =>
              this.setState({ productname: e.currentTarget.value })
            }
            value={this.state.productname}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productprice"
            onChange={(e) => {
              this.setState({ productprice: Number(e.currentTarget.value) });
            }}
            value={this.state.productprice}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-4"
       
        >
          ADD
        </button>
      </form>
    );
  }
}

export default AddItem;
