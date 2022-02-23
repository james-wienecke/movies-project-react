import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import {mock_movies} from "../../shared_test_resources/test_movies";
import {Movie} from "../../util/interfaces";
import exp from "constants";

let movie: Movie;

beforeEach(() => {
    movie = mock_movies[0];
})

describe('MovieCard', () => {
    it('should display a movie card featuring the movie title, year, and image with a poster set in its src attribute', async () => {
        render(<MovieCard movie={movie} />);
        const movieCard = screen.getByTestId('movie-card');
        const movieTitle = screen.getByText(`Title ${movie.title}`);
        const movieYear = screen.getByText(`Year ${movie.year}`);
        const movieImgAlt = screen.getByAltText(`${movie.title} promo poster`);

        expect(movieTitle).toBeInTheDocument();
        expect(movieYear).toBeInTheDocument();
        expect(movieImgAlt).toBeInTheDocument();
    });
});