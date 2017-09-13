import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage,
    TextInput,
    Button,
    Alert
  } from 'react-native';
 
export default class AsyncStorageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hashCode: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        };
        // this.onRetrieve = this.onRetrieve.bind(this);
        console.log(this.props.navigation.state.params.username);
         console.log(this.props.navigation.state.params.password);
        console.log(this.props.navigation.state.params.countryies);
        console.log(this.props.navigation.state.params.hashCode);
        // this.onRetrieve();
    }
    onSelect = (user, pass) => {
        this.setState(user);
        this.setState(pass);
      };
    onRegisterPress() {
        // const username = this.state.username;
        // const password = this.state.password;
        
        // AsyncStorage.setItem('username', JSON.stringify(username));
        // AsyncStorage.setItem('password', JSON.stringify(password));
        // this.goBack();
        
        // AsyncStorage.getAllKeys((err, keys) => {
        //     AsyncStorage.multiGet(keys, (err, stores) => {
        //      stores.map((result, i, store) => {
        //        let key = store[i][0];
        //        let value = store[i][1];
               
        //        // add your data to redux store
        //       });
        //     });
        //   });
 
        // this.setState({username: username, password: password});
        // console.log(username);
        // console.log(password);
        // if (this.props.navigation.state.params.username === 'Chris' && this.props.navigation.state.params.password==='alibaba'){
        //     this.props.navigation.navigate('Menu', { Home: this });
        // }
        if (this.state.username === 'Chris' && this.state.password === 'alibaba') {
            this.props.navigation.navigate('Menu');
            console.log(this.state.hashCode+'alabala');
            AsyncStorage.setItem('hashCode', this.state.hashCode);
        } else {
            Alert.alert('Try Again');
        }
    }
    onPressSignUp() {
        this.props.navigation.navigate('SignUp');
    }
    // async onRetrieve() {

    //     console.log('onRetrieve()');       
    //     const user = await AsyncStorage.getItem('username');
    //     const pass = await AsyncStorage.getItem('password');

    //     console.log(user);
    //     console.log(pass);
    // }
    // goBack() {
    //     const { navigation } = this.props;
    //     navigation.goBack();
    //     navigation.state.params.onSelect({ username: this.state.username });
    //     navigation.state.params.onSelect({ password: this.state.password });
    // }
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.TextRegistration}>Sign In</Text>
                <TextInput
                style={styles.TextInputStyleClass}
                onChangeText={(text) => this.setState({ username: text })} placeholder='Email' autoCapitalize='none'
                />
                <TextInput
                secureTextEntry={true}
                style={styles.TextInputStyleClass}
                onChangeText={(text) => this.setState({ password: text })} placeholder='Password' autoCapitalize='none'
                />
                <Button title="Sign In" onPress={this.onRegisterPress.bind(this)} color="#2196F3" />
            </View> 
        )
    }
};
 
const styles = {
    MainContainer: {
       
        justifyContent: 'center',
        flex: 1,
        margin: 100
    },
       
    TextInputStyleClass: {
       
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: '#2196F3',
        // Set border Radius.
        borderRadius: 5,
        // Set border Radius.
        //borderRadius: 10 ,
    },
    TextRegistration: {
            fontSize: 20,
            color: '#000',
            textAlign: 'center',
            marginBottom: 15
    },
};
