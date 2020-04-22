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
          <h1 className="text-center">
            Up SearchBox
            <span className="d-block h6 ml-5">
              Consumiendo la API de Unsplash
            </span>
          </h1>
          <label htmlFor="termino">Ingrese termino de busqueda</label>
          <input
            className="form-control"
            placeholder="Dog"
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
