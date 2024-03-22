import { Link, Outlet, Router } from "react-router-dom";
import styles from "./navbar.module.css";


export default function Navbar() {

    return (
        <div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>

            <Outlet />
        </div>

    );

}