import { Link } from "react-router-dom";
import Search from "./header items/Search";

export default function HeaderName() {
    return (
        <div className="flex px-6 justify-between items-center space-x-4 bg-red-400 h-40"> 

            <h1 className=' text-5xl font-serif font-bold text-red-900  px-4'><Link to='/'>Urban Africa</Link></h1>
            <div className="hidden md:block"><Search /></div>
            <div className='flex p-4 space-between'>
                <ul className='font-bold px-4'><Link to="/contact">Contact </Link></ul>
                <ul className='font-bold px-4'><Link to="/login">Login</Link></ul>
            </div>
        </div>
    )
}