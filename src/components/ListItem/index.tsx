import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppFonts} from '../../assets/fonts';
import {COLORS, hexToRGB} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {TextSmall, TextSub} from '../Typography';
import {ListItemProps, ListTableProps} from './types';

const ListItem = (props: ListItemProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <TextSmall
        style={{
          fontSize: horizontalScale(14),
          fontFamily: AppFonts.lexendBold,
          opacity: 0.5,
        }}>
        {props.label}
      </TextSmall>
      <TextSub style={{fontSize: horizontalScale(18)}}>{props.value}</TextSub>
    </View>
  );
};

export const ListTable = (props: ListTableProps) => {
  const data = props.data.exif;
  return (
    <View style={[styles.container, props.style]}>
      <TextSmall
        style={{
          fontSize: horizontalScale(14),
          fontFamily: AppFonts.lexendBold,
          opacity: 0.5,
        }}>
        {'Image Information'}
      </TextSmall>
      <ItemRow label={'Height'} value={data.ImageLength.description} />
      <ItemRow label={'Width'} value={data.ImageWidth.description} />
      <ItemRow label={'ISO'} value={data.ISOSpeedRatings.description} />
      <ItemRow label={'Shutter'} value={data.ShutterSpeedValue.description} />
      <ItemRow label={'FocalLength'} value={data.FocalLength.description} />
      <ItemRow label={'Aperature'} value={data.ApertureValue.description} />
      <ItemRow label={'Focus'} value={data.FNumber.description} />
      <ItemRow label={'Flash'} value={data.Flash.description} />
      <ItemRow label={'White Balance'} value={data.WhiteBalance.description} />
      <View />
      <TextSmall
        style={{
          fontSize: horizontalScale(14),
          fontFamily: AppFonts.lexendBold,
          opacity: 0.5,
        }}>
        {'Profile'}
      </TextSmall>
      <TextSmall style={{fontSize: horizontalScale(10)}}>
        {JSON.stringify(props.data.icc)}
        {JSON.stringify(props.data.icc)}
        {JSON.stringify(props.data.icc)}
      </TextSmall>
    </View>
  );
};

export const ItemRow = (props: any) => {
  return (
    <View style={styles.tableRow}>
      <TextSmall>{props.label}</TextSmall>
      <TextSmall>{props.value}</TextSmall>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(340),
    padding: horizontalScale(10),
    marginHorizontal: horizontalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: hexToRGB(COLORS.primary, 0.3),
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
