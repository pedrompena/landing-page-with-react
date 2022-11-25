import { string } from "prop-types";
import React from "react";

const Card = props => {
  return (
    <div className="row mb-3">
      <div className="col">
        <div className="card text-center">
          <img src={props.img} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="card-footer bg-secondary">
            <a href={props.btnUrl} target="blank" className="btn btn-warning">Más sobre {props.title}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.prototype = {
  title: string,
  img: string,
  description: string,
  btnUrl: string
}
 
export default Card;