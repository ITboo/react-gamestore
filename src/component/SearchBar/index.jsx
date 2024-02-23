export default function SearchBar({
    filterText = '',
    inWishListOnly = false,
    setFilterText = () => null,
    setInWishListOnly = () => null
}) {
    return (
        <form className='filter-form'>
            <input
                type="text"
                className="search-input"
                placeholder='Поиск по названию'
                value={filterText}
                onChange={(event) => setFilterText(event.target.value)}
            />
            <label htmlFor="">
                <input
                    type="checkbox"
                    className='in-wish-list-checkbox'
                    value={inWishListOnly}
                    onChange={(event) => setInWishListOnly(event.target.checked)}
                />
                <span>Только в списке желаемого</span>
            </label>
        </form>
    )
}
