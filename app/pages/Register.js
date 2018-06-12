import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Madoka } from 'react-native-textinput-effects';

import Layout from '../res/dimensions';

export default class Register extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.global}>
        <View style={styles.input}>
          <Text style={styles.inputFont}>班级</Text>
          <Madoka
            style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
            borderColor="#FA8072"
            labelStyle={{ color: '#808080' }}
            inputStyle={{ color: '#f4a197' }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputFont}>用户名</Text>
          <Madoka
            style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
            borderColor="#FA8072"
            labelStyle={{ color: '#808080' }}
            inputStyle={{ color: '#f4a197' }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputFont}>密码</Text>
          <Madoka
            style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
            // this is used as active and passive border color
            borderColor="#FA8072"
            labelStyle={{ color: '#808080' }}
            inputStyle={{ color: '#f4a197' }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputFont}>确认密码</Text>
          <Madoka
            style={{ width: Layout.Width(300), marginLeft: Layout.Width(40) }}
            // this is used as active and passive border color
            borderColor="#FA8072"
            labelStyle={{ color: '#808080' }}
            inputStyle={{ color: '#f4a197' }}
          />
        </View>
        <View style={styles.buttonPosition}>
          <Button
            title="注册"
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "#F4A460",
              height: 45,
              borderColor: "transparent",
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginTop: Layout.Height(60),
  },
  personal: {
    marginBottom: Layout.Height(10),
    paddingTop: Layout.Height(60),
  },
  editor: {
    marginTop: Layout.Height(20),
    marginRight: Layout.Width(20),
  },
  avatar: {
    alignItems: 'center',
    marginBottom: Layout.Height(20),
  },
  name: {
    marginTop: Layout.Height(20),
  },
  nameStyle: {
    fontSize: 20,
    color: '#808080', //gray
  },
  input: {
    paddingHorizontal: Layout.Width(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: Layout.Width(40),
  },
  inputFont: {
    fontSize: 20,
  },
  buttonPosition: {
    marginTop: Layout.Height(80),
  },
});
