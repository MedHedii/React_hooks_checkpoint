import React, { Fragment } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RatingStars from "../RatingStars/RatingStars";

export default function Navbar({ rateStars, getSearch }) {
    return (
        <Fragment>
            <div className="containerr">
                <h3>Movie App</h3>
                <RatingStars rateStars={rateStars} />
                <input
                    className="inpt"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => getSearch(e.target.value)}
                />
            </div>
        </Fragment>
    );
}
