import { Link } from "react-router-dom"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
    <Link to={('https://t.me/awd633')} target="_blank">© Akparov Marsel</Link>
    </footer>
  )
}
