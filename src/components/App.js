import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBox from "./SearchBox";
import ImageList from "./ImageList";

import "./App.css";
export default class App extends Component {
  state = { images: [], show: false };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 15 },
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
          <img
            src="https://cdn.dribbble.com/users/623144/screenshots/5999637/pigeon_dribbble.gif"
            alt="imagen"
          />
        )}
      </div>
    );
  }
}
