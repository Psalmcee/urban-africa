import { useRef } from "react"


export default function Search() {
    const searchRef = useRef();

    function submitHandler(e) {
        e.preventDefault()
        console.log(searchRef.current.value)
    }
    return (
        <form onSubmit={submitHandler} className='flex'>
            <input className='p-3 w-80 rounded-l border-0' ref={searchRef}/>
            <button className='p-3 rounded-r border-current font-bold text-white bg-red-900 hover:text-red-900 hover:bg-gray-100'>Search</button>
        </form>
    )
}