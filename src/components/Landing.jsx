import '../App.css'; 
import styles from "../styles/Landing.module.css";

function Landing(){
    return(
        <div className={styles.landing}>
        <div className={`container ${ styles.container}`}>
            <div className={styles.text}>
                <h1>Explore Our Products</h1>
                <p>Welcome to QuickShop! Discover quality products, filter by category, and find what you need with ease.</p>
            </div>
        </div>
    </div>
    )
}
export default Landing