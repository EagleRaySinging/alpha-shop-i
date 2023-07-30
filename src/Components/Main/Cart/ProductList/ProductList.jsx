import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import styles from "./ProductList.module.css";
import { useState } from "react";

function ProductInfo({ productData, setProducts }) {
  function handleClickMinus(id, quantity) {
    if (quantity > 0) {
      const nextProductData = productData.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: quantity - 1,
          };
        } else {
          return product;
        }
      });
      setProducts(nextProductData);
    }else {
      const filterProductData = productData.filter(product => {
        if(product.quantity !== 0) {
          return product
        }
      })
      setProducts(filterProductData)
    }
  }

  function handleClickPlus(id, quantity) {
    const nextProductData = productData.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: quantity + 1,
        };
      } else {
        return product;
      }
    });
    setProducts(nextProductData);
  }

  const products = productData.map((product) => {
    return (
      <>
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
                    onClick={() =>
                      handleClickMinus(product.id, product.quantity)
                    }
                  />
                  <span className={styles.productCount}>
                    {product.quantity}
                  </span>
                  <Plus
                    className={styles.icon}
                    onClick={() =>
                      handleClickPlus(product.id, product.quantity)
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.price}>${product.price}</div>
          </div>
        </div>
      </>
    );
  });
  return <>{products}</>;
}

export function ProductList({ productData, setTotal }) {
  const [products, setProducts] = useState(productData.data);

  let totalAmount = 0;
  products.forEach(product => {
    totalAmount += (product.price * product.quantity)
  })

  setTotal(totalAmount)

  return (
    <section className={styles.productList} data-total-price="0">
      <ProductInfo productData={products} setProducts={setProducts} />
    </section>
  );
}
