import ItemCard from "./ItemCard";
import './Shopping.css';

function ShoppingHome({ items1, items2, items3 }) {
    return (
        <div>
            <div className="shopping-category">
                <h1>단백질 가득한 닭가슴살</h1>
                <div className="shopping-itemList">
                    {
                        items1.map((item, index) => {
                            return (
                                <div>
                                    <ItemCard item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="shopping-category">
                <h1>간편하고 든든한 한끼</h1>
                <div className="shopping-itemList">
                    {
                        items2.map((item, index) => {
                            return (
                                <div>
                                    <ItemCard item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="shopping-category">
                <h1>맛있는 간식</h1>
                <div className="shopping-itemList">
                    {
                        items3.map((item, index) => {
                            return (
                                <div>
                                    <ItemCard item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ShoppingHome;