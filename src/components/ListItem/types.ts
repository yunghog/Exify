import {ViewStyle} from 'react-native';
import {ExifData} from '../../screens/Home/types';

export interface ListItemProps {
  label: string;
  value: string | number | any;
  style?: ViewStyle;
}

export interface ListTableProps {
  data: ExifData;
  style?: ViewStyle;
}
