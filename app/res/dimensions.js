import { Dimensions } from 'react-native';

const _width = 600;
const _height = 1000;

const layout = {
  ScreenWidth: Dimensions.get('window').width,
  ScreenHeight: Dimensions.get('window').height,

  Width: (x) => {
    return x * Dimensions.get('window').width / _width; // eslint-disable-line
  },
  Height: (y) => {
    return y * Dimensions.get('window').height / _height; // eslint-disable-line
  },
};

export default layout;
