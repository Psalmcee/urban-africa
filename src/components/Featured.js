import Data from "./Data";
import Item from "./item component/Item";


const featuredItems = Data.tech.data.map(data => {
    return <Item 
    key={data.id}
    data={data}
    />
})

export default function Featured() {
    return (
        <div >
            <h1 className='text-3xl font-bold text-red-700 m-4'>Featured</h1>
            <section className="item--list">
            {featuredItems}
            </section>
        </div>
    )
}