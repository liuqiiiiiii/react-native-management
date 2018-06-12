import React from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

function AnnoucementTitle(props) {
  return (
    <View>
      <SocialIcon
        style={{ backgroundColor: '#F4A460' }}
        title={props.item.title}
        button
        type="instagram"
      />
    </View>
  );
}

export default AnnoucementTitle;
