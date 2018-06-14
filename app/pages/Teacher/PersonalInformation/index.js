import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Alert, 
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux';
import { dispatcher, baseURL } from '../../../helper/navigator';

import Layout from '../../../res/dimensions';

class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);

    dispatch = dispatcher(this.props);
  
    this.state = {
      image: null,
      images: null,
      onEdit: false,
      name: '',
      gender: '',
      phone: '',
      office: '',
      edit: '提交',
      avatar: '"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528912784804&di=c51fa1594edbf1a4976f90ccbdb309b1&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0df3d7ca7bcb0a46adc067026063f6246b60af2f.jpg"',
    };
  }

  management = async () => {
    try {
      let res = await fetch(`${baseURL}/teacher/change`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.state.name,
          gender: this.state.gender,
          phone: this.state.phone,
          office: this.state.office,
        }),
      });
      const data = await res.json();
      console.log('数据啊啊啊啊啊：', data);
      if(data.status === 0 ) {
        Alert.alert(
          '提交成功',
        )
      } else {
        Alert.alert(
          '提交错误',
        )
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  updateAvatar = async () => {
    try {
      const image = await ImagePicker.openCamera({
        cropping: true,
        includeBase64: true,
        width: 500,
        height: 500,
        includeExif: true,
      });
      console.log(`tongyuehong: ${image.data}`);

      if (image.data) {
        let res = await fetch(`${baseURL}/student/upavatar`, {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify({
            name: this.props.loginName,
            avatar: image.data,
          }),
        });
        const data = await res.json();
        console.log('数据啊啊啊啊啊：', data);
        if(data.status === 0 ) {
          Alert.alert(
            '头像更改成功',
          )
          this.setState({
            avatar: data.data
          })
        } else {
          Alert.alert(
            '头像更改失败',
          )
        }
      }
    } catch(e) {
      alert(e)
    }
  }

  render() {
    return (
      <ScrollView style={styles.global}>

        <View style={styles.avatar}>
          <Avatar
            xlarge
            rounded
            source={{ uri: this.state.avatar }}
            onPress={this.updateAvatar}
            activeOpacity={0.7}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>姓名</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="点击编辑"
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
            placeholder="点击编辑"
            value={this.state.gender}
            onChangeText={(gender) => this.setState({ gender })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>手机</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="点击编辑"
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
          />
        </View>

        <View style={styles.input}>
          <View style={styles.inputTitle}>
            <Text style={styles.inputFont}>办公室</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="点击编辑"
            value={this.state.office}
            onChangeText={(office) => this.setState({ office })}
          />
        </View>

        <View style={styles.edit}>
          <Button
            raised
            buttonStyle={{ backgroundColor: 'lightcoral'}}
            icon={{name: 'code'}}
            title={this.state.edit}
            onPress={this.management}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    paddingVertical: Layout.Height(40),
  },
  edit: {
    paddingHorizontal: Layout.Width(100),
    marginBottom: Layout.Height(20),
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
    fontSize: 16,
  },
});


export default connect(({ state }) => ({
  ...state,
}))(PersonalInformation);
