import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

import Layout from '../../../res/dimensions';

class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      images: null,
      onEdit: false,
      name: '',
      gender: '',
      phone: '',
      office: '',
      edit: '编辑以上信息',
    };
  }

  updateAvatar = () => {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  enableEdit = () => {
    if (this.state.edit === '编辑以上信息') {
      this.setState({
        edit: '完成',
      });
    } else {
      this.setState({
        edit: '编辑以上信息',
      });
    }
    this.setState({
      onEdit: !this.state.onEdit,
    });
  }
  render() {
    return (
      <ScrollView style={styles.global}>

        <View style={styles.avatar}>
          <Avatar
            xlarge
            rounded
            source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528912784804&di=c51fa1594edbf1a4976f90ccbdb309b1&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0df3d7ca7bcb0a46adc067026063f6246b60af2f.jpg" }}
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
            placeholder="点击编辑"
            value={this.state.gender}
            onChangeText={({ gender }) => this.setState({ gender })}
            editable={this.state.onEdit}
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
            placeholder="点击编辑"
            value={this.state.office}
            onChangeText={({ office }) => this.setState({ office })}
            editable={this.state.onEdit}
          />
        </View>

        <View style={styles.edit}>
          <Button
            raised
            buttonStyle={{ backgroundColor: 'lightcoral'}}
            icon={{name: 'code'}}
            title={this.state.edit}
            onPress={this.enableEdit}
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


export default PersonalInformation;
