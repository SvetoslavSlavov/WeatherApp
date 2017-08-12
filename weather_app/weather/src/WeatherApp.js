import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

class WeatherApp extends Component {
state = { location: [], weather: [] };

componentWillMount() {
    axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20%20where%20text%3D%22sofia%2C%20bg%22)%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .then(response => {
            console.log(response.data.query.results.channel);
            return this.setState({ location: response.data.query.results.channel.location, 
                weather: response.data.query.results.channel.item.forecast[0] });
        });    
}

    // map function aray helper pass in fat arow function five times for each one
    renderAlbums() {
        // return this.state.albums.map(weath/er => 
        // <Text key={weather.title} weather={weather} />
    }


    render() {
        return (
             <View style={styles.container}> 
                 
                 <View style={styles.whiteField}>
                    
                    <View style={styles.moveWhite}>

                        <View style={styles.moveCircle}>
                            <View style={styles.circle} />
                            <Text>c</Text>
                        </View>    
                            <Text style={styles.highTemperature}>
                                {this.state.weather.high}
                            </Text>
                            
                            {/* <View style={styles.circle} /> */}
                    <Text>
                        {this.state.location.city}
                    </Text>
                    <Text>
                        {this.state.location.region}
                    </Text>
                    <Text>
                        {this.state.weather.date}
                    </Text>
                    <Text>
                        {/* {Math.round((this.state.weather.low - 32) / (9 / 5))} */}
                        {this.state.weather.low}
                    </Text>

                    </View> 
                   </View>
                   <Image style={styles.redRectangle} source={require('./img/time.png')} /> 
            </View>
      );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#333333',
        flexDirection: 'row',
        
    },
    whiteField: {
        flex: 0.5,
        backgroundColor: '#ffffff',
        // borderRightWidth: 10,
        // borderColor: '#e73535'
        // borderRightHeight: 50
    },
    redRectangle: {
        marginTop: 230,
        right: 5,
        width: 5,
    },
    moveWhite: {
        paddingTop: 60,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    highTemperature: {
        fontSize: 60,
        fontFamily: 'HelveticaNeueLTStd ThCn',
        color: '#333333',
        textAlign: 'center',
    },
    circle: {
        width: 13,
        height: 13,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        borderColor: '#333333',
        borderWidth: 2,
        marginLeft: 130,
    },
    moveCircle: {
    }
};

export default WeatherApp;
