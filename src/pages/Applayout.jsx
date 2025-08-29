import SideBar from "../components/SideBar";
import styles from "./Applayout.module.css";
import Map from "../components/Map";
function Applayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default Applayout;
