import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Madoka } from 'react-native-textinput-effects';

import Layout from '../../../res/dimensions';

function Information(props) {
  return (
    <View style={styles.input}>
      <View style={styles.category}>
        <Text style={styles.inputFont}>{props.item.category}</Text>
      </View>
      <Madoka
        style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
        label={props.item.content}
        borderColor="#FA8072"
        labelStyle={{ color: '#808080' }}
        inputStyle={{ color: '#f4a197' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Layout.Width(40),
  },
  inputFont: {
    fontSize: 20,
  },
  category: {
    width: Layout.Width(100),
  },
});

export default Information;
