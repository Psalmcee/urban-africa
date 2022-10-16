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
        <div className="m-8" >
            <h1 className='text-3xl font-bold text-red-700'>Featured</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 md:mx-8 lg:grid-cols-3 xl:flex xl:flex-row ">
            {featuredItems}
            </section>
        </div>
    )
}