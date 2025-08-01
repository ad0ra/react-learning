import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function navigationHandler() {
        navigate("/products");
    }
    return (
        <>
            <h1>My Home Page</h1>
            <p>Go To <Link to="/products">the list of products</Link>.</p>
            <button onClick={navigationHandler}>Products List</button>
        </>
    );
}

export default HomePage;