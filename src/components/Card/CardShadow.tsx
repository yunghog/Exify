import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {horizontalScale} from '../../utils/scale';
import {CardShadowProps} from './types';

const CardShadow = (props: CardShadowProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default CardShadow;

const styles = StyleSheet.create({
  container: {
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
});
