import { useParams } from "react-router-dom"


export default function GamePage ({gamesList}) {
    let{gameId} = useParams()//pick a game form the list
    gameId = parseInt(gameId)

    const game = gamesList.find(g => g.id === gameId)
    //if the game is not there then retun

    if(!game) {
        return <h2>Game Not Found</h2>
    }

    return (
        <div>
            <h3> {game.name}</h3>
            <p> {game.category}</p>
            <p>{game.rating}</p>

        </div>

    )
}