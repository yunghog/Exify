import React, {useEffect, useRef, useState} from 'react';
import {Modal, StyleSheet, Animated} from 'react-native';
import {AppFonts} from '../../assets/fonts';
import {COLORS, hexToRGB} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {TextSmall} from '../Typography';
import AlertModalProps from './types';

const AlertModal = (props: AlertModalProps) => {
  const [visible, setVisible] = useState(false);
  const modalAnim = useRef(new Animated.Value(0)).current;
  const modalOpen = () => {
    setVisible(true);
    Animated.timing(modalAnim, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const modalClose = () => {
    Animated.timing(modalAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };
  useEffect(() => {
    if (props.visibility) {
      modalOpen();
      setTimeout(() => {
        modalClose();
      }, 3000);
    } else {
      modalClose();
    }
    return () => {
      modalAnim.setValue(0);
    };
  }, [props.visibility]);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: hexToRGB(props.color, 0.5),
      width: horizontalScale(300),
      borderLeftColor: props.color,
      borderLeftWidth: 5,
      padding: horizontalScale(10),
    },
  });

  return (
    <Modal
      transparent
      visible={visible}
      style={{
        backgroundColor: COLORS.transparent,
      }}>
      <Animated.View
        style={[
          styles.container,
          props.style,
          {
            opacity: modalAnim.interpolate({
              inputRange: [0, 50, 100],
              outputRange: [0, 1, 0],
            }),
            transform: [
              {
                translateX: modalAnim.interpolate({
                  inputRange: [0, 50, 100],
                  outputRange: [
                    horizontalScale(0),
                    horizontalScale(30),
                    horizontalScale(60),
                  ],
                }),
              },
              {translateY: verticalScale(120)},
            ],
          },
        ]}>
        {props.title && (
          <TextSmall
            style={{
              color: COLORS.light,
              fontFamily: AppFonts.lexendBold,
              fontSize: horizontalScale(14),
            }}>
            {props.title}
          </TextSmall>
        )}
        <TextSmall style={{color: COLORS.light, fontSize: horizontalScale(14)}}>
          {props.msg}
        </TextSmall>
      </Animated.View>
    </Modal>
  );
};

export default AlertModal;
