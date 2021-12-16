import Button from './Button';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>hello</h1>
      <Button text={"Confirm"} />
    </div>
  );
}

export default App;
