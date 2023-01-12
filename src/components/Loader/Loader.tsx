import styles from "./Loader.module.css";
import "./Loader.module.css";

// export enum LoaderSize {
//   s = "20",
//   m = "40",
//   l = "60",
// }
// interface ILoaderProps {
//   color?: string;
//   loading?: boolean;
//   size?: LoaderSize;
//   className?: string;
// }

export const Loader = () => {
  return <div className={styles.loader}></div>;
};
