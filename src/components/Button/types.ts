import {TextStyle, ViewStyle} from 'react-native';

export default interface ButtonPropsType {
  name: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface ButtonPropsTypeB {
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  children: any;
}
