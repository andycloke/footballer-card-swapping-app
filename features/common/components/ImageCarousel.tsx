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
  initialIndex: number;
  images: Array<ImageSourcePropType>;
  backgroundColor?: string;
  handleIndexChange: (index: number) => void;
};

class ImageCarousel extends React.PureComponent<Props> {
  static defaultProps = {
    backgroundColor: 'white'
  };
  handleIndexChange = ({ index }: { index: number }) => {
    this.props.handleIndexChange(index);
  };
  render() {
    const { images, backgroundColor, initialIndex } = this.props;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <SwiperFlatList
          index={initialIndex}
          onMomentumScrollEnd={this.handleIndexChange}
        >
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
    flex: 1,
    justifyContent: 'flex-end'
  },
  image: {
    width,
    height: height * 0.9,
    resizeMode: 'cover'
  }
});

export default ImageCarousel;
