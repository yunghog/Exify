import React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/scale';
import WrapperProps from './types';

const Wrapper = (props: WrapperProps) => {
  return (
    <>
      <View
        style={{
          height: verticalScale(280),
          backgroundColor: COLORS.tertiary,
          overflow: 'hidden',
        }}>
        <Image
          source={props.image}
          style={{
            width: horizontalScale(360),
            resizeMode: 'cover',
            height: verticalScale(280),
            borderBottomRightRadius: horizontalScale(50),
          }}
        />
      </View>
      <LinearGradient
        colors={[COLORS.primary, COLORS.tertiary]}
        useAngle
        style={[
          {
            height: verticalScale(360),
            overflow: 'hidden',
            backgroundColor: COLORS.light,
          },
          props.childStyle,
        ]}>
        {props.children}
      </LinearGradient>
    </>
  );
};

export default Wrapper;
