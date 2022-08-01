import classes from "./subHeaderCard.module.css"

export default function subHeaderCard(props) {
    return (
        <div className={classes.container}>{props.children}</div>
    )
}