import { Movie } from "../util/interfaces";

export const mock_movies: Movie[] = [
    {
        title: "movie_0_title",
        director: "movie_0_director",
        plot: "movie_0_plot",
        poster: "movie_0_poster",
        year: 0,
        rating: 0,
        actors: ["movie_0_actor_0", "movie_0_actor_1", "movie_0_actor_2"],
        genres: ["movie_0_genres_0", "movie_0_genres_1", "movie_0_genres_2"]
    },
    {
        title: "movie_1_title",
        director: "movie_1_director",
        plot: "movie_1_plot",
        poster: "movie_1_poster",
        year: 1,
        rating: 1,
        actors: ["movie_1_actor_0", "movie_1_actor_1", "movie_1_actor_2"],
        genres: ["movie_1_genres_0", "movie_1_genres_1", "movie_1_genres_2"]
    },
    {
        title: "movie_2_title",
        director: "movie_2_director",
        plot: "movie_2_plot",
        poster: "movie_2_poster",
        year: 2,
        rating: 2,
        actors: ["movie_2_actor_0", "movie_2_actor_1", "movie_2_actor_2"],
        genres: ["movie_2_genres_0", "movie_2_genres_1", "movie_2_genres_2"]
    },
    {
        title: "movie_3_title",
        director: "movie_3_director",
        plot: "movie_3_plot",
        poster: "movie_3_poster",
        year: 3,
        rating: 3,
        actors: ["movie_3_actor_0", "movie_3_actor_1", "movie_3_actor_2"],
        genres: ["movie_3_genres_0", "movie_3_genres_1", "movie_3_genres_2"]
    },
    {
        title: "movie_4_title",
        director: "movie_4_director",
        plot: "movie_4_plot",
        poster: "movie_4_poster",
        year: 4,
        rating: 4,
        actors: ["movie_4_actor_0", "movie_4_actor_1", "movie_4_actor_2"],
        genres: ["movie_4_genres_0", "movie_4_genres_1", "movie_4_genres_2"]
    },
    {
        title: "movie_5_title",
        director: "movie_5_director",
        plot: "movie_5_plot",
        poster: "movie_5_poster",
        year: 5,
        rating: 5,
        actors: ["movie_5_actor_0", "movie_5_actor_1", "movie_5_actor_2"],
        genres: ["movie_5_genres_0", "movie_5_genres_1", "movie_5_genres_2"]
    },
    {
        title: "movie_6_title",
        director: "movie_6_director",
        plot: "movie_6_plot",
        poster: "movie_6_poster",
        year: 6,
        rating: 6,
        actors: ["movie_6_actor_0", "movie_6_actor_1", "movie_6_actor_2"],
        genres: ["movie_6_genres_0", "movie_6_genres_1", "movie_6_genres_2"]
    },
    {
        title: "movie_7_title",
        director: "movie_7_director",
        plot: "movie_7_plot",
        poster: "movie_7_poster",
        year: 7,
        rating: 7,
        actors: ["movie_7_actor_0", "movie_7_actor_1", "movie_7_actor_2"],
        genres: ["movie_7_genres_0", "movie_7_genres_1", "movie_7_genres_2"]
    },
    {
        title: "movie_8_title",
        director: "movie_8_director",
        plot: "movie_8_plot",
        poster: "movie_8_poster",
        year: 8,
        rating: 8,
        actors: ["movie_8_actor_0", "movie_8_actor_1", "movie_8_actor_2"],
        genres: ["movie_8_genres_0", "movie_8_genres_1", "movie_8_genres_2"]
    },
    {
        title: "movie_9_title",
        director: "movie_9_director",
        plot: "movie_9_plot",
        poster: "movie_9_poster",
        year: 9,
        rating: 9,
        actors: ["movie_9_actor_0", "movie_9_actor_1", "movie_9_actor_2"],
        genres: ["movie_9_genres_0", "movie_9_genres_1", "movie_9_genres_2"]
    },
    {
        title: "movie_10_title",
        director: "movie_10_director",
        plot: "movie_10_plot",
        poster: "movie_10_poster",
        year: 10,
        rating: 10,
        actors: ["movie_10_actor_0", "movie_10_actor_1", "movie_10_actor_2"],
        genres: ["movie_10_genres_0", "movie_10_genres_1", "movie_10_genres_2"]
    }
];

export const mock_fetchMovies = () => {
    return Promise.resolve(mock_movies);
}

export const getRandomTestMovie = () => {
    return mock_movies[Math.floor(Math.random() * mock_movies.length)];
}