import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

import Navigator, { dispatcher, baseURL } from '../../helper/navigator';
import { createAction } from '../../helper';

import Layout from '../../res/dimensions';

let dispatch;

class Student extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }

  managePersonalInformation = async () => {
    try {
      let res = await fetch(`${baseURL}/student/getone`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.props.loginName,
        }),
      });
      const data = await res.json();
      console.log(`传进来的是：${JSON.stringify(data)}`);
      if (data.data) {
      dispatch(createAction('personalInformation/saveStudentsPersonal')(data));
      console.log(data);
      };
      dispatch(Navigator.navigate('StudentPersonalInformation'));
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  manageClassInformation = async () => {
    try {
      console.log(`tongyuehong sb teacher ${this.props.className}`);
      let res = await fetch(`${baseURL}/teacher/get`, {//eslint-disable-line
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.props.name,
        }),
      });
      const data = await res.json();
      if (data.data) {
        dispatch(createAction('classInformation/saveTeacher')(data));
      }
    } catch (e) {
      console.log(`error: ${e}`);
    }

    try {
      console.log(`tongyuehong sb leader ${this.props.className}`);
      let res = await fetch(`${baseURL}/student/getleader`, {//eslint-disable-line
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.props.name,
        }),
      });
      const data = await res.json();
      dispatch(createAction('classInformation/saveCadre')(data));
    } catch (e) {
      console.log(`error: ${e}`);
    }

    try {
      console.log(`tongyuehong sb students ${this.props.className}`);
      let res = await fetch(`${baseURL}/student/getall`, {//eslint-disable-line
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.props.name,
        }),
      });
      const data = await res.json();
      dispatch(createAction('classInformation/saveStudents')(data));
    } catch (e) {
      console.log(`error: ${e}`);
    }
    dispatch(Navigator.navigate('ManageClassInformation'));
  }

  managementAnnounce = async () => {
    try {
      let res = await fetch(`${baseURL}/message/show`, {//eslint-disable-line
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.props.name,
        }),
      });
      const data = await res.json();
      console.log(`liuqiliuqi->${JSON.stringify(data)}`);
      dispatch(createAction('announcement/saveMessages')(data));
      dispatch(Navigator.navigate('Announcement'));
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  managementScore = async () => {
    try {
      let res = await fetch(`${baseURL}/grade/one`, {//eslint-disable-line
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          className: this.props.className,
          name: this.props.loginName,
        }),
      });
      const data = await res.json();
      console.log(`liuqiiiiiiii->${JSON.stringify(data)}`);
      dispatch(createAction('score/saveScore')(data));
      dispatch(Navigator.navigate('Scores'));
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        <View style={styles.top}>
          <Text style={styles.topFont}>班级信息管理系统</Text>
        </View>

        <View style={styles.arrangement}>
          <TouchableOpacity
            onPress={this.managePersonalInformation}
            style={styles.card}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-heart"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>个人信息</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.manageClassInformation}
            style={styles.card}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-happy"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>查看班级信息</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.arrangement}>
          <TouchableOpacity
            style={styles.card}
            onPress={this.managementAnnounce}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-paw"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>查看班级公告</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={this.managementScore}
          >
            <Icon
              containerStyle={styles.cardIcon}
              size={30}
              reverse
              name="ios-school"
              type="ionicon"
              color="#00aced"
            />
            <Text style={styles.cardName}>查询成绩</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    height: Layout.Height(1000),
    width: Layout.Width(600),
    backgroundColor: '#FFFFFF',
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Layout.Height(80),
    marginBottom: Layout.Height(40),
  },
  topFont: {
    fontSize: 20,
  },
  arrangement: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: Layout.Width(20),
    marginBottom: Layout.Height(40),
  },
  card: {
    height: Layout.Height(240),
    width: Layout.Width(240),
    backgroundColor: '#40E0D0', //颜色：Turquoise
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardIcon: {
    marginBottom: Layout.Height(30),
  },
  cardName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default connect(({ classInformation, announcement, state, personalInformation, score }) => ({
  ...personalInformation,
  ...classInformation,
  ...announcement,
  ...state,
  ...score,
}))(Student);
