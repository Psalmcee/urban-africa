import { Link } from "react-router-dom";


export default function MainNavigation() {
    return (
        <main>
            <div className="flex justify-center h-16" >
                <ul className="flex bg-red-800 text-2xl text-white px-2 rounded my-2">          
                    <li className="p-2  flex items-center"><Link to="/entertainment">Entertainment</Link></li>
                    <li  className="p-2  flex items-center"><Link to="/fashion">Fashion</Link></li>
                    <li className="p-2  flex items-center"><Link to="/tech">Tech</Link></li>
                    <li className="p-2  flex items-center"><Link to="/shop">Shop</Link></li>
                    <li className="p-2  flex items-center"><Link to="/news">News</Link></li>
                </ul>
            </div>
        </main>
    )
}