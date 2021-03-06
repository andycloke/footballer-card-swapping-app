import * as React from 'react';
import { StyleSheet, Dimensions, Image, View } from 'react-native';
import { RequireSource } from 'expo';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ImageCacheWrapper from './ImageCacheWrapper';

type Props = {
  images: Array<RequireSource>;
  initialIndex?: number;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  handleIndexChange?: (index: number) => void;
};

export class ImageCarousel extends React.PureComponent<Props> {
  static defaultProps = {
    initialIndex: 0,
    backgroundColor: 'white',
    imageBackgroundColor: 'white'
  };
  handleIndexChange = ({ index }: { index: number }) => {
    const { handleIndexChange } = this.props;
    if (handleIndexChange && typeof handleIndexChange === 'function') {
      handleIndexChange(index);
    }
  };
  render() {
    const {
      images,
      backgroundColor,
      imageBackgroundColor,
      initialIndex
    } = this.props;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <SwiperFlatList
          index={initialIndex}
          onMomentumScrollEnd={this.handleIndexChange}
        >
          {images.map((image: RequireSource, i: number) => (
            <View key={i} style={styles.child}>
              <Image
                source={image}
                style={[
                  styles.image,
                  {
                    backgroundColor: imageBackgroundColor
                  }
                ]}
              />
            </View>
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
  child: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width * 0.95,
    height: height * 0.6,
    resizeMode: 'cover'
  }
});

export default ImageCacheWrapper(ImageCarousel as any);
