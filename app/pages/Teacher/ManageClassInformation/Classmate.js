import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Layout from '../../../res/dimensions';

function Classmate(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: props.item.avatar }}
      />
      <View style={styles.font}>
        <Text>姓名：{props.item.name}</Text>
        <Text>性别：{props.item.sex}</Text>
        <Text>年龄：{props.item.age}</Text>
        <Text>学号：{props.item.studentid}</Text>
        <Text>手机：{props.item.phone}</Text>
        <Text>地址：{props.item.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Layout.Height(40),
    flexDirection: 'row',
  },
  image: {
    height: Layout.Height(200),
    width: Layout.Width(200),
    borderRadius: 10,
  },
  font: {
    marginLeft: Layout.Width(40),
  },
});

export default Classmate;
