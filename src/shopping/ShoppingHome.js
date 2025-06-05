import ItemCard from "./itemCard";


function ShoppingHome({ items1, items2, items3 }) {
    return (
        <div>
            {
                items1.map((item, index)=>{
                    return (
                        <div>
                            <ItemCard />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShoppingHome;