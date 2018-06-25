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

import { dispatcher, baseURL } from '../../../helper/navigator';
import Layout from '../../../res/dimensions';

class AddSorce extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      classroom: '',
      subject: '',
      grade: '',
    };
  }

  handleSubmit = async () => {
    try {
      let res = await fetch(`${baseURL}/grade/add`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.state.name,
          classroom: this.state.classroom,
          subject: this.state.subject,
          grade: this.state.grade,
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
            <Text style={styles.inputFont}>班级</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.classroom}
            onChangeText={(classroom) => this.setState({ classroom })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>科目</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.subject}
            onChangeText={(subject) => this.setState({ subject })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>分数</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.grade}
            onChangeText={(grade) => this.setState({ grade })}
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
}))(AddSorce);
