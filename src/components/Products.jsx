import { useState } from "react";
import { Card } from "./card";
import img from "../assets/1.jpg";

export const Products = () => {
  let [productlist, setproductlist] = useState([
    { id: 1, title: "toshiba", price: 2000 },
    { id: 2, title: "samsung", price: 2000 },
    { id: 3, title: "nokia", price: 2000 },
    { id: 4, title: "hp", price: 2000 },
  ]);

  function changePrice(id) {
    let products = structuredClone(productlist);

    let product = products.find((prod) => prod.id == id);

    product.price += 30;
    setproductlist(products);
  }

  function delet(id) {
    let products = structuredClone(productlist);

    products = products.filter((prod) => prod.id != id);

    setproductlist(products);
  }

  return (
    <>
      <div className="row">
        {productlist.map((prod) => (
          <Card
            product={prod}
            key={prod.id}
            delet={delet}
            changePrice={changePrice}
            myimg={img}
          />
        ))}
      </div>
    </>
  );
};
