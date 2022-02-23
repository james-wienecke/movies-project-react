import React from "react";
import {Container} from "react-bootstrap";
import {Movie} from "../../util/interfaces";

const MovieCard = (props: { movie: Movie }) => {
    const movie = props.movie;
    return (
        <Container>
            <h3>Title {movie.title}</h3>
            <img src={movie.poster} />
            <h4>Year {movie.year}</h4>
        </Container>
    );
}

export default MovieCard;