import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import PlayerCarousel from './features/players/components/PlayerCarousel';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <PlayerCarousel />
      </View>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
