import {ViewStyle} from 'react-native';

export default interface AlertModalProps {
  title?: string;
  msg: string;
  color: string;
  visibility: boolean;
  style?: ViewStyle;
}
