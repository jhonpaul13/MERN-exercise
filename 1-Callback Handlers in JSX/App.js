const App = () => {
    const stories = [];
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    };
    return (
    <div>
    <h1>My Hacker Stories</h1>
    <Search onSearch={handleSearch} />
    <hr />
    <List list={stories} />
    </div>
    );
    };
    const Search = (props) => (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
    </div>
    );