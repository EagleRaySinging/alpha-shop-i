import Register from 'components/Main/Register/Index';
import Cart from 'components/Main/Cart/Cart';
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
