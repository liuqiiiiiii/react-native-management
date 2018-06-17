import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Layout from '../../../res/dimensions';

function Form(props) {
  return (
    <View style={styles.global}>
      <Text style={styles.name}>{props.item.name}</Text>
      <Text style={styles.class}>{props.item.class}</Text>
      <Text style={styles.subject}>{props.item.subject}</Text>
      <Text style={styles.grade}>{props.item.grade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: Layout.Height(10),
  },
  name: {
    color: 'red',
  },
  class: {
    color: 'orange',
  },
  subject: {
    color: 'green',
  },
  grade: {
    color: 'blue',
  },
});

export default Form;
