import { useState } from "react";
import styles from "../styles/Filter.module.css";

function Filter(props) {
  const categories = ["all", "men", "jewelery", "electronics", "women"];
  
  const [activeCategory, setActiveCategory] = useState("all");

  function handleFilterBTNClick(category) {
    props.setActiveFilter(category);
    setActiveCategory(category);
  }

  return (
    <div id="filter" className={styles.filter}>
      <div className={`container ${styles.container}`}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterBTNClick(category)}
            className={activeCategory === category ? styles.active : ""}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
