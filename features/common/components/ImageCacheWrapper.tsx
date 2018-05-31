import * as React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Asset, RequireSource } from 'expo';
import SwiperFlatList from 'react-native-swiper-flatlist';

type Props = {
  images: Array<RequireSource>;
};

const cacheImages = (images: Array<RequireSource>) => {
  return images.map((image: RequireSource) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const ImageCacheWrapperHOC = (WrappedComponent: React.ComponentType<Props>) =>
  class ImageCacheWrapper extends React.PureComponent<any, any> {
    state = {
      ready: false
    };
    async componentDidMount() {
      const imageAssets = cacheImages(this.props.images);
      await Promise.all(imageAssets);
      this.setState({ ready: true });
    }
    render() {
      const { images } = this.props;
      const { ready } = this.state;
      if (ready) return <WrappedComponent {...this.props} images={images} />;
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
  };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

export default ImageCacheWrapperHOC;
