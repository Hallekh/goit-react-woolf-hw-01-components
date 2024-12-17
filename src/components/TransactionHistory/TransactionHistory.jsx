import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }, index) => (
            <tr
              key={id}
              className={`${styles.tr} ${
                index % 2 === 0 ? styles.evenRow : styles.oddRow
              } ${styles.hoverRow}`}
            >
              <td className={styles.td}>{type}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
