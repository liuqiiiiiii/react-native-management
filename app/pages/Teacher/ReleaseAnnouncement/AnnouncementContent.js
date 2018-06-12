import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Layout from '../../../res/dimensions';

export default class AnnouncementContent extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <ScrollView
        style={styles.global}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.time}>
          <Text style={styles.timeFont}>11小时之前</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleFont}>班级管理制度</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentFont}>
            1、按时上下学，不迟到，不早退，有事请假。
            2、上学期间穿校服，佩戴红领巾，套桌套。
            3、爱护公共财物，不乱涂乱画，保护学校财物，注意清洁。否则照价赔偿。
            4、不攀爬护栏、窗户、树枝，不带玩具、危险品入校，玩有好处的游戏。严格遵守交通规则。否则后果自负。
            5、上学不准带零食入校，更不准吃泡泡糖，否则清理教室泡泡糖污迹。
            6、值日生认真做值日，持续室内外干净整洁。否则再值日一周。
            7、同学之间要友好相处，不要因为小事发生口角，影响友谊。
            8、遵守课堂纪律，认真的学习，按时作业，书写工整、美观，争取取得优异成绩。
            9、上学期间不留长指甲、不带耳环，不带手机入课堂，做合格小学生。
            10、讲礼貌，懂礼貌，见到老师要问好，见到同学要打招呼。外出要与家长打招呼，以免家长担心。
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginVertical: Layout.Height(40),
    marginHorizontal: Layout.Width(40),
  },
  time: {
    marginBottom: Layout.Height(40),
  },
  timeFont: {
    fontSize: 16,
  },
  title: {
    marginBottom: Layout.Height(40),
  },
  titleFont: {
    fontSize: 30,
    color: '#000000', //black
  },
  content: {
  },
  contentFont: {
    fontSize: 18,
    lineHeight: 28,
  },
});
