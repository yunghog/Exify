import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, StatusBar} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AppImages from '../../assets/images';
import {
  BottomSheet,
  ListItem,
  ListTable,
  PrimaryButton,
  TextSmall,
  GPSCard,
  Wrapper,
  Button,
  TextPrimary,
  AlertModal,
} from '../../components';
import {UploadCard} from '../../components/Card';
import {Status} from '../../constants';
import {COLORS, hexToRGB} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/scale';
import * as ExifReader from '../../../node_modules/exifreader/src/exif-reader';
import RNFS from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
import {ExifData, Place} from './types';
import {displayDateTime} from '../../utils/helper';
import {GeoCodinngService} from '../../services/geoCoding.service';
import AddressCard from '../../components/Card/AddressCard';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const [image, setImage] = useState<any>();
  const [status, setStatus] = useState<Status>(Status.UPLOADING);
  const [place, setPlace] = useState<Place>();
  const [exifData, setExifData] = useState<ExifData>();
  const [modalVisible, setModalVisible] = useState(false);
  const img = useRef(null).current;

  const selectImage = async () => {
    launchImageLibrary({mediaType: 'mixed', includeExtra: true}, res => {
      if (res.didCancel) {
        setImage({fileName: 'Unable to upload'});
        setStatus(Status.FAILED);
        setExifData(undefined);
      } else {
        if (
          res !== undefined &&
          res.assets !== undefined &&
          res.assets.length > 0
        ) {
          setImage(res.assets[0]);
          setStatus(Status.DONE);
        }
      }
    });
  };

  const fetchExif = async (uri: string) => {
    const b64Buffer = await RNFS.readFile(uri, 'base64');
    const fileBuffer = decode(b64Buffer);
    const tags = ExifReader.load(fileBuffer, {
      expanded: true,
      includeUnknown: true,
    });
    if (tags.exif) {
      setExifData(tags);
      setModalVisible(false);
    } else {
      setModalVisible(true);
      setExifData(undefined);
    }
  };

  useEffect(() => {
    if (image && image.uri !== null) {
      fetchExif(image.uri);
    }
  }, [image]);

  useEffect(() => {
    if (exifData?.gps) {
      const latlng = exifData.gps.Latitude + ',' + exifData.gps.Longitude;
      GeoCodinngService.getPlace(latlng).then(res => {
        setPlace(res.data[0]);
      });
    }
  }, [exifData]);

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle={'light-content'} />
      <Wrapper
        childStyle={styles.uploadContainer}
        image={image ? image : AppImages.hero1}>
        {status !== Status.DONE && (
          <>
            <TextSmall style={{textAlign: 'center', color: COLORS.light}}>
              Browse an image and upload to get the meta data of the image
            </TextSmall>
            <Button style={styles.button} onPress={() => selectImage()}>
              <TextPrimary>Browse Image</TextPrimary>
            </Button>
          </>
        )}
        {image && (
          <UploadCard
            fileName={'Your Image'}
            status={status}
            progress={320}
            onClose={() => {
              setImage(null),
                setStatus(Status.UPLOADING),
                setModalVisible(false);
              setExifData(undefined);
            }}
          />
        )}
      </Wrapper>
      {exifData && exifData.exif && (
        <BottomSheet title="EXIF Information">
          <ListItem
            label={'Date/Time'}
            value={displayDateTime(exifData.exif.DateTime?.description)}
          />
          <ListItem
            label={'Make and Model'}
            value={
              exifData.exif.Make?.description +
              ' ' +
              exifData.exif.Model?.description
            }
          />
          <ListTable data={exifData} />
          <GPSCard data={exifData} />
          {place && <AddressCard data={place} />}
        </BottomSheet>
      )}
      <AlertModal
        color={COLORS.primary}
        title="No EXIF"
        msg="Your image do not contain EXIF data."
        visibility={modalVisible}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(640),
  },
  uploadContainer: {
    padding: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: horizontalScale(320),
    resizeMode: 'cover',
    height: verticalScale(200),
  },
  button: {
    marginVertical: verticalScale(10),
    padding: horizontalScale(10),
    backgroundColor: COLORS.light,
  },
});

export default Home;
