import styles from "./page.module.scss";
import Homepage from "@/features/homepage";

export default function Home() {
  return (
    <div className={styles.page}>
     <Homepage />
    </div>
  );
}
