export default function SearchBar() {
    return (
        <form className='filter-form'>
            <input
                type="text"
                className="search-input"
                placeholder='Поиск по названию'
            />
            <label htmlFor="">
                <input
                    type="checkbox"
                    className='in-wish-list-checkbox'
                />
                <span>Только в списке желаемого</span>
            </label>
        </form>
    )
}
