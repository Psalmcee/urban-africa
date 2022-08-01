import Item from "../../item component/Item";

export default function Fashion() {

    function clickHandler() {
        alert("fashion clicked")
    }
    return (
        <div onClick={clickHandler}>
        <h1>Here is all about Fashion</h1>
        </div>
    )
}