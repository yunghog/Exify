import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppImages from '../../assets/images';
import {TextSmall} from '../../components';
import {COLORS, hexToRGB} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/scale';
const ComponentTesting = () => {
  return (
    <SafeAreaView
      style={{
        height: verticalScale(640),
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          height: verticalScale(320),
          backgroundColor: COLORS.tertiary,
          overflow: 'hidden',
        }}>
        <Image
          source={AppImages.hero1}
          style={{
            width: horizontalScale(360),
            resizeMode: 'cover',
            height: verticalScale(320),
            borderBottomRightRadius: horizontalScale(100),
          }}
        />
      </View>
      <LinearGradient
        colors={[COLORS.primary, COLORS.tertiary]}
        useAngle
        style={{
          height: verticalScale(320),
          overflow: 'hidden',
          backgroundColor: COLORS.light,
          borderTopLeftRadius: horizontalScale(100),
        }}>
        <TextSmall>Hello</TextSmall>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ComponentTesting;
