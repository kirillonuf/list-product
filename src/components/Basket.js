
const Basket = (props) => {

    const listBasket = props.listBasket;
    const setListBasket = props.setListBasket;
    const deleteFruit = document.querySelector("deleteFruit");


    function removeFruit(index) {

        let tempLBasket = listBasket.slice();

        tempLBasket.splice(index, 1);

        setListBasket(tempLBasket);

    }

    return (

        <ul className="listBasket listBasketHide">

            {listBasket.length > 0 ? listBasket.map((product, index) => <li key={index}>

                <div>
                    <img src={product.photo} alt="Fruit photo" />
                </div>

                <div className="nameProd">
                    <h1>{product.name}</h1>
                </div>

                <div>
                    discount: {(product.discount).toFixed(2)}$ / 3kg. <br /><br />
                    price: {product.price}$    quantity: {(product.quality).toFixed(2)}kg.  <br />
                    sum: {(product.total).toFixed(2)}$
                </div>

                <div className="weight">
                    <button id={product.name} className="deleteFruit" onClick={() => removeFruit(index)} >Remove</button>
                </div>

            </li>) :
               
                <li className="empty">

                    <div>BASKET EMPTY</div>

                </li>
            }
        </ul>

    )

}
export default Basket;