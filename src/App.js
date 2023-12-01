import { useState } from "react";
import GameCard from "./components/GameCard";
import HomePage from "./components/HomePage";
import { TEST_GAMES } from "./TEST_GAMES";
import RandomPage from "./components/RandomPage";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import GamePage from "./components/GamePage";
import { Navbar,Container,Nav } from "react-bootstrap";


function App() {
  
  //put the gamesList in state.
  const [gamesList, setGamesList] = useState( TEST_GAMES)

  //filrer for games using the catetory filter

  //const filteredGames = gameList.filter(game => game.category === categoryFilter) --> this will be change to include all

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My Board Games</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <Routes>

        <Route path="/" element={<HomePage gamesList={gamesList}/>}/>

        <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
        <Route path="/games/:gameId" element={<GamePage gamesList={gamesList} />} />

      </Routes>  
    </div>
    );
}

export default App;
