
const Basket = (props) => {

    const listBasket = props.listBasket;
    const setListBasket = props.setListBasket;
   


    function removeFruit(index) {

        let tempLBasket = listBasket.slice();

        tempLBasket.splice(index, 1);

        setListBasket(tempLBasket);

    }

    return (

        <ul className="listBasket ">

            {listBasket.length > 0 ? listBasket.map((product, index) => <li key={index}>

                <div>
                    <img src={product.photo} alt="Fruit photo" />
                </div>

                <div className="nameProd">
                    <h1>{product.name}</h1>
                </div>

                <div>

                    price: {product.price}$    quantity: {(product.quality).toFixed(2)}kg. <br />

                    <br />

                    {product.quality >= 3 && product.discount > 0 ?
                        <div>
                            <div>sum: ${(product.price * product.quality).toFixed(2)}$</div>
                            <div>discount:{(product.discount).toFixed(2)}$/3kg.</div>

                            <div>discounted sum: {(product.total).toFixed(2)}$</div>

                        </div> : <div>sum: {(product.total).toFixed(2)}$</div>

                    }


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