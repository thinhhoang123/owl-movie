import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loadingComponent}>
      <span className={styles.loader}></span>
    </div>
  );
}
