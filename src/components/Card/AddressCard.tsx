import React from 'react';
import {View, StyleSheet} from 'react-native';
import {horizontalScale} from '../../utils/scale';
import ListItem from '../ListItem';
import {AddressCardProps} from './types';

const AddressCard = (props: AddressCardProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <ListItem label="Place" value={props.data.name} />
      <ListItem label="Short Address" value={props.data.label} />
      <ListItem label="Neighborhood" value={props.data.neighbourhood} />
      <ListItem label="Street" value={props.data.street} />
      <ListItem label="Postal Code" value={props.data.postal_code} />
      <ListItem label="Locality" value={props.data.locality} />
      <ListItem label="District" value={props.data.county} />
      <ListItem
        label="State"
        value={props.data.region + ', ' + props.data.region_code}
      />
      <ListItem
        label="Country"
        value={props.data.country + ', ' + props.data.country_code}
      />
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(360),
  },
});
