import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import Form from './Form';
import Layout from '../../../res/dimensions';

class ScoreEntry extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.top}>
          <Text style={styles.topFont}>成绩录入</Text>
        </View>

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
  },
  topFont: {
    fontSize: 28,
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
