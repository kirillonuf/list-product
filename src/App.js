
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
import { useState} from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

function App() {

    const [listBasket, setListBasket] = useState(JSON.parse(localStorage.getItem("listBasket")) || []);

    localStorage.setItem("listBasket", JSON.stringify(listBasket));
   

    const totalBasket = () => {

        if (listBasket.length === 0) return 0;

        return listBasket.reduce((accumulator, element) => accumulator + element.total, 0);

    }

    return (
        <  BrowserRouter>
            < div className="general" >

                <div div className="btn" >

                    <div> total: {totalBasket().toFixed(2)}$</div>

                    <div>
                        <Link to="/basket"> <button className="basket" >  Basket {listBasket.length > 0 ?
                            <span className="countBasket">{listBasket.length}</span>
                            : ""}</button>
                        </Link>

                    </div>
                    <div>

                        <Link to="/"><button className="basket" > Product </button></Link>

                    </div>

                </div>

                <div className="allProd">

                    <Switch>

                        <Route exact path="/" component={() => (<ListProd productsDB={productsDB} setListBasket={setListBasket} listBasket={listBasket} />)} />

                        <Route exact path="/basket" component={() => (<Basket listBasket={listBasket} setListBasket={setListBasket} />)} />

                    </Switch>

                </div>

            </div>
        </BrowserRouter>
    );
}
export default App;
