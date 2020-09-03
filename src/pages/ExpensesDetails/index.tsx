import React from "react";
import { View, Text, Image } from "react-native";
import { ExpensesItemType } from "../../types";
import { formatMoney } from "../../utils/format";
import styles from "./styles";
import IconTemplate from "../../components/IconTemplate/IconTemplate";
export default function ExpensesDetails(props: {
  route: { params: ExpensesItemType };
}) {
  const {
    route: { params },
  } = props;

  return (
    <>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>
          {formatMoney(params.price, "currency")}
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <IconTemplate style={styles.iconRow} name="calendar"></IconTemplate>
          <Text style={styles.calendarText}>{params.date}</Text>
        </View>
        <Text style={styles.textRow}>{params.title}</Text>
        <View style={styles.row}>
          <IconTemplate style={styles.iconRow} name="food"></IconTemplate>
          <Text style={[styles.textRow, styles.cardText]}>{params.card}</Text>
        </View>
        <View style={styles.row}>
          <IconTemplate
            style={[styles.iconRow, styles.statusIcon]}
            name="cash-back"
          ></IconTemplate>
          <Text style={[styles.textRow, styles.statusText]}>Reembolsavel</Text>
        </View>
        <View style={styles.placeView}>
          <View style={styles.placeIconCol}>
            <IconTemplate
              style={[styles.iconRow, styles.placeIcon]}
              name="calendar-check"
            ></IconTemplate>
          </View>
          <View style={styles.placeInfoCol}>
            <Text style={styles.placeText}>{params.place}</Text>
            <Text style={styles.datePlaceText}>{params.date}</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://galardians.com/wp-content/uploads/2017/03/numero-do-cupom-fiscal.jpg",
          }}
        />
      </View>
    </>
  );
}
