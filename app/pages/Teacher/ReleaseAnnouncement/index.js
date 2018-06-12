import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';
import AnnoucementTitle from './AnnoucementTitle';

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
      <View style={styles.global}>
        <SocialIcon
          onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
          title="添加公告"
          button
          type="envelope"
          light
        />

        {
          this.props.title.map((item) => {
            return (
              <AnnoucementTitle
                key={item.id}
                item={item}
              />
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    marginBottom: Layout.Height(10),
    paddingTop: Layout.Height(60),
  },
});

export default connect(({ annoucement }) => ({
  ...annoucement,
}))(ReleaseAnnouncement);
