import {mock_movies} from "../../shared_test_resources/test_movies";

const store = {
    fetchMovies: async () => {
        return Promise.resolve(mock_movies);
    }
}

export default store;