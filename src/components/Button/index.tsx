import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/colors';
import {horizontalScale} from '../../utils/scale';
import ButtonPropsType, {ButtonPropsTypeB} from './types';

const PrimaryButton = (props: ButtonPropsType) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.primary, props.style]}
      onPress={props.onPress}>
      <Text style={[styles.text, styles.lightText, props.textStyle]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const Button = (props: ButtonPropsTypeB) => {
  return (
    <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

const PrimaryButtonOutline = (props: ButtonPropsType) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.primaryOutline, props.style]}
      onPress={props.onPress}
      disabled={props.disabled || false}>
      <Text style={[styles.text, styles.primaryText, props.textStyle]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const LinkButton = (props: ButtonPropsType) => {
  return (
    <TouchableOpacity
      style={[styles.btn, props.style]}
      onPress={props.onPress}
      disabled={props.disabled || false}>
      <Text style={[styles.text, props.textStyle]}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export {PrimaryButton, PrimaryButtonOutline, LinkButton, Button};

const styles = StyleSheet.create({
  btn: {
    padding: horizontalScale(6),
    borderRadius: horizontalScale(5),
    borderWidth: horizontalScale(2),
    borderColor: COLORS.transparent,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  primary: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  lightText: {
    color: COLORS.light,
  },
  primaryOutline: {
    borderColor: COLORS.primary,
  },
  primaryText: {
    color: COLORS.primary,
  },
});
