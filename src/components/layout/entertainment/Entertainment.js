import Item from "../../item component/Item";
import featuredItems from "../../Featured";
import Data from "../../Data";

export default function Entertainment() {
    const entertainment = Data.entertainment.data.map(data => {
        return <Item key={data.id} data={data} />
    })

    return (
        <div>
        <h1 className='bg-yellow-700'>Here is all about Entertainment</h1>
        {entertainment}
        </div>
    )
}