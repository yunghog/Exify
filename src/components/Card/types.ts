import {ViewStyle} from 'react-native';
import {Status} from '../../constants';

export interface CardShadowProps {
  style?: ViewStyle;
  children: any;
}

export interface UploadCardProps {
  style?: ViewStyle;
  onClose: () => void;
  fileName: string;
  status: Status;
  progress: number;
}
