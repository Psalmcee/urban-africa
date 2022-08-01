import { Link } from "react-router-dom";

export default function MainNavigation() {
    return (
        <main>
            <ul>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/fashion">Fashion</Link></li>
                <li><Link to="/tech">Tech</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
        </main>
    )
}