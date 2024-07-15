import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.logo}>
                    <img src="../../vegetal.png"></img>
                    <span>Smart Food</span>
                </div>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/ajuda">Ajuda</Link>
            </nav>

        </header>

    )
}
export default Header