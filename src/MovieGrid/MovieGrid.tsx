import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import MovieCard from "./moviecard/MovieCard";
import { Movie } from "../util/interfaces";
import store from "../util/firestore-helpers";

const MovieGrid = () => {
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies ] = useState<Movie[]>([]);

    useEffect(() => {
        if (movies.length = 0) {
            setLoading(true);
            store.fetchMovies().then((res) => {
                setMovies(res);
                setLoading(false);
            });
        }
    }, []);

    const displayController = () => {
        if (loading) {
            return <div>loading...</div>;
        }
        return movies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />
        });
    }

    return (
        <Container>
            {displayController()}
        </Container>
    );
}

export default MovieGrid;