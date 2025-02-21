import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationProp } from '@react-navigation/native';

interface ProductScreenProps {
  navigation: NavigationProp<any>;
}

export default function ProductScreen({ navigation }: ProductScreenProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FF8C00" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.headerButton}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Produto</Text>
        
        <TouchableOpacity 
          onPress={() => setIsFavorite(!isFavorite)}
          style={styles.headerButton}
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.category}>Tradicional</Text>
        <Text style={styles.productName}>Golden Burger</Text>
        
        <Text style={styles.description}>
          2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal
        </Text>

        {/* Quantity and Price */}
        <View style={styles.quantitySection}>
          <Text style={styles.quantityLabel}>Quantidade</Text>
          
          <View style={styles.quantityPriceContainer}>
            <View style={styles.quantityControls}>
              <TouchableOpacity 
                onPress={decreaseQuantity}
                style={[styles.quantityButton, quantity <= 1 && styles.quantityButtonDisabled]}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>
                {quantity.toString().padStart(2, '0')}
              </Text>

              <TouchableOpacity 
                onPress={increaseQuantity}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>
              R$ {(25.50 * quantity).toFixed(2).replace('.', ',')}
            </Text>
          </View>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar à sacola</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '80%',
    height: '80%',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
  },
  quantitySection: {
    marginBottom: 24,
  },
  quantityLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  quantityPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  quantityButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonDisabled: {
    opacity: 0.5,
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#FF8C00',
  },
  quantityText: {
    fontSize: 18,
    paddingHorizontal: 16,
    minWidth: 48,
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  addButton: {
    backgroundColor: '#FF8C00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});