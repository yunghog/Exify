import React from 'react';
import {View, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scale';
import {TextSmall} from '../Typography';
import {GPSCardProps} from './types';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {AppFonts} from '../../assets/fonts';
import {ItemRow} from '../ListItem';

const GPSCard = (props: GPSCardProps) => {
  const location = props.data.gps;
  const exif = props.data.exif;
  return (
    <View style={[styles.container, props.style]}>
      <TextSmall
        style={{
          fontSize: horizontalScale(14),
          fontFamily: AppFonts.lexendBold,
          opacity: 0.5,
        }}>
        GPS Details
      </TextSmall>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: location.Latitude,
          longitude: location.Longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 1.2,
        }}
        showsUserLocation
        provider={PROVIDER_GOOGLE}>
        <Marker
          coordinate={{
            latitude: location.Latitude,
            longitude: location.Longitude,
          }}
        />
      </MapView>
      <ItemRow
        label={'Latitude'}
        value={exif.GPSLatitude.description.toFixed(2)}
      />
      <ItemRow
        label={'Longitude'}
        value={exif.GPSLongitude.description.toFixed(2)}
      />
      <ItemRow label={'Co-ordinates'} value={''} />
      <TextSmall style={{fontSize: horizontalScale(13)}}>
        {JSON.stringify(location)}
      </TextSmall>
    </View>
  );
};

export default GPSCard;

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(340),
    padding: horizontalScale(10),
    marginHorizontal: horizontalScale(10),
  },
  mapStyle: {
    height: verticalScale(300),
    width: horizontalScale(320),
    marginVertical: verticalScale(20),
  },
});
