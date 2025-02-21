import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Item, itemsArray } from "./items.static";
import CardItem from "../CardItem";

export default function ListProducts() {
    const [items, setItems] = useState<Item[]>(itemsArray);

    const renderItem = ({ item }: { item: Item }) => (
        <CardItem category={item.category} itemImage={item.itemImage} itemName={item.itemName} itemPrice={item.itemPrice} />
    );

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap'
    },
    card: {}
});
