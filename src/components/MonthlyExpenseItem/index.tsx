import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ExpensesItemType } from "../../types";
import styles from "./styles";
import { formatMoney } from "../../utils/format";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CommonColors from "../../theme/commonColor";

export const MonthlyExpensesItem: React.FC<{
  item: ExpensesItemType;
}> = ({ item }) => {
  const navigation = useNavigation();
  const styleByStatus =
    item.status == "cancelled" ? styles.statusCancelled : null;

  function toDetails() {
    navigation.navigate("ExpensesDetails", item);
  }

  return (
    <TouchableOpacity onPress={() => toDetails()}>
      <View style={styles.content}>
        <View style={styles.colInfo}>
          <Text style={[styles.title, styleByStatus]}>{item.title}</Text>
          <View style={styles.viewCard}>
            <MaterialIcons
              name="local-dining"
              size={18}
              color={
                item.status == "cancelled"
                  ? CommonColors.veryLightGray
                  : CommonColors.blueLight4
              }
            ></MaterialIcons>
            <Text style={[styles.cardText, styleByStatus]}>{item.card}</Text>
          </View>
        </View>
        <View style={styles.colPrice}>
          <MaterialIcons
            name="attach-money"
            size={20}
            color={
              item.status == "cancelled"
                ? CommonColors.veryLightGray
                : CommonColors.green
            }
          ></MaterialIcons>
          <Text style={[styles.priceText, styleByStatus]}>
            {formatMoney(item.price)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MonthlyExpensesItem;
