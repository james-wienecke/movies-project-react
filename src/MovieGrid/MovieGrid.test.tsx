import { render, screen } from '@testing-library/react';
import MovieGrid from "./MovieGrid";
import {mock_movies} from "../shared_test_resources/test_movies";
import mock = jest.mock;
import store from "../util/firestore-helpers";

// it('renders without crashing', () => {
//     render(<MovieGrid />);
//     const movieGrid = screen.getByTestId('movie-grid');
// });


// jest.mock('../util/firestore-helpers', () => {
//     const originalStore = jest.requireActual('../util/firestore-helpers');
//
//     return {
//         //__esModule: true,
//         ...originalStore,
//         store: {
//             fetchMovies: jest.fn(() => {
//                 return new Promise(resolve => resolve(mock_movies));
//             })
//         },
//     };
// });

jest.mock("../util/firestore-helpers");

it('should mock the firebase data retrieval', async () => {
    return store.fetchMovies().then(movies => expect(movies).toEqual(mock_movies));
});