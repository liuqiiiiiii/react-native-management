import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import TheTeacherInCharge from './TheTeacherInCharge';
import ClassCadre from './ClassCadre';
import Classmate from './Classmate';

import Layout from '../../../res/dimensions';
import Navigator, { dispatcher } from '../../../helper/navigator';

let dispatch;

class ManageClassInformation extends Component {
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
      <ScrollView>
        <View style={styles.class}>
          <Text style={styles.classFont}>班主任</Text>
        </View>
        <TouchableOpacity
          style={styles.card}
        >
          {
            this.props.theTeacherInCharge.map((item) => {
              return (
                <TheTeacherInCharge
                  key={`teacher${item.id}`}
                  item={item}
                />
              );
            })
          }
        </TouchableOpacity>

        <View style={styles.class}>
          <Text style={styles.classFont}>班干部</Text>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('ModifyInformation'))}
          >
            <Text style={styles.classButtonFont}>添加</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          {
            this.props.classCadre.map((item) => {
              return (
                <ClassCadre
                  key={`cadre${item.id}`}
                  item={item}
                />
              );
            })
          }
        </View>

        <View style={styles.class}>
          <Text style={styles.classFont}>同学</Text>
          <TouchableOpacity
            onPress={() => dispatch(Navigator.navigate('ModifyInformation'))}
          >
            <Text style={styles.classButtonFont}>添加</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          {
            this.props.classmate.map((item) => {
              console.log(`student: ${JSON.stringify(item)}`);
              return (
                <Classmate
                  key={`student${item.id}`}
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
  class: {
    marginVertical: Layout.Height(40),
    marginHorizontal: Layout.Width(40),
    paddingBottom: Layout.Height(20),
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  classFont: {
    fontSize: 30,
    color: '#000000', //black
  },
  classButtonFont: {
    fontSize: 14,
    textAlign: 'right',
  },
  card: {
    marginHorizontal: Layout.Width(40),
  },
  edit: {
    fontSize: 14,
    color: '#808080',
  },
});

export default connect(({ classInformation, state }) => ({
  ...classInformation,
  ...state,
}))(ManageClassInformation);
