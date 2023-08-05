import Register from "components/Main/Register/Index";
import Cart from "components/Main/Cart/Cart";
import styles from "./App.module.css";
import { CartContextProvider } from "context/CartContext";
import { FormContextProvider } from "context/FormContext";

function App() {
  return (
    <div className={styles.container}>
      <FormContextProvider>
      <CartContextProvider>
        <Register />
        <Cart />
      </CartContextProvider>
      </FormContextProvider>
    </div>
  );
}

export default App;
