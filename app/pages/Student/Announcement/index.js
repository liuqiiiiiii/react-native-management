import React, { Component } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';
import { createAction } from '../../../helper';

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
          onPress={() => {
            dispatch(createAction('announcement/saveSelect')({ item }))
            dispatch(Navigator.navigate('AnnouncementContent'))
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
}

export default connect(({ announcement }) => ({
  ...announcement,
}))(ReleaseAnnouncement);
