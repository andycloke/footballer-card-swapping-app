import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Animated,
  Dimensions,
  Easing,
  ImageSourcePropType
} from 'react-native';

import ImageCarousel from '../../common/components/ImageCarousel';

type Props = {
  playerImages: [ImageSourcePropType, ImageSourcePropType];
};

export default class PlayerSwap extends React.PureComponent<Props> {
  linearAnimatedValue: Animated.Value = new Animated.Value(0);
  cyclicalAnimatedValue: Animated.Value = new Animated.Value(0);

  componentDidMount() {
    this.animate();
  }
  animate() {
    this.cyclicalAnimatedValue.setValue(0);
    Animated.parallel([
      Animated.timing(this.cyclicalAnimatedValue, {
        toValue: 1,
        duration: ANIMATION_DURATION_ONE_WAY_MS * 2,
        easing: ANIMATION_EASING_FUNCTION
      }),
      Animated.sequence([
        Animated.timing(this.linearAnimatedValue, {
          toValue: 1,
          duration: ANIMATION_DURATION_ONE_WAY_MS,
          easing: ANIMATION_EASING_FUNCTION
        }),
        Animated.timing(this.linearAnimatedValue, {
          toValue: 0,
          duration: ANIMATION_DURATION_ONE_WAY_MS,
          easing: ANIMATION_EASING_FUNCTION
        })
      ])
    ]).start(() => this.animate());
  }

  render() {
    const { playerImages } = this.props;
    const player1XTranslation = this.linearAnimatedValue.interpolate({
      inputRange: LINEAR_INPUT_RANGE,
      outputRange: [
        -HORIZONTAL_TRANSLATE_DISTANCE,
        HORIZONTAL_TRANSLATE_DISTANCE
      ]
    });
    const player2XTranslation = player1XTranslation.interpolate({
      inputRange: LINEAR_INPUT_RANGE,
      outputRange: [1, 0]
    });
    const player1Scale = this.cyclicalAnimatedValue.interpolate({
      inputRange: CYCLICAL_INPUT_RANGE,
      outputRange: [
        NORMAL_SCALE,
        MAX_SCALE,
        NORMAL_SCALE,
        MIN_SCALE,
        NORMAL_SCALE
      ]
    });
    const player2Scale = this.cyclicalAnimatedValue.interpolate({
      inputRange: CYCLICAL_INPUT_RANGE,
      outputRange: [
        NORMAL_SCALE,
        MIN_SCALE,
        NORMAL_SCALE,
        MAX_SCALE,
        NORMAL_SCALE
      ]
    });
    const player1ZIndex = this.cyclicalAnimatedValue.interpolate({
      inputRange: CYCLICAL_INPUT_RANGE,
      outputRange: [
        HIGHER_Z_INDEX,
        HIGHER_Z_INDEX,
        HIGHER_Z_INDEX,
        LOWER_Z_INDEX,
        LOWER_Z_INDEX
      ]
    });
    const player2ZIndex = this.cyclicalAnimatedValue.interpolate({
      inputRange: CYCLICAL_INPUT_RANGE,
      outputRange: [
        LOWER_Z_INDEX,
        LOWER_Z_INDEX,
        LOWER_Z_INDEX,
        HIGHER_Z_INDEX,
        HIGHER_Z_INDEX
      ]
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          source={playerImages[0]}
          style={[
            styles.image,
            {
              transform: [
                { translateX: player1XTranslation },
                { scale: player1Scale }
              ],
              zIndex: player1ZIndex
            }
          ]}
        />
        <Animated.Image
          source={playerImages[1]}
          style={[
            styles.image,
            {
              transform: [
                { translateX: player2XTranslation },
                { scale: player2Scale }
              ],
              zIndex: player2ZIndex
            }
          ]}
        />
      </View>
    );
  }
}
const ANIMATION_DURATION_ONE_WAY_MS = 2000;
const ANIMATION_EASING_FUNCTION = Easing.linear;
const { width, height } = Dimensions.get('window');
const HORIZONTAL_TRANSLATE_DISTANCE = width * 0.25;
const NORMAL_SCALE = 1;
const MAX_SCALE = 1.2;
const MIN_SCALE = 0.8;
const LOWER_Z_INDEX = 1;
const HIGHER_Z_INDEX = LOWER_Z_INDEX + 1;

const LINEAR_INPUT_RANGE = [0, 1];
const CYCLICAL_INPUT_RANGE = [0, 0.25, 0.5, 0.75, 1];

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    backgroundColor: 'white',
    borderRadius: 4,
    position: 'absolute',
    top: height * 0.3,
    left: width * 0.3,
    width: width * 0.4,
    height: height * 0.3,
    resizeMode: 'cover'
  }
});
