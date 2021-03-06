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
import { connect } from 'react-redux';

import Navigator, { dispatcher, baseURL } from '../../../helper/navigator';
import Layout from '../../../res/dimensions';

class ModifyInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sex: '',
      age: '',
      studentid: '',
      phone: '',
      address: '',
      duty: '',
    };
  }

  handleSubmit = async () => {
    const dispatch = dispatcher(this.props);

    try {
      let res = await fetch(`${baseURL}/student/add`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.state.name,
          sex: this.state.sex,
          age: this.state.age,
          studentid: this.state.studentid,
          phone: this.state.phone,
          address: this.state.address,
          duty: this.state.duty,
        }),
      });
      const data = await res.json();
      if (data.status === 0) {
        Alert.alert(
          '输入正确，添加成功',
        )
      } else {
        Alert.alert(
          '你输入的信息不正确，请重新输入',
        )
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>姓名</Text>
          </View>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>性别</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.sex}
            onChangeText={(sex) => this.setState({ sex })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>年龄</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.age}
            onChangeText={(age) => this.setState({ age })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>学号</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.studentid}
            onChangeText={(studentid) => this.setState({ studentid })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>手机</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>地址</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.address}
            onChangeText={(address) => this.setState({ address })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>职务</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.duty}
            onChangeText={(duty) => this.setState({ duty })}
          />
        </View>

        <View style={styles.edit}>
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={styles.button}
          >
            <Text style={styles.editFont}>确认</Text>
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

export default connect(({ state }) => ({
  ...state,
}))(ModifyInformation);
