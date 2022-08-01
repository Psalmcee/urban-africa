import { useRef } from "react"
import classes from "./Search.module.css"

export default function Search() {
    const searchRef = useRef();

    function submitHandler(e) {
        e.preventDefault()
        console.log(searchRef.current.value)
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <input ref={searchRef}/>
            <button className={classes.button}>Search</button>
        </form>
    )
}