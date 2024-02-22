import GameList from "../GameList";
import SearchBar from "../SearchBar";

export default function FilterableList({ games = [] }) {
    return (
        <div className="filterable-game-list">
            <SearchBar />
            <GameList games={games} />
        </div>
    )
}
