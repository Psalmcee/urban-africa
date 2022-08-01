import classes from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={classes.footer}>
            <input placeholder="Email Address" />
            <button>Subscribe</button>
        </div>

    )
}