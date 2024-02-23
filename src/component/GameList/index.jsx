import GameCategoryRow from '../GameCategoryRow';
import GameRow from '../GameRow';

export default function GameList({
    games = [],
    filterText = '',
    inWishListOnly = false

}) {
    const rows = []
    let lastCategory = null
    games.forEach((game) => {
        if (game.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inWishListOnly && !game.inWishList) {
            return;
        }
        if (game.category !== lastCategory) {
            rows.push(
                <GameCategoryRow
                    category={game.category}
                    key={game.category}
                />
            )
        }
        rows.push(
            <GameRow game={game} key={game.name} />
        )
        lastCategory = game.category
    })
    return (
        <ul className="game-list">
            {rows}
        </ul>
    )
}
