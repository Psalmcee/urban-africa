import Data from "./Data"
import { useHistory } from "react-router-dom"


export default function sendRequest(Data) {
    fetch(
        "https://urban-africa-25266-default-rtdb.firebaseio.com/",
        {
            method: 'POST',
            body: JSON.stringify(Data),
            headers: {
                "content-type": "application/json",
            }
        }
    ).then(()=>{
        history.
    })
}