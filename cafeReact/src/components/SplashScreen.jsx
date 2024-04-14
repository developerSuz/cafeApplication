import styles from './SplashScreen.module.css';

function SplashScreen() {
    return (
        <div className={styles.splashContent}>
            <div>
                <h2>Loading...</h2>
            </div>
            <div>
                <img src={"http://localhost:5173/cafeReact/public/images/logoTransp512.png"} 
                alt="Cafe Logo"
                className={styles.splashLogoStyles}/>
            </div>
        </div>
    );
}

export default SplashScreen;