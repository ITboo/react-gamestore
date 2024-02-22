import FilterableList from './component/FilterableList'
import { GAMES } from './data/games'

function App() {
  return (
    <>
      <FilterableList games={GAMES} />
    </>

  )
}

export default App
