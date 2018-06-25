import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';

import Form from './Form';
import Layout from '../../../res/dimensions';

let dispatch;

class ScoreEntry extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {};
    dispatch = dispatcher(this.props);
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.top}>
          <Text style={styles.topFont}>成绩录入</Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('AddScore'))}
        >
          <Text style={styles.topButtonFont}>添加</Text>
        </TouchableOpacity>

        <View style={styles.titleBar}>
          <Text style={styles.name}>姓名</Text>
          <Text style={styles.class}>班级</Text>
          <Text style={styles.subject}>科目</Text>
          <Text style={styles.grade}>分数</Text>
        </View>

        {
          this.props.classScore.map((item) => {
            return (
              <Form
                key={`liuqi${item.id}`}
                item={item}
              />
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    paddingHorizontal: Layout.Width(40),
  },
  top: {
    marginTop: Layout.Width(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topFont: {
    fontSize: 24,
  },
  topButtonFont: {
    fontSize: 14,
    textAlign: 'right',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginTop: Layout.Height(40),
    paddingBottom: Layout.Height(20),
  },
  name: {
    color: 'red',
  },
  class: {
    color: 'orange',
  },
  subject: {
    color: 'green',
  },
  grade: {
    color: 'blue',
  },
});

export default connect(({ score }) => ({
  ...score,
}))(ScoreEntry);
