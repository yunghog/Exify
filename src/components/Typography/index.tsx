import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {AppFonts} from '../../assets/fonts';
import {COLORS} from '../../constants/colors';
import {horizontalScale} from '../../utils/scale';
import TypographyProps from './types';

const TextPrimary = (props: TypographyProps) => {
  return (
    <Text style={[styles.primary, props.style]} numberOfLines={props.lines}>
      {props.children}
    </Text>
  );
};

const TextDark = (props: TypographyProps) => {
  return (
    <Text style={[styles.dark, props.style]} numberOfLines={props.lines}>
      {props.children}
    </Text>
  );
};

const TextLight = (props: TypographyProps) => {
  return (
    <Text style={[styles.light, props.style]} numberOfLines={props.lines}>
      {props.children}
    </Text>
  );
};

const TextLarge = (props: TypographyProps) => {
  return (
    <Text style={[styles.large, props.style]} numberOfLines={props.lines}>
      {props.children}
    </Text>
  );
};

const TextSmall = (props: TypographyProps) => {
  return (
    <Text style={[styles.small, props.style]} numberOfLines={props.lines}>
      {props.children}
    </Text>
  );
};

const TextSub = (props: TypographyProps) => {
  return (
    <Text style={[styles.sub, props.style]} numberOfLines={props.lines}>
      {props.children}
    </Text>
  );
};

export {TextLarge, TextPrimary, TextSmall, TextSub, TextDark, TextLight};

const styles = StyleSheet.create({
  primary: {
    color: COLORS.primary,
    fontSize: horizontalScale(16),
    fontFamily: AppFonts.Lexend,
  },
  secondary: {
    color: COLORS.secondary,
    fontSize: horizontalScale(16),
    fontFamily: AppFonts.Lexend,
  },
  light: {
    color: COLORS.light,
    fontSize: horizontalScale(16),
    fontFamily: AppFonts.Lexend,
  },
  dark: {
    color: COLORS.dark,
    fontSize: horizontalScale(16),
    fontFamily: AppFonts.Lexend,
  },
  large: {
    fontSize: horizontalScale(24),
    fontFamily: AppFonts.Lexend,
    color: COLORS.dark,
  },
  small: {
    fontSize: horizontalScale(16),
    color: COLORS.dark,
    fontFamily: AppFonts.Lexend,
  },
  sub: {
    fontFamily: AppFonts.Lexend,
    fontSize: horizontalScale(20),
    color: COLORS.dark,
  },
});
