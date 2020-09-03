import { StyleSheet } from 'react-native';
import CommonColors from '../../theme/commonColor';

export default StyleSheet.create({
    day: {
        backgroundColor: CommonColors.aliceBlue,
        padding: 10,
        color: '#9DADB8',
        fontSize: 24,
        fontWeight: 'bold'
    },
    weekDay: {
        color: '#9DADB8',
        fontSize: 18,
        fontWeight: 'normal',
        textTransform: 'uppercase'
    },
});
