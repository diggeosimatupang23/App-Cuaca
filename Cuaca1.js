import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Cuaca1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ' ',
      forecast: {
        main: ' ',
        description: ' ',
        temp: 0
      }
    };
  }
  getWeather = () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=24646f5e7d8b274514ab867de6398f31&units=metric';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      });
  }
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={{ height: 24 }}></View>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Weather Info</Text>
        </View>

        <View style={styles.Isi}>
          <View style={styles.CityInput}>
          <View style={styles.Title}>
            <Text>Enter City Name</Text>
          </View>
            <TextInput
              style={styles.InputText}
              placeholder="Enter City Name"
              onChangeText={(city) => this.setState({ city })}/>

            <Button
              onPress={() => this.getWeather()}
              title="Find"
              accessibilityLabel="Find"
            />
          </View>

          <View style={styles.Cek}>
            <Text style={styles.CekText}>
              Temp           : {this.state.forecast.temp} {'\n'}
              Forecast     : {this.state.forecast.main} {'\n'}
              Description : {this.state.forecast.description}
            </Text>
          </View>
        </View>

        <View style={styles.Footer}>
          <Text style={styles.FooterText}>Franz Jr © 2019</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E3F2FD',
    flex: 1,
    flexDirection: 'column'
  },

  Header: {
    flex: 1,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  HeaderText: {
    fontSize: 20,
    color: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },

  Isi:{
    backgroundColor: '#E3F2FD',
    flex: 8
  },

  CityInput: {
    backgroundColor: '#FFFFFF',
    flex: 2,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
  },

  Title: {
    color: '#000000',
    fontSize: 18,
  },

  InputText: {
    backgroundColor: '#FFFFFF',
    width: 200,
    padding: 10,
    margin: 10,
    borderColor: '#B2B2B2',
    borderWidth: 1,
    borderRadius: 5,
  },

  Cek: {
    backgroundColor: '#FAFAFA',
    flex: 4,
    margin: 10,
    marginTop:5,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
  },

  CekText: {
    color: '#000000',
    fontSize: 18,
  },

  Footer: {
    flex: 1,
    backgroundColor: '#1B5E20',
    justifyContent: 'center',
    alignItems: 'center',
  },

  FooterText: {
    color: '#FFFFFF',
    fontSize: 18,
  }
});
