import React from "react";
import { Container } from "react-bootstrap";
import Movie from "./movie/Movie";

interface movieGridProps {
    movies: object[]
};
export default function(movies: movieGridProps) {

    return (
        <Container>
            <Movie />
        </Container>
    )
}