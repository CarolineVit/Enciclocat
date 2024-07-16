import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.logo}>
                    <img src="../../pata.png"></img>
                    <span>Enciclocat</span>
                </div>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/racas">Raças</Link>
                <Link to="/contato">Contato</Link>
            
            </nav>

        </header>

    )
}
export default Header