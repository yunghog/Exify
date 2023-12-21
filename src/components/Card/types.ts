import {ViewStyle} from 'react-native';
import {Status} from '../../constants';
import {ExifData, Place} from '../../screens/Home/types';

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

export interface GPSCardProps {
  style?: ViewStyle;
  data: ExifData;
}

export interface AddressCardProps {
  style?: ViewStyle;
  data: Place;
}
