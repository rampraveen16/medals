import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import logoPng from "@/assets/pngegg.png"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoWrapper}> 
          <Image src={logoPng}  alt='logo' fill={true} style={{objectFit: "contain"}}></Image>
        </div>
        <div className={styles.infoWrapper}>
            <h3>Medal Table</h3>
            <p>See the list of teams and medals won by each.</p>
            <Link href={'./medals'}  className={styles.secondary}> See Table</Link>
        </div>        
      </main>     
    </div>
  );
}
