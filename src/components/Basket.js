
// import products from "../Data/products";//
import { useRef, useState } from "react";
import PRODUCT from "./Product";

const Basket = (props) => {
    // const fruit = props.product;
    const setTotal=props.setTotal;
   const listBasket = props.listBasket;
   const setListBasket=props.setListBasket;
  const deleteFruit=document.querySelector("deleteFruit");

  function removeFruit(index){

    let tempLBasket = listBasket.slice();
    tempLBasket.splice(index,1);
    
       setListBasket(tempLBasket);
  }
  
    console.log(listBasket);
    if(document.getElementsByClassName("basket").clicked==true && listBasket.length ==0 )return(<div className="empty">BASKET EMPTY</div>)
    return (
        
        <ul className="listBasket listBasketHide">

            { listBasket.length >0? listBasket.map((product, index) => <li>

                <div>
                    <img src={product.photo} alt="Fruit photo" />
                </div>
                <div className="nameProd">
                    <h1>{product.name}</h1>
                </div>
                <div>
                  price:{product.price} $  /  quantity:{product.quality} kg.
                   sum:{product.total} $
                </div>

                <div className="weight">
                    <button  id={product.name} className="deleteFruit" onClick={()=>removeFruit(index)} >Remove</button>
                </div>

            </li>):<li className="empty"><div>BASKET EMPTY</div></li>
        }
        </ul>



        
    )

}

export default Basket;
