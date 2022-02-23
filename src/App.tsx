import React from 'react';
import './App.css';

import {Container} from "react-bootstrap";
import NavBar from "./header/NavBar";
import MovieGrid from "./MovieGrid/MovieGrid";


function App() {

    return (
        <Container fluid data-testid="app">
            <header>
                <NavBar />
            </header>
            <main>
                <MovieGrid />
            </main>
        </Container>
    );
}

export default App;
