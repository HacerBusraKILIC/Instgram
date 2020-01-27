import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import colors from 'res/colors';
import StoryListItem from './StoryListItem';
import { width, height } from '../../../../Dimensions'

const StoryContainer = ({ stories, onStoryPress }) => {
  return <React.Fragment>
    <FlatList
      horizontal={true}
      style={styles.container}
      data={stories}
      renderItem={({ item }) => <StoryListItem item={item} onStoryPress={onStoryPress} />}
    />
    <View style={styles.seperator}></View>
  </React.Fragment>
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: width*0.05,
    marginTop: height*0.015,
    paddingBottom: height*0.015
  },
  seperator: {
    height: 0.5,
    backgroundColor: colors.seperator
  },
});

export default StoryContainer;