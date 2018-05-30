import * as React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  ImageSourcePropType
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

type Props = {
  images: Array<ImageSourcePropType>;
  backgroundColor?: string;
};

class ImageCarousel extends React.PureComponent<Props> {
  static defaultProps = {
    backgroundColor: 'white'
  };
  render() {
    const { images, backgroundColor } = this.props;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <SwiperFlatList>
          {images.map((image: ImageSourcePropType, i: number) => (
            <Image key={i} source={image} style={styles.image} />
          ))}
        </SwiperFlatList>
      </View>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height
  },
  image: {
    width,
    height,
    resizeMode: 'cover'
  }
});

export default ImageCarousel;
