import { StyleSheet } from 'react-native';
import CommonColors from '../../theme/commonColor';

export default StyleSheet.create({
    priceView: {
        backgroundColor: CommonColors.blueLight2,
        alignItems: "flex-end",
        padding: 20,
    },
    priceText: {
        fontSize: 32,
        color: CommonColors.blueLight4,
        fontWeight: "bold",
        marginTop: 15,
    },
    content: {
        padding: 15
    },
    row: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconRow: {
        fontSize: 20,
        marginRight: 10,
        color: CommonColors.blueLight3
    },
    textRow: {
        lineHeight: 30,
        fontSize: 20
    },
    calendarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: CommonColors.blueLight4,
    },
    cardText: {
        color: CommonColors.blueLight3
    },
    statusIcon: {
        fontSize: 26,
        color: CommonColors.green,
    },
    statusText: {
        fontWeight: 'bold',
        color: CommonColors.green,
    },
    placeView: {
        marginVertical: 15,
        backgroundColor: CommonColors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: CommonColors.veryLightGray,
        padding: 10
    },
    placeIconCol: {
        flex: 0.16,
        justifyContent: "center",
        alignItems: "center",
    },
    placeIcon: {
        fontSize: 30
    },
    placeInfoCol: {
        flex: 0.8,
    },
    placeText: {
        color: CommonColors.blueDark,
        fontWeight: 'bold'
    },
    datePlaceText: {
        color: CommonColors.blueLight4,
        marginTop: 5,
        width: "100%"
    },
    image: {
        margin: 10,
        height: 200,
        borderRadius: 15,
        resizeMode: 'contain'
    }
});
