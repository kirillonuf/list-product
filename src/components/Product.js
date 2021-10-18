
import React, { useEffect, useState } from 'react';

const Product = (props) => {

    const setListBasket = props.setListBasket;
    const listBasket = props.listBasket;
    const fruit = props.el;
    const [warning, setWarning] = useState("");

    let inputQuantity = null;
    let objIndex = listBasket.findIndex(element => element.name === fruit.name);
   
    useEffect(() => inputQuantity = document.querySelector(`#${fruit.name}`))

    const countingTotal = (quantity, discount, price) => {

        if (quantity / 3 >= 1 && discount > 0) {

            let disc = discount * (parseInt(quantity / 3));
            let remainder = price * (quantity % 3);
            let result = disc + remainder;
            return result;

        }

        return quantity * price;
    }

    const addBasket = () => {

        const valueQuantity = inputQuantity.value;

        if (valueQuantity == "") setWarning("enter the correct weight of the product");
        else setWarning("");

        if (Number(valueQuantity) >= 0.1) {

            if (listBasket.length <= 0) {

                setListBasket(new Array({
                    photo: fruit.photo,
                    name: fruit.name,
                    quality: Number(valueQuantity),
                    price: fruit.price,
                    discount: fruit.discount,
                    total: countingTotal(Number(valueQuantity), fruit.discount, fruit.price)

                }))

            }
            else {

                if (objIndex >= 0) {

                    let tempLBasket = listBasket.slice();

                    tempLBasket[objIndex].quality += Number(valueQuantity);
                    tempLBasket[objIndex].total = countingTotal(tempLBasket[objIndex].quality, tempLBasket[objIndex].discount, tempLBasket[objIndex].price);

                    setListBasket(tempLBasket);

                } else {

                    let tempLBasket = listBasket.slice();

                    tempLBasket.push({
                        photo: fruit.photo,
                        name: fruit.name,
                        quality: Number(valueQuantity),
                        price: fruit.price,
                        discount: fruit.discount,
                        total: countingTotal(Number(valueQuantity), fruit.discount, fruit.price)
                    });

                    setListBasket(tempLBasket);

                }
            }
        }
    }

    const increment = () => (Number(inputQuantity.value) + 0.1).toFixed(1);
    const decrement = () => inputQuantity.value > 0.1 ? (Number(inputQuantity.value) - 0.1).toFixed(1) : 0.1;

    return (

        <li>

            <div>

                <img src={fruit.photo} alt="Fruit photo" />

            </div>

            <div className="nameProd">

                <h1>{fruit.name}</h1>

            </div>
            <div>
                {fruit.discount > 0 ? `discount: ${fruit.discount}$/3kg` : ""}
            </div>

            <div>

                <span>price: {fruit.price}$/kg.</span>

            </div>

            <div className="weight">

                <button className="subtract" onClick={() => inputQuantity.value = decrement()}>-</button>

                <div> <input type="number" id={fruit.name} min={0.1} ></input>  </div>

                <button className="add" onClick={() => inputQuantity.value = increment()}   >+</button>

            </div>
            <div className="warning">{warning}</div>

            <div><button className="buy" onClick={addBasket} > BUY </button></div>

        </li>
    )
}
export default Product;