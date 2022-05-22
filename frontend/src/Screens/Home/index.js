import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
    const handleError = (e) => { console.log(e.nativeEvent.error); };
    const navigation = useNavigation();

    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Destination Search')}
            >
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>

            <ImageBackground
                source={require('../../../Assets/Images/bg4.jpg')}
                style={styles.image}
            >
                <Text style={styles.title}>Stay on the Go</Text>
            </ImageBackground>
        </View>
    );
};
export default HomeScreen;