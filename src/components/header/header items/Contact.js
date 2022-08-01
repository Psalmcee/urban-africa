import Card from "../../ui/Card"
import classes from "./Contact.module.css"


export default function Contact() {
    return (
            <Card>
                <form className={classes.form}>
                    <div>
                        <label>Your email </label> 
                        <input />
                    </div>
                    <div>
                        <label>Password </label>
                        <input />
                    </div>
                    <div>
                        <label>How may we help you </label>
                        <textarea row='10' />
                    </div>

                </form>
            </Card>
    )
}