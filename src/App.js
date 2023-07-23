import { Register } from "./Components/Main/Register/Index.jsx";
import { Cart } from "Components/Main/Cart/Cart.jsx";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Register />
      <Cart />
    </div>
  );
}

export default App;
