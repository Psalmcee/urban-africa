import Card from "../ui/Card"

export default function Item(props) {
return (
   
    <Card>
    <div className='flex flex-col items-center w-120 h-120 p-4 my-2'>       
            <img src={props.data.image} alt={props.image} className='w-50 h-50' />        
         <div className="flex flex-col items-center text-2xl font-bold  m-4 py-2">
            <div className='py-2'><h2>{props.data.name}</h2></div>
            <div><h1>{props.data.price}</h1></div>
            <div className='pt-2'><p>{props.data.description}</p></div>
        </div>
    </div>
    </Card>
    
)
}