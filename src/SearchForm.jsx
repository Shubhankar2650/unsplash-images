import { useGlobalContext } from "./context";

const SearchForm = () => {
    const { setSearchItem } = useGlobalContext();

    const handelSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;
        setSearchItem(searchValue);
    }
    return (
        <section>
            <h2 className="title">Unsplash Images</h2>
            <form className="search-form" onSubmit={handelSubmit} >
                <input type="text" name="search" placeholder="cat" className="search-input" />
                <button type="submit" className="btn">search</button>
            </form>
        </section>
    )
}
export default SearchForm