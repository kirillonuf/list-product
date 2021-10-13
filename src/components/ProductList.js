
import products from "../Data/productsDB";
import Product from "./Product";


const ListProd = (props) => {
    const total=props.total;
    const productsDB = props.productsDB;
     const setListBasket=props.setListBasket
    const listBasket = props.listBasket;
    const setTotal=props.setTotal;
   
    
    return (

        <ul className="listProd">

            {productsDB.map((el, index) => (

                <Product el={el} setTotal={setTotal} total={total}  setListBasket={setListBasket} listBasket={listBasket}   key={index} />

            ))}

        </ul>

    )

}
export default ListProd;