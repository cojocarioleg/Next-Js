import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 MyApp. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/images/vk.png" width={15} height={15} className={styles.icon} alt="vk.com"/>
        <Image src="/images/inst.png" width={15} height={15} className={styles.icon} alt="instagram"/>
        <Image src="/images/twitter.png" width={15} height={15} className={styles.icon} alt="twitter"/>
        <Image src="/images/yt.png" width={15} height={15} className={styles.icon} alt="youtube"/>
      </div>
    </footer>
  );
};

export default Footer;