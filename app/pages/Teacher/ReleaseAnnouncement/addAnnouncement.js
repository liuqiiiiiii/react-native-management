import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { baseURL } from '../../../helper/navigator';

import Layout from '../../../res/dimensions';

class AddAnnouncement extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleSubmit = async () => {
    try {
      console.log(` sb students ${this.props.className}`);
      let res = await fetch(`${baseURL}/message/publish`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          title: this.state.title,
          content: this.state.content,
        }),
      });
      const data = await res.json();
      console.log('发布啊啊啊啊啊啊啊 ', data);
      if (data.status === 0) {
        Alert.alert(
          '发布成功',
        )
      } else {
        Alert.alert(
          '发布失败',
        )
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.global}>
          <TextInput
            style={styles.textInputTitle}
            placeholder="添加标题"
            autoFocus={true}
            value={this.state.title}
            onChangeText={(title) => this.setState({ title })}
          />

          <View style={styles.content}>
            <TextInput
              style={styles.textInputContent}
              placeholder="添加文本内容"
              multiline={true}
              underlineColorAndroid="transparent"
              value={this.state.content}
              onChangeText={(content) => this.setState({ content })}
            />
          </View>

          <Button
            raised
            buttonStyle={{ backgroundColor: '#F4A460'}}
            icon={{name: 'code'}}
            title="发布"
            onPress={this.handleSubmit}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    paddingVertical: Layout.Height(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    paddingHorizontal: Layout.Width(100),
    marginBottom: Layout.Height(20),
  },
  editFont: {
    textAlign: 'right',
    fontSize: 18,
  },
  textInputTitle: {
    width: Layout.Width(300),
    fontSize: 20,
  },
  textInputContent: {
    fontSize: 16,
    padding: 0,
  },
  content: {
    height: Layout.Height(660),
    width: Layout.Width(550),
    marginVertical: Layout.Height(20),
    borderWidth: 1,
    borderColor: '#F4A460',
  },
});

export default connect(({ state }) => ({
  ...state,
}))(AddAnnouncement);
