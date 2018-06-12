import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Layout from '../../../res/dimensions';

export default class Scores extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.global}>
        <Image
          style={styles.image}
          source={{ uri: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2472987446,3817427182&fm=27&gp=0.jpg" }}
        />
        <Text style={styles.font}>满分，都是满分</Text>
        <Text style={styles.font}>每位同学都很优秀</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: Layout.Height(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: Layout.Height(300),
    width: Layout.Width(300),
    marginBottom: Layout.Height(100),
  },
  font: {
    fontSize: 30,
    lineHeight: 80,
  },
});
