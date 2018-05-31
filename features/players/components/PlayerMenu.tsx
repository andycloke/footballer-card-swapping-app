import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import ImageCarousel from '../../common/components/ImageCarousel';
import { colors } from '../../../styles';
import PlayerSwap from './PlayerSwap';
import PLAYER_IMAGES from '../data/playerImages';

type State = {
  activeIndex: number;
  swapping: boolean;
};
class PlayerMenu extends React.PureComponent<{}, State> {
  state = {
    activeIndex: 0,
    swapping: false
  };

  updateActiveIndex = (index: number) => {
    this.setState({
      activeIndex: index
    });
  };

  handleButtonPress = () => {
    this.setState((prevState: State) => ({
      ...prevState,
      swapping: !prevState.swapping
    }));
  };

  render() {
    const { swapping, activeIndex } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={this.handleButtonPress}
            style={[
              styles.button,
              { alignSelf: swapping ? 'flex-start' : 'flex-end' }
            ]}
          >
            <Text style={styles.buttonText}>{swapping ? 'Back' : 'Next'}</Text>
          </TouchableOpacity>
          )}
        </View>
        {this.state.swapping ? (
          <PlayerSwap
            playerImages={[
              PLAYER_IMAGES[activeIndex],
              PLAYER_IMAGES[(activeIndex + 1) % PLAYER_IMAGES.length]
            ]}
          />
        ) : (
          <ImageCarousel
            initialIndex={0}
            backgroundColor={colors.bunting}
            images={PLAYER_IMAGES}
            handleIndexChange={this.updateActiveIndex}
          />
        )}
      </View>
    );
  }
}

export default PlayerMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.mintGreen,
    height: 35,
    width: 75,
    margin: 12,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
});
