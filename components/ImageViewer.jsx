import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
  return (
    <Image source={imageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,
    borderRadius: 18
  }
});