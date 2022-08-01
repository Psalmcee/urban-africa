import Card from "../ui/Card"
import classes from "./Item.module.css"

export default function Item(props) {
return (
   
    <Card>
    <div className={classes.container}>       
            <img src={props.data.image} alt={props.image} className={classes.image} />        
         <div className={classes.info}>
            <div><h2>{props.data.name}</h2></div>
            <div><h1>{props.data.price}</h1></div>
            <div><p>{props.data.description}</p></div>
        </div>
    </div>
    </Card>
    
)
}