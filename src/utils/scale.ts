import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
//Guideline sizes are based on the designs for htc one mobile device
//htc one Resolution: 360 x 640 dp.
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
