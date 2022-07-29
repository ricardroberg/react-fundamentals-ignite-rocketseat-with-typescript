import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header>
      
      <strong className={styles.header}><img src={igniteLogo} alt="Ignite Logo" />Ignite Feed</strong>
    </header>
  );
}
