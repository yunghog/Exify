import {HttpMethods} from '../constants';
import {apiConfig, NetworkManager} from '../network';

export class GeoCodinngService {
  static getPlace = (latlng: string) => {
    return NetworkManager.getInstance().appRequest({
      method: HttpMethods.GET,
      url: apiConfig.baseUrl,
      params: {
        query: latlng,
      },
    });
  };
}
