import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ItemCardProps {
    itemImage: ImageSourcePropType;
    itemName: string;
    itemPrice: string;
    category: string;
}

const CardItem: React.FC<ItemCardProps> = ({ itemImage, itemName, itemPrice, category }) => {
    return (
        <View style={styles.card}>
            <Image source={itemImage} style={styles.image} resizeMode='contain' />
            <View style={styles.footerCard}>
                <Text style={styles.categoryItem}>{category}</Text>
                <Text style={styles.itemName}>{itemName}</Text>

                <Text style={styles.itemPrice}>R$ {itemPrice}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        padding: 16,
        margin: 10,
        width: 178,
        height: 178,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
        resizeMode: 'contain'

    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        color: '#FB9400',
        fontWeight: 'bold'
    },
    footerCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '100%'
    },
    categoryItem: {
        fontSize: 8,
        fontWeight: '500'
    }
});

export default CardItem;
