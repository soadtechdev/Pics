import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBox from "./SearchBox";
import ImageList from "./ImageList";

export default class App extends Component {
  state = { images: [], show: false };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results, show: true });
  };

  render() {
    return (
      <div className="container">
        <SearchBox onSubmit={this.onSearchSubmit} />
        {this.state.show ? (
          <ImageList images={this.state.images} />
        ) : (
          <p>Esto se mostrara si no han buscado fotos</p>
        )}
      </div>
    );
  }
}
