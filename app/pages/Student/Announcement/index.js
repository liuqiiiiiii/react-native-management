import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';
import { createAction } from '../../../helper';
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
    return this.props.title.map((item) => {
      return (
        <TouchableOpacity
          style={styles.global}
          onPress={() => {
            dispatch(createAction('annoucement/saveSelect')({ item }))
            dispatch(Navigator.navigate('AnnouncementContent'))
          }}
          key={`an-${item.id}`}
        >
          <AnnoucementTitle
            item={item}
          />
        </TouchableOpacity>
      );
    })
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
