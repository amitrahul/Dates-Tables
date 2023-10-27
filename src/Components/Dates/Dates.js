import { useState } from "react";
import TableData from "../Table-Data/TableData";
import styles from "./Dates.module.css";
const dateObj = [
  {
    date: "2023-09-02",
    view: "150",
    article: "Article 2"
  },
  {
    date: "2023-09-05",
    view: "120",
    article: "Article 3"
  },
  {
    date: "2023-09-01",
    view: "100",
    article: "Article 1"
  },
  {
    date: "2023-09-03",
    view: "130",
    article: "Article 1"
  },
  {
    date: "2023-09-04",
    view: "600",
    article: "Article 4"
  }
];
const Dates = () => {
  const [dateList, setDateList] = useState(dateObj);
  const handleBtnView = () => {
    const filteredDateList = dateList.sort((a, b) => {
      return a.view - b.view;
    });
    setDateList([...filteredDateList]);
  };
  const handleBtnDate = () => {
    const filteredbyDate = dateList.sort((a, b) => {
      console.log(a, b);
      return new Date(a.date) - new Date(b.date);
    });

    setDateList([...filteredbyDate]);
  };

  return (
    <div className={styles.dateWrapper}>
      <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={handleBtnDate}>
          Sort by Date
        </button>
        <button className={styles.btn} onClick={handleBtnView}>
          Sort by Views
        </button>
      </div>
      <div className={styles.tableWrapper}>
        <table>
          <tr className={styles.tableRow}>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
          {dateList.map((date) => {
            return <TableData tdata={date} />;
          })}
        </table>
      </div>
    </div>
  );
};

export default Dates;
