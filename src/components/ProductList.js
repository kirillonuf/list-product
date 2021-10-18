
import Product from "./Product";

const ListProd = (props) => {

    const setListBasket = props.setListBasket;
    const productsDB = props.productsDB;
    const listBasket = props.listBasket;

    return (

        <ul className="listProd">

            {productsDB.map((el, index) => (

                <Product el={el} setListBasket={setListBasket} listBasket={listBasket} key={index} />

            ))}

        </ul>

    )
}
export default ListProd;