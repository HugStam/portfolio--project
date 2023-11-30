import GameCard from "./GameCard";

const gameList = [
  {
    id: 0,
    name: "Scythe",
    rating: null,
    category: "Fun"
  },
  {
    id: 1,
    name: "Machi Koro",
    rating: null,
    category: "Deck Building"
  },
  {
    id: 2,
    name: "Galaxy Trucker",
    rating: null,
    category: "Fun"
  }
]

function App() {
  return (
    <div>
      <h1>My Board Games</h1>
      {gameList.map(g => <GameCard game={g} /> )}
        
    </div>
  );
}

export default App;
