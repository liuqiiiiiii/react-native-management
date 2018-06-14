import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../../helper/navigator';
import { createAction } from '../../../helper';

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
        <TouchableOpacity
          onPress={() => dispatch(Navigator.navigate('AddAnnouncement'))}
        >
          <SocialIcon
            title="添加公告"
            button
            type="envelope"
            light
          />
        </TouchableOpacity>

        {
          this.props.announce.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  dispatch(createAction('annoucement/saveSelect')({ item }))
                  dispatch(Navigator.navigate('DisplayAnnouncement'))
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
