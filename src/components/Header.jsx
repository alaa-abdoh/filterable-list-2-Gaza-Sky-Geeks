import '../App.css'; 
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className={`container ${ styles.container}`}>
        <h3>QuickShop</h3>
        <nav>
          <Link href="#">Home</Link>
          <Link href="#filter">Filter</Link>
          <Link href="#products">Products</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
