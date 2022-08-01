import { Link } from "react-router-dom";
import Search from "./header items/Search";

export default function HeaderName() {
    return (
        <div className="header"> 

            <h1 className="header--title"><Link to="/">Urban Africa</Link></h1>
            <Search />
            <div className="header--nav">
                <ul><Link to="/contact">Contact </Link></ul>
                <ul><Link to="/login">Login</Link></ul>
            </div>
        </div>
    )
}