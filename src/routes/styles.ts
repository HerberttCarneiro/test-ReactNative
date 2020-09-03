import { StyleSheet } from 'react-native';
import CommonColors from '../theme/commonColor';

export default StyleSheet.create({
    goBackIcon: {
        fontSize: 30,
        color: CommonColors.blueLight4,
        padding: 5,
    },
    headerRightIcon: {
        fontSize: 28,
        color: CommonColors.blueLight4,
        padding: 5,
    },
    headerStyleExpensesDetails: {
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        backgroundColor: CommonColors.blueLight2,
    },
    headerStyleExpenses: {
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        backgroundColor: CommonColors.aliceBlue,
    },
    headerLeftExpenses: {
        fontSize: 28,
        color: CommonColors.blueLight4,
        fontWeight: "bold",
        marginTop: 8,
        marginLeft: 10,
    }
})

