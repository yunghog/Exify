import {ImageSourcePropType, ViewStyle} from 'react-native';

export default interface WrapperProps {
  children: any;
  childStyle?: ViewStyle;
  image: ImageSourcePropType;
}
