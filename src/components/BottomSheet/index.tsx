import React, {useEffect, useRef} from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';
import {AppFonts} from '../../assets/fonts';
import {COLORS, hexToRGB} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {Button, LinkButton} from '../Button';
import {TextPrimary} from '../Typography';
import BottomSheetProps from './types';

const BottomSheet = (props: BottomSheetProps) => {
  const slideUpAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    closeBottomSheet();
  }, [props.children]);

  const closeBottomSheet = () => {
    Animated.timing(slideUpAnim, {
      toValue: 6,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const openBottomSheet = () => {
    Animated.timing(slideUpAnim, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.bottomSheetContainer,
        {
          top: slideUpAnim.interpolate({
            inputRange: [0, 100],
            outputRange: [verticalScale(640), verticalScale(50)],
          }),
        },
      ]}>
      <Button onPress={() => openBottomSheet()}>
        <View style={styles.thumb} />
      </Button>
      <View style={styles.titleBar}>
        {props.title && (
          <TextPrimary style={styles.title}>{props.title}</TextPrimary>
        )}
        <LinkButton
          name={'x'}
          textStyle={{fontSize: horizontalScale(24)}}
          style={{marginHorizontal: horizontalScale(20)}}
          onPress={() => closeBottomSheet()}
        />
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: verticalScale(50)}}>
        {props.children}
      </ScrollView>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    width: horizontalScale(360),
    backgroundColor: COLORS.white,
    borderTopRightRadius: verticalScale(20),
    borderTopLeftRadius: verticalScale(20),
    shadowColor: hexToRGB(COLORS.dark, 1),
    elevation: 10,
    height: verticalScale(640),
    position: 'absolute',
  },
  thumb: {
    width: horizontalScale(50),
    height: verticalScale(5),
    backgroundColor: hexToRGB(COLORS.dark, 0.3),
    marginTop: verticalScale(10),
    alignSelf: 'center',
  },
  titleBar: {
    width: horizontalScale(360),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: horizontalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  title: {
    fontFamily: AppFonts.lexendBold,
    fontSize: horizontalScale(20),
  },
});
