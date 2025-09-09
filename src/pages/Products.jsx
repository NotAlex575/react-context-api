import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";

const Products = () => {
    const [prodotti, setProdotti] = useState([]);
    const {budgetMode} = useContext(BudgetContext);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProdotti(data));
    }, []);

    const prodottiBudget = budgetMode 
    //if
    ? prodotti.filter(budget => budget.price <= 30) 
    //else
    : prodotti

    return (
    <>
        <div className="text-center fs-1 fw.bold mb-5">Products</div>
        <div className="container text-center">
            <div className="row align-items-start">
            {prodotti.map((prodotto) => {
                return(
                <div className="col-6 border mb-5" key={prodotto.id}> 
                    <Link className="text-decoration-none text-black" to={`/products/${prodotto.id}`}>
                        <h2>{prodotto.title}</h2>
                        <img className="img-fluid" src={prodotto.image} alt={prodotto.title} />
                        <p>{prodotto.description}</p>
                        <p>{prodotto.category}</p>
                        <p>{prodotto.price} euro</p>
                    </Link>
                </div>
                )
            })}
            </div>
        </div>
    </>
  )
}

export default Products