import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  ScrollView,
  Modal,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AppImages from '../../assets/images';
import {
  BottomSheet,
  ListItem,
  ListTable,
  PrimaryButton,
  TextLarge,
  TextSmall,
} from '../../components';
import {UploadCard} from '../../components/Card';
import {Status} from '../../constants';
import {COLORS, hexToRGB} from '../../constants/colors';
import {horizontalScale, verticalScale} from '../../utils/scale';
import * as ExifReader from '../../../node_modules/exifreader/src/exif-reader';
import RNFS from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
import {ExifData} from './types';
import {displayDateTime} from '../../utils/helper';

const Home = () => {
  const [image, setImage] = useState<any>();
  const [status, setStatus] = useState<Status>(Status.UPLOADING);
  const [exifData, setExifData] = useState<ExifData>();
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
    // console.log(tags);

    setExifData(tags);
  };

  useEffect(() => {
    if (image && image.uri !== null) {
      fetchExif(image.uri);
    }
  }, [image]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.uploadContainer}>
          {status !== Status.DONE && (
            <View style={styles.uploadBtnCard}>
              <TextSmall style={{textAlign: 'center'}}>
                Browse the image and upload to get the EXIF data for the image
              </TextSmall>
              <Image source={AppImages.imageIcon} style={styles.imgIcon} />
              <PrimaryButton
                style={{marginVertical: verticalScale(10)}}
                name="Browse Image"
                onPress={() => selectImage()}
              />
            </View>
          )}
          {status === Status.DONE && (
            <Image ref={img} source={{uri: image.uri}} style={styles.image} />
          )}
          {image && (
            <UploadCard
              fileName={'Your Image'}
              status={status}
              progress={320}
              onClose={() => {
                setImage(null),
                  setStatus(Status.UPLOADING),
                  setExifData(undefined);
              }}
            />
          )}
        </View>
      </View>
      {exifData && (
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
        </BottomSheet>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    height: verticalScale(640),
  },
  uploadContainer: {
    width: horizontalScale(340),
    padding: horizontalScale(10),
    borderRadius: horizontalScale(10),
    backgroundColor: COLORS.white,
    textAlign: 'center',
  },
  uploadBtnCard: {
    padding: horizontalScale(10),
    textAlign: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: hexToRGB(COLORS.primary, 0.5),
  },
  imgIcon: {
    width: horizontalScale(100),
    resizeMode: 'contain',
    tintColor: COLORS.primary,
    alignSelf: 'center',
  },
  image: {
    width: horizontalScale(320),
    resizeMode: 'cover',
    height: verticalScale(200),
  },
});

export default Home;
