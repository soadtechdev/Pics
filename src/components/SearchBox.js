import React, { Component } from "react";

export default class SearchBox extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    //mandamos como parametro el termino que hay en el state al app.js
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="mt-5">
        <div className="form-group">
          <label htmlFor="termino">Ingrese termino de busqueda</label>
          <input
            className="form-control"
            type="text"
            id="termino"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    );
  }
}
