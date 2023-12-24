import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link to="/">Магазины</Link>
            <Link to="/about">Обо мне</Link>
            <Link to="/contact">Контакты</Link>
            
        </nav>
    </header>
  )
}
