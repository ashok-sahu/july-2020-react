import React from "react";
import styles from "./currencyStyle.module.css";

const Currency = (props) => {
  const { currencyOptions, selectedCurrency, onChangeCurrency,amount,onChangeAmount } = props;
  return (
    <div>
      <input type="number" className={styles.number} value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((options) => (
          <option
            value={options}
            key={options}
          >
            {options}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;
