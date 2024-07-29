import { formatDate } from "../../Helpers/formatDate"
import styles from './style.module.css'
export const Header = () => {
  return (
   <header className={styles.header}>
        <h1 className={styles.title}>NEWS REACT-APP</h1>
        <p className={styles.date} >{formatDate(new Date())}</p>
        
   </header>
  )
}
