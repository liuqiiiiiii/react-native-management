import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';
import { createAction } from '../../../helper';

import AnnouncementTitle from '../../Teacher/ReleaseAnnouncement/AnnouncementTitle';

import Layout from '../../../res/dimensions';

let dispatch;

class ReleaseAnnouncement extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    dispatch = dispatcher(this.props);
  }

  render() {
    return (
      <ScrollView style={styles.global}>
        {
          this.props.announce.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  dispatch(createAction('announcement/saveSelect')({ item }))
                  dispatch(Navigator.navigate('DisplayAnnouncement'))
                }}
                key={`an-${item.id}`}
              >
                <AnnouncementTitle
                  item={item}
                />
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginBottom: Layout.Height(10),
    paddingTop: Layout.Height(60),
  },
});

export default connect(({ announcement }) => ({
  ...announcement,
}))(ReleaseAnnouncement);
