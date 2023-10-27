import styles from "./TableData.module.css";
const TableData = ({ tdata }) => {
  const { date, view, article } = tdata;
  return (
    <tr className={styles.tabledataRow}>
      <td>{date}</td>
      <td>{view}</td>
      <td>{article}</td>
    </tr>
  );
};

export default TableData;
