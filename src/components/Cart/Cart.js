import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContextProvider";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getCarts, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (
        <>
          {cart.products.length ? (
            <div className="boxCartTable">
              <h1 style={{ margin: "10px auto" }}>Корзина</h1>
              <table align="center" border={1} className="tableCart">
                <thead>
                  <tr>
                    <th>Название</th>

                    <th>Model</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((elem) => (
                    <tr key={elem.item.id}>
                      <td key={elem.item.id}>
                        <img src={elem.item.image} alt={elem.item.title} />
                      </td>
                      <td>{elem.item.title}</td>
                      <td>{elem.item.price}</td>
                      <td></td>
                      <td id="textSubPrice">{elem.subPrice}</td>
                      <td>
                        <button
                          onClick={() => deleteCartProduct(elem.item.id)}
                          className="btn"
                        >
                          Удалить
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button className="btn btn-success mt-4">
                {" "}
                <Link to="/pay">Оформить подписку </Link>
              </button>
            </div>
          ) : (
            <div className="bgCart">
              <h1 style={{ margin: "0 auto" }}>В корзине ничего нет</h1>
              <img
                id="nullCart"
                alt="notFound"
                src="https://krot.info/uploads/posts/2021-02/1614541912_37-p-grustnii-kot-art-kartinki-38.jpg"
              />
            </div>
          )}
        </>
      ) : (
        <h2>...loading</h2>
      )}
    </div>
  );
};

export default Cart;
