import React, { Component } from "react";
import "./ImageCard.css";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //me aseguro que las iamgenes hayan cargado
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const heigth = this.imageRef.current.clientHeight;
    const spans = Math.ceil(heigth / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls, likes, user, links } = this.props.image;
    return (
      <div
        className="cont-img"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
        <p>
          <span>
            <i className="far fa-star"></i>
          </span>{" "}
          {likes}
        </p>
        <div className="info-user">
          <h4 className="username">{user.username}</h4>
          <img src={user.profile_image.medium} alt={user.username} />
        </div>
      </div>
    );
  }
}
