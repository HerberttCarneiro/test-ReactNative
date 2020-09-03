import React, { useState, useEffect } from "react";
import { View, Text, SectionList } from "react-native";

import MonthlyExpensesItem from "../../components/MonthlyExpenseItem";
import { formatMoney } from "../../utils/format";
import MonthlyExpenseSection from "../../components/MonthlyExpenseSection";
import { expenses } from "../../colletions";
import styles from "./styles";
import CommonColors from "../../theme/commonColor";
import { ExpensesType } from "../../types";

export default function MonthlyExpenses() {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    totalAmount();
  }, []);

  const totalAmount = (): void => {
    let amount = 0;
    expenses.map((item: ExpensesType) => {
      return (amount += item.data.reduce(
        (sum: number, { price }): number => sum + price,
        0
      ));
    });
    setTotal(amount);
  };

  return (
    <>
      <SectionList
        style={{
          backgroundColor: CommonColors.aliceBlue,
        }}
        sections={expenses}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => (
          <MonthlyExpensesItem item={item}></MonthlyExpensesItem>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <MonthlyExpenseSection title={title}></MonthlyExpenseSection>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Total</Text>
        <Text style={[styles.footerText, styles.footerTotalText]}>
          {formatMoney(total, "currency")}
        </Text>
      </View>
    </>
  );
}
