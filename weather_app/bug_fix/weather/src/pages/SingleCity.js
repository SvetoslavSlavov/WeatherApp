import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

class WeatherApp extends Component {
state = { location: [], weather: [], time: [] };

componentWillMount() {
    axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20%20where%20text%3D%22sofia%2C%20bg%22)%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .then(response => {
            console.log(response.data.query.results.channel);
            return this.setState({ location: response.data.query.results.channel.location, 
                weather: response.data.query.results.channel.item.forecast[0], 
                time: response.data.query.results.channel });
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

                    <View style={styles.boxContainer}>
                       <View style={styles.boxInline}>      
                            <Text style={styles.highTemperature}>
                                {this.state.weather.high}
                            </Text>
                            <View style={styles.circle} />
                            <Text style={styles.celsius}>
                                C
                            </Text>    
                        </View>
                        {/* boxInline */}
                    </View>
                    {/* boxContainer */}
                    <View style={styles.boxContainer}>
                        <Image style={styles.imgSunWithClouds} source={require('./img/SunWithCloud.png')} />
                        <View style={styles.flexEnd}>
                            <Text style={styles.city}>
                                {/* {this.state.location.city} */}
                                {(this.state.location.city !== undefined) ? this.state.location.city.toUpperCase() : ''}
                            </Text>
                            <Text style={styles.dayDate}>
                                {this.state.weather.day}
                            </Text>
                            <Text style={styles.dayDate}>
                                {this.state.weather.date}
                            </Text>
                        </View>    
                    </View>
                    {/* boxContainer  */}
                    <View style={styles.boxContainer}>
                        <View style={styles.boxInline}>           
                            <Text style={styles.highTemperature}>
                                {this.state.weather.low}
                            </Text>
                            <View style={styles.circle} />
                            <Text style={styles.celsius}>
                                C
                            </Text>
                        </View>
                        {/* boxInline     */}
                    </View>
                    {/* boxContainer */}
                   </View>
                    {/* whiteField */}
                    
                   <Image style={styles.redRectangle} source={require('./img/time.png')} /> 
                   
                       <View style={styles.rightSide}>
                            <View style={styles.moveCirce}>
                                <View style={styles.counterCircleBox}>
                                    <Text style={styles.count}>3</Text>
                                </View>    
                            </View>
                            <View style={styles.counter}>
                                <Text style={styles.textTime}>
                                    {/* this.state.time.lastBuildDate */}
                                        {(this.state.time.lastBuildDate !== undefined) ? this.state.time.lastBuildDate.split(' ')[4].trim() : ''}
                                </Text>
                            </View>
                            <View style={styles.moveIt} />

                        </View>

                    </View>
                    // {/* time      */}
        // container
 
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
    highTemperature: {
        fontSize: 60,
        fontFamily: 'HelveticaNeueLTStd ThCn',
        color: '#333333',
        textAlign: 'center',
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        borderColor: '#333333',
        borderWidth: 2,
    },
    boxContainer: {
        flex: 1, // 1:3
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxInline: {
        flex: 0.5,
        flexDirection: 'row',
    },
    celsius: {
        fontSize: 20,
        fontFamily: 'HelveticaNeueLTStd-Ex',
        color: '#c1c1c1',
        fontWeight: '100'
    },
    imgSunWithClouds: {
        width: 120,
        height: 110,
        resizeMode: 'stretch'
    },
    textAlignLeft: {
        textAlign: 'right',
        fontFamily: 'HelveticaNeueLTStd-Ex',
    },
    textUpperCase: {
    },
    city: {
        color: '#333333',
        fontSize: 15,
        // fontWeight: 'bold',
        fontFamily: 'HelveticaNeueLTStd-Ex',
    },
    flexEnd: {
        justifyContent: 'center'
    },
    rightSide: {
        flex: 0.5
    },
    counter: {
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'column',
    },
    textTime: {
        color: '#ffffff',
        fontFamily: 'HelveticaNeueLTStd ThCn',
        fontSize: 60
    },
    counterCircleBox: {
        marginTop: 15,
        marginRight: 15,
        width: 30,
        height: 30,
        borderRadius: 100 / 2,
        backgroundColor: '#333333',
        borderColor: '#e73535',
        borderWidth: 2,
    },
    // counterCircle: {
    //     width: 12,
    //     height: 12,
    //     borderRadius: 100 / 2,
    //     backgroundColor: '#e73535',
    //     borderColor: 'red',
    //     borderWidth: 2,
    // },
    moveCirce: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    count: {
        color: '#c1c1c1',
        textAlign: 'center',
        paddingTop: 2,
    },
    moveIt: {
        flex: 1,
        flexDirection: 'column',
    },
    dayDate: {
        color: '#c1c1c1',
        fontFamily: 'HelveticaNeueLTStd-Ex',
    }
};

export default WeatherApp;
