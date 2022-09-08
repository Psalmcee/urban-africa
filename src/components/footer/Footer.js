import classes from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={classes.footer}>
            <input  className={classes.input} placeholder="Email Address" />
            <button className={classes.button}>Subscribe</button>
        </div>

    )
}