import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

import Navigator, { dispatcher } from '../helper/navigator';
import { createAction } from '../helper';
import Layout from '../res/dimensions';

let dispatch;

export default class Index extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
    this.state = {
      loginMode: 'student',
      className: '计算机专业',
      name: '仝月虹',
      pass: '111111',
    };
  }

  handleSubmit = async () => {
    const dispatch = dispatcher(this.props);
    try {
      let res = await fetch('http://10.0.0.43:8080/user/login', {//eslint-disable-line
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.state.className,
          name: this.state.name,
          pass: this.state.pass,
        }),
      });
      const data = await res.json();
      console.log('data: ', data);
      if (data.status === 0) {
        dispatch(createAction('state/saveClass')(data));
        if (this.state.loginMode === 'student') {
          dispatch(Navigator.navigate('Student'));
        } else {
          dispatch(Navigator.navigate('Teacher'));
        }
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.imagePosition}>
          <Image
            style={styles.imageSize}
            source={{ uri: 'http://pic.qiantucdn.com/58pic/14/85/93/58PIC5558PICVSA_1024.jpg!qt324' }}
          />
        </View>

        <Picker
          selectedValue={this.state.loginMode}
          onValueChange={lang => this.setState({ loginMode: lang })}
          prompt="选择登录方式"
          mode="dialog"
        >
          <Picker.Item label="学生登录" value="student" />
          <Picker.Item label="教师登录" value="teacher" />
        </Picker>

        <Picker
          selectedValue={this.state.className}
          onValueChange={lang => this.setState({ className: lang })}
          prompt="选择所在专业"
          mode="dialog"
        >
          <Picker.Item label="计算机专业" value="计算机专业" />
          <Picker.Item label="电信专业" value="电信专业" />
          <Picker.Item label="软件专业" value="软件专业" />
          <Picker.Item label="通信专业" value="通信专业" />
          <Picker.Item label="网络专业" value="网络专业" />
        </Picker>

        <View>
          <View style={styles.textInput}>
            <Text style={styles.textInputFont}>用户名</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
              value={this.state.name}
              onChangeText={(name) => { this.setState({ name }); }}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.textInputFont}>密码</Text>
            <TextInput
              password
              secureTextEntry
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
              value={this.state.pass}
              onChangeText={(pass) => { this.setState({ pass }); }}
            />
          </View>
        </View>

        <Button
          onPress={this.handleSubmit}
          title="登录"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#F08080",
            height: 45,
            borderColor: "transparent",
            borderRadius: 5,
            marginTop: Layout.Height(60),
          }}
          containerStyle={{ marginTop: 20 }}
        />

        <TouchableOpacity
          style={styles.registered}
          onPress={() => dispatch(Navigator.navigate('Teacher'))}
        >
          <Text style={styles.registeredFont}>没有账号？点击这里注册</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    height: Layout.Height(1000),
    width: Layout.Width(600),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: Layout.Width(80),
  },
  imagePosition: {
    marginVertical: Layout.Height(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    height: Layout.Height(200),
    width: Layout.Width(200),
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Layout.Height(40),
  },
  textInputFont: {
    fontSize: 18,
    color: '#000000',
  },
  textInputStyle: {
    padding: 0,
    width: Layout.Width(300),
    borderBottomWidth: 1,
    borderColor: '#F08080',
  },
  registered: {
    marginVertical: Layout.Height(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  registeredFont: {
    color: '#808080',
  },
});
