import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Constants } from 'expo';

import { colors } from './styles';
import PlayerMenu from './features/players/components/PlayerMenu';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <PlayerMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bunting,
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
});
