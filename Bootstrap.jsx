import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImgItem = (props) => {
  <Carousel.Item>
    <img className="d-block w-100" src={props.image} alt={props.title} />
    <Carousel.Caption>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </Carousel.Caption>
  </Carousel.Item>;
};

const Bootstrap = () => {
  return (
    <>
      <h1>Layout in React Bootstrap</h1>
      <Carousel>
        <ImgItem image=" " title=" " body=" " />
        <ImgItem image=" " title=" " body=" " />
        <ImgItem image=" " title=" " body=" " />
      </Carousel>
    </>
  );
};

export default Bootstrap;
