import classes from "./Login.module.css"
import { useRef } from "react";
import Card from "../../ui/Card";


export default function Login() {
    const contactRef = useRef();
    const passwordRef = useRef(); 

function submitHandler(e) {
    e.preventDefault();
    console.log(contactRef.current.value);
    console.log(passwordRef.current.value);
}


    return (
        <Card>
        <form onSubmit={submitHandler} className={classes.form}>
            <input placeholder="E-mail address or phone number" ref={contactRef} className={classes.control} />
            <input placeholder="password" ref={passwordRef} className={classes.control} />
            <button className={classes.button}>Login</button>
        </form> 
        </Card>
    )
}