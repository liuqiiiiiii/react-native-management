import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';

import Layout from '../../../res/dimensions';

class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      edit: '编辑',
      onEdit: false,
      name: '刘琦',
      gender: '男',
      QQ: '982252163',
      wechat: 'liuqi982252163',
      phone: '18331295996',
      address: '一校区单身楼613',
    };
  }
  enableEdit = () => {
    if (this.state.edit === '编辑') {
      this.setState({
        edit: '完成',
      });
    } else {
      this.setState({
        edit: '编辑',
      });
    }
    this.setState({
      onEdit: !this.state.onEdit,
    });
  }
  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.edit}>
          <TouchableOpacity
            onPress={this.enableEdit}
          >
            <Text style={styles.editFont}>{this.state.edit}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.avatar}>
          <Avatar
            xlarge
            rounded
            source={{ uri: "https://avatars0.githubusercontent.com/u/32216634?s=460&v=4" }}
            onPress={() => {}}
            activeOpacity={0.7}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>姓名</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.name}
            onChangeText={({ name }) => this.setState({ name })}
            editable={this.state.onEdit}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>性别</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.gender}
            onChangeText={({ gender }) => this.setState({ gender })}
            editable={this.state.onEdit}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>QQ</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.QQ}
            onChangeText={({ QQ }) => this.setState({ QQ })}
            editable={this.state.onEdit}
          />
        </View>
        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>微信</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.wechat}
            onChangeText={({ wechat }) => this.setState({ wechat })}
            editable={this.state.onEdit}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>手机</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.phone}
            onChangeText={({ phone }) => this.setState({ phone })}
            editable={this.state.onEdit}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>办公室</Text>
          </View>
          <TextInput
            style={styles.textInput}
            value={this.state.address}
            onChangeText={({ address }) => this.setState({ address })}
            editable={this.state.onEdit}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    paddingTop: Layout.Height(40),
  },
  edit: {
    marginRight: Layout.Width(40),
  },
  editFont: {
    textAlign: 'right',
    fontSize: 18,
  },
  avatar: {
    alignItems: 'center',
    marginBottom: Layout.Height(20),
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Layout.Height(20),
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
});


export default PersonalInformation;
