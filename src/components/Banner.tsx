import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <View style={styles.promoTag}>
              <Text style={styles.promoText}>Promoção</Text>
            </View>
            
            <Text style={styles.title}>Dose Dupla.</Text>
            <Text style={styles.subtitle}>2 Old Burger por apenas:</Text>
            <Text style={styles.price}>R$ 35,50</Text>
          </View>

          <View style={styles.imageWrapper}>
            <View style={styles.orangeRectangle} />
            <Image 
              source={require('../assets/doseDupla.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    width: 380,
    height: 190,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  promoTag: {
    backgroundColor: '#FF8C00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  promoText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  imageWrapper: {
    position: 'relative',
    width: 200,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeRectangle: {
    position: 'absolute',
    right: -65,
    top: -5,
    height: 195,
    width: 160,
    backgroundColor: '#FF8C00',
    borderRadius: 13,
  },
  image: {
    width: 200,
    height: 200,
    right: -50,
    top: 0,
  },
});

export default Banner;