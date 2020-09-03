import { StyleSheet } from 'react-native';
import CommonColors from '../../theme/commonColor';

export default StyleSheet.create({
    flatlist: {
        backgroundColor: CommonColors.aliceBlue,
        paddingTop: 15,

    },
    footer: {
        borderTopColor: CommonColors.silver,
        borderTopWidth: 0.5,
        height: 70,
        backgroundColor: CommonColors.blueLight2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footerText: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 22,
        color: CommonColors.blueLight3,
        textTransform: 'uppercase'
    },
    footerTotalText: {
        color: CommonColors.black,
    }
});
