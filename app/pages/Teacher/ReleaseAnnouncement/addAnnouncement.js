import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';

import Layout from '../../../res/dimensions';

class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      edit: '发布公告',
      onEdit: true,
      title: '',
      content: '',
    };
  }

  enableEdit = () => {
    if (this.state.edit === '发布公告') {
      this.setState({
        edit: '发布公告',
      });
    } else {
      this.setState({
        edit: '再次编辑',
      });
    }
    this.setState({
      onEdit: !this.state.onEdit,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.global}>
          <TextInput
            style={styles.textInputTitle}
            placeholder="添加标题"
            autoFocus={true}
            value={this.state.name}
            onChangeText={({ name }) => this.setState({ name })}
            editable={this.state.onEdit}
          />

          <View style={styles.content}>
            <TextInput
              style={styles.textInputContent}
              placeholder="添加文本内容"
              multiline={true}
              underlineColorAndroid="transparent"
              value={this.state.name}
              onChangeText={({ name }) => this.setState({ name })}
              editable={this.state.onEdit}
            />
          </View>

          <Button
            raised
            buttonStyle={{ backgroundColor: '#F4A460'}}
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


export default PersonalInformation;
