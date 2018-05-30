import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

import PlayerMenu from './features/players/components/PlayerMenu';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <PlayerMenu />
      </View>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1854',
    paddingTop: 40,
    flex: 1
  }
});
