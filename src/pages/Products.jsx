import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProdotti(data));
    }, []);

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