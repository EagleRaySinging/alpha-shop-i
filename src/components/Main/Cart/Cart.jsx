import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import PayInfo from "./PayInfo/PayInfo";
import styles from "./Cart.module.css";
import { useContext, useState } from "react";
import { CartContext } from "context/CartContext";

function CartItem({product, onClick}) {
  return (
    <div
      className={styles.productContainer}
      data-count="0"
      data-price="3999"
    >
      <img
        alt={product.name}
        className={styles.imgContainer}
        src={product.img}
      />
      <div className={styles.productInfo}>
        <div>
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productControlContainer}>
            <div className={styles.productControl}>
              <Minus
                className={styles.icon}
                onClick={() => onClick(product.id, product.quantity, "-")}
              />
              <span className={styles.productCount}>{product.quantity}</span>
              <Plus
                className={styles.icon}
                onClick={() => onClick(product.id, product.quantity, "+")}
              />
            </div>
          </div>
        </div>
        <div className={styles.price}>${product.price}</div>
      </div>
    </div>
  );
}

export default function Cart() {
  
  const {products, setProducts, totalAmount} = useContext(CartContext)


  function handleClickCalc(id, quantity, symbol) {
    let nextProducts = []
    if (symbol === "-") {
      if (quantity > 0) {
         nextProducts = products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: quantity - 1,
            };
          } else {
            return product;
          }
        });
        setProducts(nextProducts);
      }
    } else {
      nextProducts = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: quantity + 1,
          };
        } else {
          return product;
        }
      });
      setProducts(nextProducts);
    }
  }

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-total-price="0">
        {products.map((product) => (
          <CartItem key={product.id} product={product} onClick={handleClickCalc} />
        ))}
      </section>
      <PayInfo total={totalAmount} />
    </section>
  );
}
