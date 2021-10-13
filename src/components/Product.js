
import React, { useEffect } from 'react';

const Product = (props) => {
    const fruit = props.el;
    const setListBasket = props.setListBasket;
    const listBasket = props.listBasket;
    const setTotal = props.setTotal;
    const total=props.total;
    let inputQuantity = null;
    useEffect(() => inputQuantity = document.querySelector(`#${fruit.name}`))
    // console.log(inputQuantity)



    const addBasket = () => {
        const valueQuantity = inputQuantity.value;
        const countingTotal = () => {
            let quantity = Number(valueQuantity)
            console.log(quantity % 3)
            // let discountPrice=

            if (quantity >= 3) {
                let discount = fruit.discount * (quantity / 3);
                let noDiscount = fruit.price * (quantity % 3)
                let result=(discount + noDiscount).toFixed(2)
                setTotal(total+Number(result))
                return result
            }
let result= (fruit.price * quantity).toFixed(2)
setTotal(total+Number(result))
            return result
        }



        if (!(listBasket.length > 0)) {
            setListBasket(new Array({
                photo: fruit.photo,
                name: fruit.name,
                quality: Number(valueQuantity),
                price: fruit.price,
                discount: fruit.discount,
                total: Number(countingTotal())
                //  fruit.price * Number(valueQuantity)

            }))

        }
        else {

            let objIndex = listBasket.findIndex(element => element.name === fruit.name);

            if (objIndex >= 0) {

                let tempLBasket = listBasket.slice();

                tempLBasket[objIndex].quality += Number(valueQuantity);
                tempLBasket[objIndex].total += Number(countingTotal());
                setListBasket(tempLBasket);


            } else {
                let tempLBasket = listBasket.slice();


                tempLBasket.push({
                    photo: fruit.photo,
                    name: fruit.name,
                    quality: Number(valueQuantity),
                    price: fruit.price,
                    discount: fruit.discount,
                    total: Number(countingTotal())
                });
                setListBasket(tempLBasket);
            }
        }

        console.log(listBasket);


        // if (listBasket.length > 0) {
        //     console.log("listBasket");
        //     console.log(listBasket.reduce(function (el, amount) {
        //         return el.total + amount.total
        //     }))

        //     setTotal(listBasket.reduce(function (el, amount) {
        //         return el.total + amount.total
        //     }))
        // }




    }

    return (

        <li>

            <div>

                <img src={fruit.photo} alt="Fruit photo" />

            </div>

            <div className="nameProd">

                <h1>{fruit.name}</h1>

            </div>

            <div>

                <span>price:{fruit.price}$</span> / <span>availability:{fruit.availability} kg.</span>

            </div>

            <div className="weight">

                <button className="subtract" onClick={() => inputQuantity.value = (Number(inputQuantity.value) - 0.1).toFixed(2)}>-</button>

                <div> <input type="number" readOnly id={fruit.name} value={0.1} step="0.1" min={0.1} max={fruit.availability}></input>  </div>

                <button className="add" onClick={() => inputQuantity.value = (Number(inputQuantity.value) + 0.1).toFixed(2)}   >+</button>

            </div>

            <div><button className="buy" onClick={addBasket} > BUY </button></div>

        </li>
    )
}
export default Product;