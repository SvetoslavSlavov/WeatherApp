import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import Hamburger from '../components/';
import SignUp from './SignUp';
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  
  }
  onPressSignIn() {
    this.props.navigation.navigate('SignIn');
  }
  onPressHamburger() {
    this.props.navigation.navigate('Home');
    this.props.navigation.state.params.Home.setState({ update: true });
    
    this.setState({ active: this.state.active === false });
    this.props.navigation.goBack(null);
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
              <Button color='#333333' icon={styles.backgroundColor} style={styles.backgroundColor} title='Sign In / Sing Up' onPress={this.onPressSignIn.bind(this)} /> 
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
              <Button color='#333333'style={styles.backgroundColor} title='Share' onPress={this.onPressHamburger.bind(this)} />
            </View>

          </View>
          <View style={styles.flexImageButton}>

            <Image style={styles.imgMap} source={require('../img/map.png')} />

            <View style={styles.flexEach}>
              <Button color='#333333' style={styles.backgroundColor} title='Edit Location' onPress={this.onPressHamburger.bind(this)} />
            </View>  
          </View>

          <View style={styles.flexImageButton}>

          <Image style={styles.imgMap} source={require('../img/map.png')} />

          <View style={styles.flexEach}>        
            <Button color='#333333'style={styles.backgroundColor} title='Current Location' onPress={this.onPressHamburger.bind(this)} />
          </View>
          </View>

          <View style={styles.flexImageButton}>

          <Image style={styles.imgMap} source={require('../img/map.png')} />

          <View style={styles.flexEach}>  
            <Button color='#333333'style={styles.backgroundColor} title='Sofia' onPress={this.onPressHamburger.bind(this)} />
          </View>

          </View>

          <View style={styles.flexImageButton}>

            <Image style={styles.imgMap} source={require('../img/map.png')} />
            <View style={styles.flexEach}>
              <Button color='#333333'style={styles.backgroundColor} title='New York' onPress={this.onPressHamburger.bind(this)} />
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
      // fontFamily: 'HelveticaNeueLTStd ThCn',
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
    }
};

export default MainMenu;
