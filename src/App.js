import  Register  from "./components/Main/Register/Index.jsx";
import  Cart  from "components/Main/Cart/Cart.jsx";
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
