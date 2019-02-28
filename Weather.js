import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import PropTypes from 'prop-types';


const weatherCases={
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon:"ios-rainy"
      },
      Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny ",
        subtitle: "I am playing",
        icon: "ios-sunny"
      },
      Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "ios-lightning"
      },
      Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I am sad",
        icon: "ios-cloudy"
      },
      Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "I took a cold",
        icon: "ios-snowy"
      },
      Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "I hate",
        icon: "ios-hail"
      },
      Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "ios-fog"
      }

  }
  

function Weather({temperName, temp}){
    return(
        <LinearGradient colors={weatherCases[temperName].colors} style={styles.container}>
            <View style={styles.upper}>
                <StatusBar hidden={true}/>
                <Ionicons color='white' size={144} name={weatherCases[temperName].icon}/>
                <Text style={styles.temper}>{temp}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[temperName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[temperName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    temperName: PropTypes.string.isRequired
}
export default Weather;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    temper:{
        fontSize: 48,
        backgroundColor:'transparent',
        color:'white',
        marginTop: 10
    },
    lower:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        paddingLeft: 25
    },
    title:{
        fontSize: 38 ,  
        backgroundColor: 'transparent' ,
        color:'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle:{
        fontSize: 24,
        backgroundColor:'transparent',
        color:'white',
        marginBottom:24
    }
});