const App = () => {

    const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
    );
    
    };

let hasStored;
if (localStorage.getItem('search')) {
hasStored = true; } else {
hasStored = false; }
const initialState = hasStored
? localStorage.getItem('search') : 'React';

const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
    );
    React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
    }, [searchTerm]);
    const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    };