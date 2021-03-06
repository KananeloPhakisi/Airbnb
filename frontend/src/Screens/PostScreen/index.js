import React from "react";
import { View, Text } from "react-native";
import DetailedPost from '../../Components/DetailedPost';
import {useRoute} from '@react-navigation/native';

import places from '../../../Assets/Data/feed';


const PostScreen = (props) => {
  const route = useRoute();

  const post = places.find(place => place.id === route.params.postId);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;