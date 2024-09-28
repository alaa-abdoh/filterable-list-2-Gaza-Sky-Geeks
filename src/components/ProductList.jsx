import { useEffect, useState } from "react";
import products from "../data/Products";
import styles from "../styles/ProductList.module.css";

function ProductList(props) {
  const [printedProducts, setPrintedProducts] = useState(products);
  useEffect(() => {
    if (props.activeFilter != "all")
      setPrintedProducts(
        products.filter((pro) => pro.category === props.activeFilter)
      );
      else setPrintedProducts(products)
  }, [props.activeFilter]);

  return (
    <div className={styles.products}>
      <div className={`container ${styles.container}`}>
        {
            printedProducts.map((product)=>{
                return(
                    <div className={styles.product}>
                    <img src={product.image} alt="image" />
                    <h3>{product.category}</h3>
                    <h4>{product.name}</h4>
                    <span>{product.price}</span>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}
export default ProductList;
