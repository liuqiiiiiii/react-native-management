import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../../res/dimensions';

class DisplayAnnouncement extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        style={styles.global}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.title}>
          <Text style={styles.titleFont}>{this.props.selectedMessage.title}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentFont}>
            {this.props.selectedMessage.content}
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


export default connect(({ annoucement }) => ({
  ...annoucement,
}))(DisplayAnnouncement);
