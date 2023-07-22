import { ReactComponent as Minus } from 'assets/icons/minus.svg'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import styles from './ProductList.module.css'

function ProductInfo({productData}) {
  const products = productData.data.map((product) => {
    return (
      <>
        <div className={styles.productContainer} data-count="0" data-price="3999">
          <img alt={product.name} className={styles.imgContainer} src={product.img} />
          <div className={styles.productInfo}>
            <div>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  <Minus className={styles.icon} />
                  <span className={styles.productCount}>{product.quantity}</span>
                  <Plus className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.price}>${product.price}</div>
          </div>
        </div>
      </>
    )
  })
  return (
    <>
      {products}
    </>
  )
}


export function ProductList({productData}) {
  return (
    <section className={styles.productList} data-total-price="0">
      <ProductInfo
      productData={productData} />
    </section>
  )
}
