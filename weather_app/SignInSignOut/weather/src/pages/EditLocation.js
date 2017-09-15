import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Button,
    View,
    TouchableHighlight,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { StackNavigation } from 'react-navigation';
import axios from 'axios';

class EditLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            loc: '',
        };
        // console.log(this.props.navigation.state.params.code);
    }

    componentWillMount() {
        let that = this;
        axios.get('https://restcountries.eu/rest/v2')
            .then(response => {
                let loc = [];
                for (let i = 0; i < response.data.length; i++) {
                    // if (typeof (response.data.length[i].capital) !== undefined) {
                    loc.push(response.data[i].capital);

                    // }
                    console.log(response.data[i].capital);
                    console.log(loc);
                }
                console.log(response.data);
                return loc;
            })
            .then(function (data) {
                that.setState({ activity: false, location: data });
            }).catch((error) => {
                that.setState({ activity: false });
            });
    }
    // componentWillUnmount() {
    //     // this.loc = this.text;
    //     console.log('hi'+this.loc);
    //     this.props.navigation.navigate('WeatherLocation', { location: this.loc });
    // }      
    OnPres() {
        // this.setState({ loc: text });
        // this.setState({ loc: text };

        this.loc = this.text;
        console.log('hi' + this.loc);
        this.props.navigation.navigate('WeatherLocation', { location: this.loc });
    }
    renderButtons = () => {
        const buttons = [];
        for (let i = 0; i < this.state.location.length; i++) {
            buttons.push(
                <Button title={(this.state.location !== undefined) ? this.state.location[i] + '' : ''} onPress={(text) => this.props.navigation.navigate('WeatherLocation', { location: this.state.location[i] })}/*this.OnPress.bind(this)*/ />

            );
        }
        return buttons;
    }
    render() {
        return (
            <View style={{ flex: 1, /*backgroundColor: 'green',*/ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.activityIndicator}>
                    <ActivityIndicator
                        animating={this.state.activity}
                        size={'large'}
                        style={styles.wrapperActivityIndicator}
                    />
                </View>
                <View style={styles.wrapper}>    
                <ScrollView>
                    
                        {this.renderButtons()}
                   
                </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = {
    // wrapper: {
    //     marginTop: 40
    // },
    wrapperActivityIndicator: {
        // backgroundColor: 'red'
    },
    wrapper: {
        flex: 0.8
    },
    activityIndicator: {
        position: 'absolute',
        flex: 1,
        // backgroundColor: 'blue'
    }
};
export default EditLocation;
