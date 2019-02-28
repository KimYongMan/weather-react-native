import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';



const API_KEY='d7d19dd0033e4b1fb75a8354e0b92a24';

export default class App extends Component {
  state ={
    isLoaded: false,
    temperature: null,
    name: null
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position =>{
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error=>{
        this.setState({
          error:error
        });
      } 
    );
    
  }
  _getWeather = (lat, long) =>{
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID='+API_KEY)
    .then(response => response.json())
    .then(json=>{
      console.log(json)
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
      });
  };
  render() {
    const {isLoaded, error, temperature, name}= this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather temperName={name} temp={Math.floor(temperature-273.15)}/> : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Start native weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
    
  },
  errorText:{
    color:'red',
    marginBottom: 10
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 100
  }
});
