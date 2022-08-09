export interface ImageType {
  fileName: string;
  fileSize: number;
  height: number;
  id: string;
  timestamp: Date;
  type: string;
  uri: string;
  width: number;
}

export interface ApertureValue {
  description: string;
  id: number;
  value: any[];
}

export interface DateTime {
  description: string;
  id: number;
  value: any[];
}

export interface DateTimeDigitized {
  description: string;
  id: number;
  value: any[];
}

export interface DateTimeOriginal {
  description: string;
  id: number;
  value: any[];
}

export interface ExifIFDPointer {
  description: number;
  id: number;
  value: number;
}

export interface ExifVersion {
  description: string;
  id: number;
  value: any[];
}

export interface ExposureTime {
  description: string;
  id: number;
  value: any[];
}

export interface FNumber {
  description: string;
  id: number;
  value: any[];
}

export interface Flash {
  description: string;
  id: number;
  value: number;
}

export interface FocalLength {
  description: string;
  id: number;
  value: any[];
}

export interface GPSInfoIFDPointer {
  description: number;
  id: number;
  value: number;
}

export interface GPSDateStamp {
  description: string;
  id: number;
  value: any[];
}

export interface GPSLatitude {
  description: number;
  id: number;
  value: any[];
}

export interface GPSLatitudeRef {
  description: string;
  id: number;
  value: any[];
}

export interface GPSLongitude {
  description: number;
  id: number;
  value: any[];
}

export interface GPSLongitudeRef {
  description: string;
  id: number;
  value: any[];
}

export interface GPSTimeStamp {
  description: string;
  id: number;
  value: any[];
}

export interface ISOSpeedRatings {
  description: number;
  id: number;
  value: number;
}

export interface ImageLength {
  description: number;
  id: number;
  value: number;
}

export interface ImageWidth {
  description: number;
  id: number;
  value: number;
}

export interface Make {
  description: string;
  id: number;
  value: any[];
}

export interface Model {
  description: string;
  id: number;
  value: any[];
}

export interface Orientation {
  description: string;
  id: number;
  value: number;
}

export interface PixelXDimension {
  description: number;
  id: number;
  value: number;
}

export interface PixelYDimension {
  description: number;
  id: number;
  value: number;
}

export interface ShutterSpeedValue {
  description: string;
  id: number;
  value: any[];
}

export interface SubSecTime {
  description: string;
  id: number;
  value: any[];
}

export interface SubSecTimeDigitized {
  description: string;
  id: number;
  value: any[];
}

export interface SubSecTimeOriginal {
  description: string;
  id: number;
  value: any[];
}

export interface WhiteBalance {
  description: string;
  id: number;
  value: number;
}

export interface Exif {
  ApertureValue: ApertureValue;
  DateTime: DateTime;
  DateTimeDigitized: DateTimeDigitized;
  DateTimeOriginal: DateTimeOriginal;
  ExifIFDPointer: ExifIFDPointer;
  ExifVersion: ExifVersion;
  ExposureTime: ExposureTime;
  FNumber: FNumber;
  Flash: Flash;
  FocalLength: FocalLength;
  GPSInfoIFDPointer: GPSInfoIFDPointer;
  GPSDateStamp: GPSDateStamp;
  GPSLatitude: GPSLatitude;
  GPSLatitudeRef: GPSLatitudeRef;
  GPSLongitude: GPSLongitude;
  GPSLongitudeRef: GPSLongitudeRef;
  GPSTimeStamp: GPSTimeStamp;
  ISOSpeedRatings: ISOSpeedRatings;
  ImageLength: ImageLength;
  ImageWidth: ImageWidth;
  Make: Make;
  Model: Model;
  Orientation: Orientation;
  PixelXDimension: PixelXDimension;
  PixelYDimension: PixelYDimension;
  ShutterSpeedValue: ShutterSpeedValue;
  SubSecTime: SubSecTime;
  SubSecTimeDigitized: SubSecTimeDigitized;
  SubSecTimeOriginal: SubSecTimeOriginal;
  WhiteBalance: WhiteBalance;
}

export interface BitsPerSample {
  description: string;
  value: number;
}

export interface ColorComponents {
  description: string;
  value: number;
}

export interface ImageHeight {
  description: string;
  value: number;
}

export interface ImageWidth2 {
  description: string;
  value: number;
}

export interface Subsampling {
  description: string;
  value: any[];
}

export interface File {
  BitsPerSample: BitsPerSample;
  ColorComponents: ColorComponents;
  ImageHeight: ImageHeight;
  ImageWidth: ImageWidth2;
  Subsampling: Subsampling;
}

export interface Gps {
  Latitude: number;
  Longitude: number;
}

export interface ColorSpace {
  description: string;
  value: string;
}

export interface ConnectionSpace {
  description: string;
  value: string;
}

export interface DeviceManufacturer {
  description: string;
  value: string;
}

export interface DeviceModelNumber {
  description: string;
  value: string;
}

export interface ICCCopyright {
  description: string;
  value: string;
}

export interface ICCDescription {
  description: string;
  value: string;
}

export interface ICCProfileDate {
  description: Date;
  value: Date;
}

export interface ICCSignature {
  description: string;
  value: string;
}

export interface PreferredCMMType {
  description: string;
  value: string;
}

export interface PrimaryPlatform {
  description: string;
  value: string;
}

export interface ProfileCreator {
  description: string;
  value: string;
}

export interface ProfileVersion {
  description: string;
  value: string;
}

export interface ProfileDeviceClass {
  description: string;
  value: string;
}

export interface RenderingIntent {
  description: string;
  value: number;
}

export interface Icc {
  ColorSpace: ColorSpace;
  ConnectionSpace: ConnectionSpace;
  DeviceManufacturer: DeviceManufacturer;
  DeviceModelNumber: DeviceModelNumber;
  ICCCopyright: ICCCopyright;
  ICCDescription: ICCDescription;
  ICCProfileDate: ICCProfileDate;
  ICCSignature: ICCSignature;
  PreferredCMMtype: PreferredCMMType;
  PrimaryPlatform: PrimaryPlatform;
  ProfileCreator: ProfileCreator;
  ProfileVersion: ProfileVersion;
  ProfileDeviceclass: ProfileDeviceClass;
  RenderingIntent: RenderingIntent;
}

export interface JFIFThumbnailHeight {
  description: string;
  value: number;
}

export interface JFIFThumbnailWidth {
  description: string;
  value: number;
}

export interface JFIFVersion {
  description: string;
  value: number;
}

export interface ResolutionUnit {
  description: string;
  value: number;
}

export interface XResolution {
  description: string;
  value: number;
}

export interface YResolution {
  description: string;
  value: number;
}

export interface Jfif {
  JFIFThumbnailHeight: JFIFThumbnailHeight;
  JFIFThumbnailWidth: JFIFThumbnailWidth;
  JFIFVersion: JFIFVersion;
  ResolutionUnit: ResolutionUnit;
  XResolution: XResolution;
  YResolution: YResolution;
}

export interface ExifData {
  exif: Exif;
  file: File;
  gps: Gps;
  icc: Icc;
  jfif: Jfif;
}

export interface Place {
  latitude: number;
  longitude: number;
  type: string;
  distance: number;
  name: string;
  number?: any;
  postal_code: string;
  street?: any;
  confidence: number;
  region: string;
  region_code: string;
  county: string;
  locality: string;
  administrative_area?: any;
  neighbourhood?: any;
  country: string;
  country_code: string;
  continent: string;
  label: string;
}
