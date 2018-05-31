import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent
} from 'react-native';

import { colors } from '../../../styles';

type Props = {
  color?: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  text: string;
};

const Button = ({
  color = colors.mintGreen,
  buttonStyle,
  textStyle,
  onPress,
  text
}: Props) => {
  const handlePress = (event: GestureResponderEvent): void => {
    onPress();
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { backgroundColor: color }, buttonStyle]}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  button: {
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
});

export default Button;
