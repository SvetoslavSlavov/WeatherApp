import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';

class WeatherImg extends Component {
    constructor(props) {
        super(props);
        // this.state = this.setState({ code: [] });
        this.state = {
            code: 0,
        }
    }

    state = {
        code: [],
    };

    // componentWillMount() {
    //     axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20%20where%20text%3D%22sofia%2C%20bg%22)%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    //     .then(response => {
    //         console.log(response.data.query.results.channel);
    //         return this.setState({ code: response.data.query.results.channel.item.condition.code });
    //     });
    // }
    // ChangeImage() {
    //     if (this.state.code === 0) {
    //         return arr[0].Image;
    //     }
    // }

    render() {
        const arr = [
            { image: require('../img/code-0-tornado.png') },
        { image: require('../img/code-1-tropical-storm.png') },
        { image: require('../img/code-2-hurricane.png') },
        { image: require('../img/code-3-severe-thunderstorms.png') },
        { image: require('../img/code-4-thunderstorms.png') },
        { image: require('../img/code-5-mixed-rain-and-snow.png') },
        { image: require('../img/code-6-mixed-snow-and-sleet.png') },
        { image: require('../img/code-7-freezing-drizzle.png') },
        { image: require('../img/code-8-drizzle.png') },
        { image: require('../img/code-9-freezing-rain.png') },
        { image: require('../img/code-10-showers.png') },
        { image: require('../img/code-11-showers.png') },
        { image: require('../img/code-12-snow-flurries.png') },
        { image: require('../img/code-13-light-snow-showers.png') },
        { image: require('../img/code-14-light-snow-showers.png') },
        { image: require('../img/code-15-blowing-snow.png') },
        { image: require('../img/code-16-snow.png') },
        { image: require('../img/code-17-hail.png') },
        { image: require('../img/code-18-sleet.png') },
        { image: require('../img/code-19-dust.png') },
        { image: require('../img/code-20-foggy.png') },
        { image: require('../img/code-21-haze.png') },
        { image: require('../img/code-22-smoke.png') },
        { image: require('../img/code-23-blustery.png') },
        { image: require('../img/code-24-windy.png') },
        { image: require('../img/code-25-cold.png') },
        { image: require('../img/code-26-cloudy.png') },
        { image: require('../img/code-27-mostly-cloudy(night).png') },
        { image: require('../img/code-28-mostly-cloudy(day).png') },
        { image: require('../img/code-29-partly-cloudy(night).png') },
        { image: require('../img/code-30-partly-cloudy(day).png') },
        { image: require('../img/code-31-clear(night).png') },
        { image: require('../img/code-32-fair (night).png') },
        { image: require('../img/code-32-sunny.png') },
        { image: require('../img/code-33-fair(day).png') },
        { image: require('../img/code-34-mixed-rain-and-hail.png') },
        { image: require('../img/code-35-hot.png') },
        { image: require('../img/code-36-isolated-thunderstorms.png') },
        { image: require('../img/code-37-scattered-thunderstorms.png') },
        { image: require('../img/code-38-scattered-thunderstorms.png') },
        { image: require('../img/code-39-heavy-snow.png') },
        { image: require('../img/code-40-scattered-snow-showers.png') },
        { image: require('../img/code-41-heavy-snow.png') },
        { image: require('../img/code-42-partly-cloudy.png') },
        { image: require('../img/code-43-thunderstorms.png') },
        { image: require('../img/code-44-snow-showers.png') },
        { image: require('../img/code-45-isolated-thundershowers.png') },
        { image: require('../img/code-3200-not-available.png') },
    ];

        return (
            <View style={styles.imageSpace}>
                <Image style={styles.imgSunWithClouds} source={(arr[this.state.code] !== undefined) ? arr[this.state.code].image : null} />
            </View>
        );
    }
}
const styles = {
    imageSpace: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5
    }, 
    imgSunWithClouds: {
        resizeMode: 'stretch',
        width: 120,
        height: 100
    },
};
export default WeatherImg;
