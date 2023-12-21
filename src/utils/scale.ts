import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
export {
  guidelineBaseHeight,
  guidelineBaseWidth,
  horizontalScale,
  verticalScale,
  moderateScale,
};
