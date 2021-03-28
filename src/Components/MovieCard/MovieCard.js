import React, { Fragment } from "react";
import "./MovieCard.css";

export default function MovieCard(props) {
    // console.log(props);
    return (
        <Fragment>
            <div className="card">
                <img src={props.imgu} alt="gg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.tit}</h5>
                    <p className="card-text">{props.desc}</p>
                    <h2 className="card-text"> {"☆".repeat(props.rt)} </h2>
                    <a href="#home" className="btn btn-primary">
                        More
                    </a>
                </div>
            </div>
        </Fragment>
    );
}
