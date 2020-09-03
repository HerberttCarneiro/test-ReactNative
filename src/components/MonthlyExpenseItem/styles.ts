import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        padding: 10,
        shadowColor: '#000',
        shadowRadius: 7,
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 1,
            width: 1
        },
    },
    title: {
        fontSize: 22
    },
    viewCard: {
        paddingTop: 5,
        flexDirection: "row",
        alignItems: 'center'
    },
    cardText: {
        color: '#566475',
        marginLeft: 5,
        fontSize: 16

    },
    colInfo: {
        flex: 0.5,
    },
    colPrice: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-end",
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    statusCancelled: {
        color: '#ccc',
        textDecorationLine: 'line-through'
    }
});
