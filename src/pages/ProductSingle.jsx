import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductSingle = () => {
  const { id } = useParams ();
  const [prodotto, setProdotto] = useState();
  const naviga = useNavigate();

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProdotto(data));
    }, [id]);


    return (
    <>
    <div className="container text-center mt-5">
       {prodotto ? (
        <>
         <div className="row align-items-start">
            <div className="col-12 border mb-5" key={prodotto.id}> 
                <h2>{prodotto.title}</h2>
                <img className="img-fluid" src={prodotto.image} alt={prodotto.title} />
                <p>{prodotto.description}</p>
                <p>{prodotto.category}</p>
                <p>{prodotto.price} euro</p>
            </div>
        </div>
        <div className="d-flex justify-content-around mt-5 mb-5">
            <button
                className="btn btn-primary"
                onClick={() => naviga(`/products/${prodotto.id-1}`)}>
                vedi product precedente
            </button>
            <button
                className="btn btn-primary"
                onClick={() => naviga(-1)}>
                torna alla pagina precedente
            </button>
            <button
                className="btn btn-primary"
                onClick={() => naviga(`/products/${prodotto.id+1}`)}>
                vedi product successivo
            </button>
        </div>
        </>
       ):(
        <p className="loader">caricamento in corso....</p>
       )}
    </div>
    </>
    )
}

export default ProductSingle