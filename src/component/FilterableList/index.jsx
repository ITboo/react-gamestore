import React from "react";
import GameList from "../GameList";
import SearchBar from "../SearchBar";

export default function FilterableList({ games = [] }) {
  const [filterText, setFilterText] = React.useState("");
  const [inWishListOnly, setInWishListOnly] = React.useState(false);
  return (
    <div className="filterable-game-list">
      <SearchBar
        filterText={filterText}
        inWishListOnly={inWishListOnly}
        setFilterText={setFilterText}
        setInWishListOnly={setInWishListOnly}
      />
      <GameList
        games={games}
        filterText={filterText}
        inWishListOnly={inWishListOnly}
      />
    </div>
  );
}
