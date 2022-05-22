import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const days = 7;

const Post = (props) => {

  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }
  
  const handleError = (e) => { console.log(e.nativeEvent.error); };

  return (

    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={post.image}
        onError={handleError}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}.
      </Text>

      {/*  price */}
      <Text style={styles.prices}>
        <Text style={styles.price}>M{post.newPrice} </Text>
        / night
      </Text>
    </Pressable>
  );
};

export default Post;