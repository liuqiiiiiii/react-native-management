import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Navigator, { dispatcher, baseURL } from '../helper/navigator';
import Layout from '../res/dimensions';

class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      edit: '注册',
      role: 'student',
      classroom: '',
      userName: '',
      password: '',
    };
  }

  handleSubmit = async () => {
    const dispatch = dispatcher(this.props);

    try {
      let res = await fetch(`${baseURL}/user/register`, {//eslint-disable-line
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          role: this.state.role,
          classroom: this.state.classroom,
          userName: this.state.userName,
          password: this.state.password,
        }),
      });
      const data = await res.json();
      console.log('register: ', data);
      if (data.status === 0) {
        Alert.alert(
          '你输入的信息不正确，请重新输入',
        )
      } else {
        dispatch(Navigator.navigate('Main'));
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.picker}>
          <Picker
            selectedValue={this.state.role}
            onValueChange={lang => this.setState({ role: lang })}
            prompt="选择登录方式"
            mode="dialog"
          >
            <Picker.Item label="学生注册" value="student" />
            <Picker.Item label="教师注册" value="teacher" />
          </Picker>
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>班级</Text>
          </View>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            value={this.state.classroom}
            onChangeText={(classroom) => this.setState({ classroom })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>用户名</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.userName}
            onChangeText={(userName) => this.setState({ userName })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>密码</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.password}
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <View style={styles.edit}>
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.button}
          >
            <Text style={styles.editFont}>注册</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    paddingTop: Layout.Height(80),
  },
  picker: {
    paddingHorizontal: Layout.Width(80),
    marginVertical: Layout.Height(40),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Layout.Height(20),
    paddingHorizontal: Layout.Width(80),
  },
  inputTitle: {
    marginHorizontal: Layout.Width(40),
  },
  inputFont: {
    fontSize: 20,
    color: '#F08080',
  },
  textInput: {
    width: Layout.Width(300),
    fontSize: 20,
  },
  edit: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button :{
    marginTop: Layout.Height(80),
    backgroundColor: 'lightcoral',
    height: Layout.Height(80),
    width: Layout.Width(400),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  editFont: {
    textAlign: 'right',
    fontSize: 17,
    color: 'white',
  },
});


export default PersonalInformation;
