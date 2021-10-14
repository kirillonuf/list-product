
// // 
// - Реализовать список товаров 
// банан - $10
// яблоко - $8
// папайя - $10 ($25 за 3 кг)
// - возможность добавить в корзину
// - страница корзины с общей суммой товаров и возможностью их удаления
// - развернуть проект на github pages, firebase, heroku или другом месте

// пример работы скидки - она должна распространяться на каждые 3 кг
// тоесть 2 кг - 20, 3 кг - 25, 4кг - 35, 5кг - 45, 6кг - 50

import productsDB from "./Data/productsDB";
import './App.scss';
import ListProd from "./components/ProductList";
import Basket from './components/Basket';
import { useState, useEffect } from "react";


function App() {

    const [listBasket, setListBasket] = useState([]);


    function renderBasket() {

        let basket = document.querySelector(".listBasket");
        let selector = document.querySelector(".selector");

        if (basket.classList.contains("listBasketHide")) {

            basket.classList.remove("listBasketHide");
            basket.classList.add("listBasketShow");
            selector.classList.add("selectorShow");
            selector.classList.remove("selectorHide");

        } else {

            basket.classList.remove("listBasketShow");
            basket.classList.add("listBasketHide");
            selector.classList.remove("selectorShow");
            selector.classList.add("selectorHide");

        }

    }

    const totalBasket = () => {

        if (listBasket.length == 0) return 0;

        return listBasket.reduce((accumulator, element) => accumulator + element.total, 0);

    }

    return (

        < div className="general" >

            <  div className="btn" >

                <div  >total: {totalBasket().toFixed(2)}$</div>

                <div>
                    <button onClick={renderBasket} className="basket" > Basket  {listBasket.length > 0 ?
                        <span className="countBasket">{listBasket.length}</span> : ""}</button>
                </div>

            </div>

            <div className="allProd" >

                <ListProd productsDB={productsDB} setListBasket={setListBasket} listBasket={listBasket} />

                <div className="selector"></div>

                <Basket listBasket={listBasket} setListBasket={setListBasket} />

            </div>

        </div>

    );
}
export default App;
