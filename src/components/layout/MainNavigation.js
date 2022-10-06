import { Link } from "react-router-dom";


export default function MainNavigation() {
    return (
        <main>
            <div className="flex justify-center h-16 mt-4" >
                <ul className="flex bg-red-900 text-2xl text-white rounded my-2  ">          
                    <li className="p-2  flex items-center hover:text-red-900 hover:bg-gray-100 hover:rounded-l"><Link to="/entertainment">Entertainment</Link></li>
                    <li  className="p-2  flex items-center hover:text-red-900 hover:bg-gray-100"><Link to="/fashion">Fashion</Link></li>
                    <li className="p-2  flex items-center hover:text-red-900 hover:bg-gray-100"><Link to="/tech">Tech</Link></li>
                    <li className="p-2  flex items-center hover:text-red-900 hover:bg-gray-100 hover:rounded-r"><Link to="/shop">Shop</Link></li>
                </ul>
            </div>
        </main>
    )
}