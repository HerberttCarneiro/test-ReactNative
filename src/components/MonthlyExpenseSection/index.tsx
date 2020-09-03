import React from "react";
import { Text } from "react-native";

import styles from "./styles";

export const MonthlyExpenseSection: React.FC<{ title: any }> = ({ title }) => {
  var options = {
    weekday: "long",
    day: "2-digit",
  };

  const date = new Intl.DateTimeFormat("pt", options).format(title);
  const detailsDate = date.split(",");

  return (
    <Text style={styles.day}>
      {detailsDate[1]}
      <Text style={styles.weekDay}> {detailsDate[0]}</Text>
    </Text>
  );
};

export default MonthlyExpenseSection;
