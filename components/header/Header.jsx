import styles from "./Header.module.scss";
import Logo from "./logo.svg";
import Navbar from "./nav/Navbar";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <Logo className={styles.logo}/>
                    <Navbar />
                </div>
            </div>
        </header>
    );
};

export default Header;
