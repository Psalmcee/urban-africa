import Card from "../ui/Card"

export default function Item(props) {
  return (
    <Card>
      <div className="flex flex-col items-center w-120 h-120 my-2 p-4">
        <div className="max-w-60 ">
            <img src={props.data.image} alt={props.image}  />
        </div>
        <div className="flex flex-col items-center text-2xl font-bold  m-4 py-2">
          <div className="py-2">
            <h2>{props.data.name}</h2>
          </div>
          <div>
            <h1>{props.data.price}</h1>
          </div>
          <div className="pt-2">
            <h1>{props.data.description}</h1>
          </div>
        </div>
      </div>
    </Card>
  );
}