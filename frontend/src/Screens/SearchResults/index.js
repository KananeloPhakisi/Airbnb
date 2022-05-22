import React from "react";
import { View, FlatList } from "react-native";
import Post from '../../Components/Post';
import feed from "../../../Assets/Data/feed";

const SearchResultsScreen = (props) => {

  const { posts } = props;

  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;