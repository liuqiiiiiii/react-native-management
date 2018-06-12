import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';
import AnnoucementTitle from '../../Teacher/ReleaseAnnouncement/AnnoucementTitle';

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
      <TouchableOpacity
        style={styles.global}
        onPress={() => dispatch(Navigator.navigate('AnnouncementContent'))}
      >
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
      </TouchableOpacity>
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
