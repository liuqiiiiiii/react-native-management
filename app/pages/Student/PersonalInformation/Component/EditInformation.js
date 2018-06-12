import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

import Information from './Information';
import Layout from '../../../res/dimensions';

class PersonalInformation extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.edit}>
          <Text style={styles.editFont}>编辑</Text>
        </View>
        <View style={styles.avatar}>
          <Avatar
            xlarge
            rounded
            source={{ uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1816149448,27813852&fm=27&gp=0.jpg" }}
            onPress={() => {}}
            activeOpacity={0.7}
          />
        </View>
        <View style={{ marginBottom: 100 }}>
          {
            this.props.studentInformation.map((item) => {
              return (
                <Information
                  key={item.id}
                  item={item}
                />
              );
            })
          }
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
    marginLeft: Layout.Width(40),
  },
  inputFont: {
    fontSize: 20,
  },
});


export default connect(({ personalInformation }) => ({
  ...personalInformation,
}))(PersonalInformation);
