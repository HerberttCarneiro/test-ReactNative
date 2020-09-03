import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../types";
import MonthlyExpenses from "../pages/MonthlyExpenses";
import { Text } from "react-native";
import App from "../../App";
import ExpensesDetails from "../pages/ExpensesDetails";
import CommonColors from "../theme/commonColor";
import IconTemplate from "../components/IconTemplate/IconTemplate";
import styles from "./styles";

const AppStack = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="MonthlyExpenses"
        component={MonthlyExpenses}
        options={({ navigation }) => ({
          headerTitle: "",
          headerStyle: styles.headerStyleExpenses,
          headerLeft: () => (
            <Text style={styles.headerLeftExpenses}>Setembro</Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log("editar...")}>
              <IconTemplate
                name="search"
                style={styles.headerRightIcon}
              ></IconTemplate>
            </TouchableOpacity>
          ),
        })}
      />
      <AppStack.Screen
        name="ExpensesDetails"
        options={({ navigation }) => ({
          headerTitle: "",
          headerStyle: styles.headerStyleExpensesDetails,
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconTemplate
                name="arrow-back"
                style={styles.goBackIcon}
              ></IconTemplate>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log("editar...")}>
              <IconTemplate
                name="edit"
                style={styles.headerRightIcon}
              ></IconTemplate>
            </TouchableOpacity>
          ),
        })}
        component={ExpensesDetails}
      ></AppStack.Screen>
    </AppStack.Navigator>
  );
};

export default AppRoutes;
