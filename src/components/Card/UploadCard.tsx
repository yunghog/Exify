import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {Status} from '../../constants';
import {COLORS, hexToRGB} from '../../constants/colors';
import {horizontalScale} from '../../utils/scale';
import {LinkButton} from '../Button';
import {TextPrimary, TextSmall} from '../Typography';
import {UploadCardProps} from './types';

const UploadCard = ({
  style,
  onClose,
  fileName,
  status,
  progress,
}: UploadCardProps) => {
  const progAnim = useRef(new Animated.Value(0)).current;
  const renderStatus = (status: Status) => {
    switch (status) {
      case Status.UPLOADING:
        return <TextSmall>Uploading Image...</TextSmall>;
      case Status.DONE:
        return (
          <TextSmall style={{color: COLORS.success}}>Uploaded! </TextSmall>
        );
      case Status.FAILED:
        return <TextSmall style={{color: COLORS.danger}}>Failed! </TextSmall>;
      default:
        return null;
    }
  };

  useEffect(() => {
    Animated.timing(progAnim, {
      toValue: horizontalScale(progress),
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.info}>
        {renderStatus(status)}
        <TextPrimary style={styles.fileName}>{fileName}</TextPrimary>
        <Animated.View style={[styles.progressBar, {width: progAnim}]}>
          <Text>.</Text>
        </Animated.View>
      </View>
      <LinkButton style={styles.cancelBtn} name="X" onPress={onClose} />
    </View>
  );
};

export default UploadCard;

const styles = StyleSheet.create({
  container: {
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: horizontalScale(320),
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    color: COLORS.transparent,
    opacity: 0.1,
    width: horizontalScale(10),
    top: horizontalScale(-10),
    left: horizontalScale(-10),
    zIndex: -1,
    height: '140%',
  },
  info: {
    flex: 6,
    borderRightWidth: 1,
    borderRightColor: hexToRGB(COLORS.dark, 0.5),
    paddingRight: horizontalScale(10),
  },
  statusText: {
    color: hexToRGB(COLORS.dark, 0.5),
  },
  fileName: {
    fontSize: horizontalScale(20),
  },
  cancelBtn: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
