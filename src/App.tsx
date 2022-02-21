import React, {useState, useEffect} from 'react';
import './App.css';

import { collection, getDocs } from 'firebase/firestore';
import {Container} from "react-bootstrap";
import NavBar from "./header/NavBar";
import MovieGrid from "./main/MovieGrid";

import { firestore, mDb } from './util/firebase';


function App() {

    const [ movies, setMovies ] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getDocs(mDb);
            const docs = data.docs.map(doc => doc.data());
            console.log(docs);
        };
        fetchMovies();
    }, []);
    return (
        <Container fluid>
            <header>
                <NavBar />
            </header>
            <main>
                <MovieGrid movies={movies} />
            </main>
        </Container>
    );
}

export default App;
