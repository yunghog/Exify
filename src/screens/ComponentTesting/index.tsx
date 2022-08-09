import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  CardShadow,
  LinkButton,
  PrimaryButton,
  PrimaryButtonOutline,
  TextDark,
  TextLarge,
  TextLight,
  TextPrimary,
  TextSmall,
  TextSub,
} from '../../components';
import {UploadCard} from '../../components/Card';
import {Status} from '../../constants';
import {horizontalScale, verticalScale} from '../../utils/scale';
const ComponentTesting = () => {
  const [status, setStatus] = useState(Status.UPLOADING);
  const [progress, setProgress] = useState(0);
  return (
    <SafeAreaView
      style={{
        height: verticalScale(640),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CardShadow>
        <TextSmall>Helllo worlddddd</TextSmall>
        <TextSub>Helllo worlddddd</TextSub>
        <TextLarge>Helllo worlddddd</TextLarge>
        <TextPrimary>Helllo worlddddd</TextPrimary>
        <TextLight>Helllo worlddddd</TextLight>
        <TextDark>Helllo worlddddd</TextDark>
      </CardShadow>
      <UploadCard
        progress={progress}
        style={{margin: horizontalScale(10)}}
        fileName="Filename.jpg"
        status={status}
      />
    </SafeAreaView>
  );
};

export default ComponentTesting;
