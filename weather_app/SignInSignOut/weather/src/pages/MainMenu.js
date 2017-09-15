import React from 'react';
import { View, Text, Button, Image, TouchableHighlight } from 'react-native';
import { StackNavigation } from 'react-navigation';
import Hamburger from '../components/';
import SignUp from './SignUp';
import EditLocation from './EditLocation';

class MainMenu extends React.Component {
  static navigationOptions =
  {
     title: 'MainMenu',
   
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      username: '',
      password: '',
      city1: '',
      city2: '',
      city3: '',
      city1Flag: false,
      city2Flag: false,
      city3Flag: false
    };
    // console.log(this.props.navigation.state.params.code);
    this.state.city1 = this.props.navigation.state.params.city1;
    this.state.city2 = this.props.navigation.state.params.city2;
    this.state.city3 = this.props.navigation.state.params.city3;
  }
 
  onSelect = (user, pass) => {
    this.setState(user);
    this.setState(pass);
  };
  onPressSignIn() {
    this.props.navigation.navigate('SignIn', { onSelect: this.onSelect });
  }
  onPressHamburger() {
    // this.props.navigation.navigate('Home', null);
    // this.props.navigation.state.params.Home.setState({ update: true });
    
    this.setState({ active: this.state.active === false });
    this.props.navigation.goBack(null);
}
EditLocation = () => {
  // this.props.navigation.navigate('EditLocation', { onSelect: this.onSelect });
  this.props.navigation.navigate('EditLocation');
  console.log('editlocation');
}
CurrentLocation = () => {
  this.props.navigation.navigate('GPSWeatherApp');
}

FlagOne() {
  console.log('hisada');
  this.state.city1Flag = true;
  this.UserWeatherApp();
}
FlagTwo() {
  this.state.city2Flag = true;
  this.UserWeatherApp();
}
FlagThree() {
  this.state.city3Flag = true;
  this.UserWeatherApp();
}
UserWeatherApp = () => {
  this.state.city1 = this.props.navigation.state.params.city1;
  this.state.city2 = this.props.navigation.state.params.city2;
  this.state.city3 = this.props.navigation.state.params.city3;
  console.log('userweatherapp');
  if (this.state.city1Flag === true) {
  this.props.navigation.navigate('UserWeatherApp', { city: this.state.city1 });
  } 
  if (this.state.city2Flag === true) {
    this.props.navigation.navigate('UserWeatherApp', { city: this.state.city2 });
  } 
  if (this.state.city3Flag === true) {
    this.props.navigation.navigate('UserWeatherApp', { city: this.state.city3 });
  }
}
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.hamburger}>
          <View style={styles.signIn}>

            <View style={styles.flexEach}>

              <Image style={styles.imgUser} source={require('../img/user.png')} />
            </View>
            <View style={styles.flexEach}>
              
              <Button color='white' icon={styles.backgroundColor} style={styles.backgroundColor} title='Welcome!' onPress={this.onPressSignIn.bind(this)} /> 
            </View>
            
          </View>
          <Hamburger onPress={this.onPressHamburger.bind(this)} />
          
        </View>  
        {/* <View style={styles.flexImageButton}>

          <View style={styles.flexEach}>

            <Image style={styles.imgUser} source={require('../img/user.png')} onPress='' />
          </View>
          <View style={styles.flexEach}>
            <Button color='#333333' icon={styles.backgroundColor} style={styles.backgroundColor} title='Sign In / Sing Up' />
          </View>
          
        </View> */}

          <View style={styles.flexImageButton}>

            <Image style={styles.imgUser} source={require('../img/share.png')} /> 
          
            <View style={styles.flexEach}>
              <Button color='white'style={styles.backgroundColor} title='Share' onPress={this.onPressHamburger.bind(this)} />
            </View>

          </View>
          <View style={styles.flexImageButton}>

            <Image style={styles.imgMap} source={require('../img/map.png')} />

            <View style={styles.flexEach}>
              <Button color='white' style={styles.backgroundColor} title='Edit Location' onPress={() => this.props.navigation.navigate('EditLocation')} />
            </View>  
          </View>

          <View style={styles.flexImageButton}>

          <Image style={styles.imgMap} source={require('../img/map.png')} />

          <View style={styles.flexEach}>        
            <Button color='white'style={styles.backgroundColor} title='Current Location' onPress={this.CurrentLocation()} />
          </View>
          </View>

          <View style={styles.flexImageButton}>

          <Image style={styles.imgMap} source={require('../img/map.png')} />

          <View style={styles.flexEach}>  
            <Button color='white'style={styles.backgroundColor} title={this.state.city1} onPress={this.FlagOne.bind(this)} />
          </View>

          </View>

          <View style={styles.flexImageButton}>

            <Image style={styles.imgMap} source={require('../img/map.png')} />
            <View style={styles.flexEach}>
            <Button color='white'style={styles.backgroundColor} title={this.state.city2} onPress={this.FlagTwo.bind(this)} />
            </View>
          </View>
          {/*{this.state.city1}*/}
          {/* <Text>
            {this.state.username}
          </Text>  
          <Text>
            {this.state.password}
          </Text>   */}
          <View style={styles.flexImageButton}>

          <Image style={styles.imgMap} source={require('../img/map.png')} />

          <View style={styles.flexEach}>  
            <Button color='white'style={styles.backgroundColor} title={this.state.city3} onPress={this.FlagThree.bind(this)} />
          </View>

          </View>
      </View>
    );  
  }
}

const styles = {
    container: {
      flex: 1
    },
    imgUser: {
        width: 24,
        height: 24,
        marginLeft: 12
    },
    backgroundColor: {
      backgroundColor: '#333333',
      //fontFamily: 'HelveticaNeueLTStd ThCn',
    },
    flexImageButton: {
      flex: 0.1,
      backgroundColor: '#333333',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexEach: {
      // flex: 1,
      flexDirection: 'row',
      borderColor: '#333333',
    },
    imgMap: {
      width: 10,
      height: 15
    },
    hamburger: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: '#333333',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 8,
      paddingRight: 2,
      borderWidth: 2,
      borderBottomColor: 'white',
      borderTopColor: '#333333',
      borderLeftColor: '#333333',
      borderRightColor: '#333333'
    },
    signIn: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textColor: {
      color: '#333333'
    }
};

export default MainMenu;
