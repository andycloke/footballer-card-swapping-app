import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageSourcePropType
} from 'react-native';

import { ImageCarousel, Button } from '../../common';
import { colors } from '../../../styles';
import PlayerSwap from './PlayerSwap';
import PLAYER_IMAGES from '../data/playerImages';

type Props = {
  players?: [ImageSourcePropType, ImageSourcePropType];
};

type State = {
  activeIndex: number;
  swapping: boolean;
};

/* At the moment a default prop is being used to supply the player images, but in reality they'd
be retrieved from a backend service / the user's device */

class PlayerMenu extends React.PureComponent<Props, State> {
  static defaultProps = {
    players: PLAYER_IMAGES
  };

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
    const { players } = this.props;
    const { swapping, activeIndex } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Button
            onPress={this.handleButtonPress}
            buttonStyle={[
              styles.button,
              { alignSelf: swapping ? 'flex-start' : 'flex-end' }
            ]}
            text={swapping ? 'Back' : 'Next'}
          />
          )}
        </View>
        {players &&
          (swapping ? (
            <PlayerSwap
              playerImages={[
                players[activeIndex],
                players[(activeIndex + 1) % players.length]
              ]}
            />
          ) : (
            <ImageCarousel
              initialIndex={0}
              backgroundColor={colors.bunting}
              images={players}
              handleIndexChange={this.updateActiveIndex}
            />
          ))}
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
    height: 35,
    width: 75,
    margin: 12
  }
});
