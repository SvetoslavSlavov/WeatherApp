import React, { Component } from 'react';
import { 
    Text, 
    View, 
    Image, 
    ScrollView,
    TouchableHighlight 
} from 'react-native';
import axios from 'axios';
import Hamburger from './components/';


class WeatherApp extends Component {
state = { 
    location: [], 
    weatherNow: [], 
    weatherTwo: [], 
    weatherThree: [], 
    weatherFour: [], 
    weatherFive: [], 
    weatherSix: [],
    weatherSeven: [], 
    weatherEight: [],
    weatherNine: [],
    weatherTen: [],
    time: [],
    highLow: 0,
    // highLowTwo: false,
    // highLowThree: false,
    // lowNow: [],
    // lowTwo: [],
};

componentWillMount() {
    axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20%20where%20text%3D%22sofia%2C%20bg%22)%20and%20u%3D%27c%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .then(response => {
            console.log(response.data.query.results.channel);
            return this.setState({ weatherNow: response.data.query.results.channel.item.forecast[0],
                weatherTwo: response.data.query.results.channel.item.forecast[1],
                weatherThree: response.data.query.results.channel.item.forecast[2],
                weatherFour: response.data.query.results.channel.item.forecast[3],
                weatherFive: response.data.query.results.channel.item.forecast[4],
                weatherSix: response.data.query.results.channel.item.forecast[5],
                weatherSeven: response.data.query.results.channel.item.forecast[6],
                weatherEight: response.data.query.results.channel.item.forecast[7],
                weatherNine: response.data.query.results.channel.item.forecast[8],
                weatherTen: response.data.query.results.channel.item.forecast[9],
                time: response.data.query.results.channel,
                location: response.data.query.results.channel.location,
                // lowNow: response.data.query.results.channel.item.forecast[0].low,
                // lowTwo: response.data.query.results.channel.item.forecast[1].low,
             });
        });    
}
    // handlePressDate = () => {
    // this.setState({
    //     low: false
    // });
    
    // }
    // map function aray helper pass in fat arow function five times for each one
    renderAlbums() {
        // return this.state.albums.map(weath/er => 
        // <Text key={weather.title} weather={weather} />
    }


    render() {
        return (
        <View style={styles.container}>
            <View style={styles.whiteField}>
                <View style={styles.resize}>
                    <ScrollView style={styles.scrollView}>
                        
                            <View style={styles.boxContainer}>  
                                <TouchableHighlight
                                // Change the value to the opposite
                                onPress={() => {
                                    {/* this.setState({ highLowTwo: !this.state.highLowTwo });
                                    }}  */}
                                    this.setState({ highLow: 0, textColored: !this.state.textColored });
                                    }}
                                >     
                                <View style={(() => { 
                                    {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                    if (this.state.highLow === 0) {
                                        return styles.boxLineOne;
                                    } else {
                                        return styles.boxLineTwo;
                                    }
                                })()} 
                                >
                                    <Text style={[styles.textCenter, styles.textFonts]}>
                                            {(this.state.weatherNow.date !== undefined) ? 
                                            this.state.weatherNow.date.split(' ')[0].trim() : ''}
                                    </Text>
                                </View>
                                </TouchableHighlight>
                                <View style={styles.box}>
                                    <Text style={[styles.textCenter, styles.boxMonthText]}>
                                    { (() => {
                                        if (this.state.weatherNow.date !== undefined) {
                                            if (this.state.highLow === 0) {
                                                return this.state.weatherNow.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                            
                                        } else {
                                            return '';
                                        }
                                    })()} 
                                    </Text>
                                </View>    
                                              
                            </View>

                            <View style={styles.boxContainer}>  
                            <TouchableHighlight
                            // Change the value to the opposite
                            onPress={() => {
                                {/* this.setState({ highLowTwo: !this.state.highLowTwo });
                                }}  */}
                                this.setState({ highLow: 1, textColored: !this.state.textColored });
                                }}
                            >      
                                <View style={(() => { 
                                    {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                    if (this.state.highLow === 1) {
                                        return styles.boxLineOne;
                                    } else {
                                        return styles.boxLineTwo;
                                    }
                                })()}     
                                >
                                    <Text style={[styles.colorWhite, styles.textFonts]}>
                                    
                                           {(this.state.weatherTwo.date !== undefined) ? 
                                            this.state.weatherTwo.date.split(' ')[0].trim() : ''}
                                    </Text>
                                    
                                </View>
                            </TouchableHighlight>
                            <View style={styles.box}>
                                    <Text style={[styles.textCenter, styles.boxMonthText]}>
                                    { (() => {
                                        if (this.state.highLow === 1) {
                                            return this.state.weatherTwo.day.split(' ')[0].trim().toUpperCase();
                                        } else {
                                            return '';
                                        }
                                    })()} 
                                        {/* {(this.state.weatherNow.day !== undefined) ? 
                                                this.state.weatherNow.day.split(' ')[0].trim().toUpperCase() : ''} */}
                                    </Text>
                                </View>                 
                            </View>
                            {/* boxContainer                 */}

                            <View style={styles.boxContainer}>
                                <TouchableHighlight
                                // Change the value to the opposite
                                onPress={() => {
                                    {/* this.setState({ highLowThree: !this.state.highLowThree });
                                    }} */}
                                    this.setState({ highLow: 2 });
                                    }}
                                >           
                                    <View style={(() => { 
                                        {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                        if (this.state.highLow === 2) {
                                            return styles.boxLineOne;
                                        } else {
                                            return styles.boxLineThree;
                                        }
                                    })()}     
                                    >    
                                        <Text style={[styles.colorWhite, styles.textFonts]}>
                                                {(this.state.weatherThree.date !== undefined) ? 
                                                this.state.weatherThree.date.split(' ')[0].trim() : ''}
                                        </Text>
                                    </View>
                                </TouchableHighlight>

                                <View style={styles.box}>
                                    <Text style={[styles.textCenter, styles.boxMonthText]}>
                                    { (() => {
                                        if (this.state.highLow === 2) {
                                            return this.state.weatherThree.day.split(' ')[0].trim().toUpperCase();
                                        } else {
                                            return '';
                                        }
                                    })()} 
                                    </Text>
                                </View>  

                            </View>
                            {/* boxContainer                 */}

                            <View style={styles.boxContainer}>
                                    <TouchableHighlight
                                    // Change the value to the opposite
                                    onPress={() => {
                                        {/* this.setState({ highLowThree: !this.state.highLowThree });
                                        }} */}
                                        this.setState({ highLow: 3 });
                                        }}
                                    >              
                                        <View style={(() => { 
                                            {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                            if (this.state.highLow === 3) {
                                                return styles.boxLineOne;
                                            } else {
                                                return styles.boxLineFour;
                                            }
                                        })()}     
                                        >         
                                            <Text style={[styles.colorWhite, styles.textFonts]}>
                                                    {(this.state.weatherFour.date !== undefined) ? 
                                                    this.state.weatherFour.date.split(' ')[0].trim() : ''}
                                            </Text>
                                        </View>
                                        </TouchableHighlight>

                                    <View style={styles.box}>
                                        <Text style={[styles.textCenter, styles.boxMonthText]}>
                                        { (() => {
                                            if (this.state.highLow === 3) {
                                                return this.state.weatherFour.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                        })()}                                         
                                        </Text>
                                    </View>  
                                </View>    
                                {/* boxContainer */}

                                <View style={styles.boxContainer}>                
                                    <TouchableHighlight
                                    // Change the value to the opposite
                                    onPress={() => {
                                        {/* this.setState({ highLowThree: !this.state.highLowThree });
                                        }} */}
                                        this.setState({ highLow: 4 });
                                        }}
                                    >        
                                    <View style={(() => { 
                                        {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                        if (this.state.highLow === 4) {
                                            return styles.boxLineOne;
                                        } else {
                                            return styles.boxLineFive;
                                        }
                                    })()}     
                                    >    
                                        <Text style={[styles.colorWhite, styles.textFonts]}>
                                                {(this.state.weatherFive.date !== undefined) ? 
                                                this.state.weatherFive.date.split(' ')[0].trim() : ''}
                                        </Text>
                                    </View>
                                    </TouchableHighlight>

                                    <View style={styles.box}>
                                        <Text style={[styles.textCenter, styles.boxMonthText]}>
                                        { (() => {
                                            if (this.state.highLow === 4) {
                                                return this.state.weatherFive.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                        })()}  
                                        </Text>
                                    </View>

                                </View>    
                                {/* boxContainer                     */}

                                <View style={styles.boxContainer}>
                                    <TouchableHighlight 
                                    // Change the value to the opposite
                                    onPress={() => {
                                        {/* this.setState({ highLowThree: !this.state.highLowThree });
                                        }} */}
                                        this.setState({ highLow: 5 });
                                        }}
                                    >      
                                    <View style={(() => { 
                                        {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                        if (this.state.highLow === 5) {
                                            return styles.boxLineOne;
                                        } else {
                                            return styles.boxLineSix;
                                        }
                                    })()}     
                                    >    
                                        <Text style={[styles.colorWhite, styles.textFonts]}>
                                                {(this.state.weatherSix.date !== undefined) ? 
                                                this.state.weatherSix.date.split(' ')[0].trim() : ''}
                                        </Text>
                                    </View>
                                    </TouchableHighlight>

                                    <View style={styles.box}>
                                        <Text style={[styles.textCenter, styles.boxMonthText]}>
                                        { (() => {
                                            if (this.state.highLow === 5) {
                                                return this.state.weatherSix.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                        })()}
                                        </Text>
                                    </View>

                                </View>
                                {/* boxContainer                     */}
                                <View style={styles.boxContainer}>
                                    <TouchableHighlight
                                    // Change the value to the opposite
                                    onPress={() => {
                                        {/* this.setState({ highLowThree: !this.state.highLowThree });
                                        }} */}
                                        this.setState({ highLow: 6 });
                                        }}
                                    >  
                                    {/* Hidden  */}
                                    <View style={(() => { 
                                        {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                        if (this.state.highLow === 6) {
                                            return styles.boxLineOne;
                                        } else {
                                            return styles.boxLineSeven;
                                        }
                                    })()}     
                                    >     
                                        <Text style={[styles.colorWhite, styles.textFonts]}>
                                                {(this.state.weatherSeven.date !== undefined) ? 
                                                this.state.weatherSeven.date.split(' ')[0].trim() : ''}
                                        </Text>
                                    </View>
                                </TouchableHighlight>

                                    <View style={styles.box}>
                                        <Text style={[styles.textCenter, styles.boxMonthText]}>
                                        { (() => {
                                            if (this.state.highLow === 6) {
                                                return this.state.weatherSeven.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                        })()}
                                        </Text>
                                    </View>
                                
                                </View>
                                {/* boxContainer                 */}

                                <View style={styles.boxContainer}>
                                    <TouchableHighlight
                                    // Change the value to the opposite
                                    onPress={() => {
                                        {/* this.setState({ highLowThree: !this.state.highLowThree });
                                        }} */}
                                        this.setState({ highLow: 7 });
                                        }}
                                    >     
                                        <View style={(() => { 
                                        {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                        if (this.state.highLow === 7) {
                                            return styles.boxLineOne;
                                        } else {
                                            return styles.boxLineSeven;
                                        }
                                        })()}     
                                        >        
                                            <Text style={[styles.colorWhite, styles.textFonts]}>
                                                    {(this.state.weatherEight.date !== undefined) ? 
                                                    this.state.weatherEight.date.split(' ')[0].trim() : ''}
                                            </Text>
                                        </View>

                                    </TouchableHighlight>

                                    <View style={styles.box}>
                                        <Text style={[styles.textCenter, styles.boxMonthText]}>
                                        { (() => {
                                            if (this.state.highLow === 7) {
                                                return this.state.weatherEight.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                        })()}
                                        </Text>
                                    </View>

                                </View> 
                                {/* boxContainer                     */}
                                                
                                <View style={styles.boxContainer}>

                                    <TouchableHighlight
                                    // Change the value to the opposite
                                    onPress={() => {
                                        {/* this.setState({ highLowThree: !this.state.highLowThree });
                                        }} */}
                                        this.setState({ highLow: 8 });
                                        }}
                                    >     
                                        <View style={(() => { 
                                        {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                        if (this.state.highLow === 8) {
                                            return styles.boxLineOne;
                                        } else {
                                            return styles.boxLineSeven;
                                        }
                                        })()}     
                                        >         
                                            <Text style={[styles.colorWhite, styles.textFonts]}>
                                                    {(this.state.weatherNine.date !== undefined) ? 
                                                    this.state.weatherNine.date.split(' ')[0].trim() : ''}
                                            </Text>
                                        </View>
                                    </TouchableHighlight>

                                    <View style={styles.box}>
                                        <Text style={[styles.textCenter, styles.boxMonthText]}>
                                        { (() => {
                                            if (this.state.highLow === 8) {
                                                return this.state.weatherNine.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                        })()}
                                        </Text>
                                    </View>

                                </View>                        
                                {/* boxContainer                 */}
                                <View style={styles.boxContainer}>

                                    <TouchableHighlight
                                    // Change the value to the opposite
                                    onPress={() => {
                                        {/* this.setState({ highLowThree: !this.state.highLowThree });
                                        }} */}
                                        this.setState({ highLow: 9 });
                                        }}
                                    >     
                                        <View style={(() => { 
                                        {/* {this.state.highLow === 0 ? styles.boxLineOne : styles.boxLineTwo} */}
                                            if (this.state.highLow === 9) {
                                                return styles.boxLineOne;
                                            } else {
                                                return styles.boxLineSeven;
                                            }
                                        })()}     
                                        >         
                                            <Text style={[styles.colorWhite, styles.textFonts]}>
                                                    {(this.state.weatherTen.date !== undefined) ? 
                                                    this.state.weatherTen.date.split(' ')[0].trim() : ''}
                                            </Text>
                                        </View>
                                    </TouchableHighlight>

                                    <View style={styles.box}>
                                        <Text style={[styles.textCenter, styles.boxMonthText]}>
                                        { (() => {
                                            if (this.state.highLow === 9) {
                                                return this.state.weatherTen.day.split(' ')[0].trim().toUpperCase();
                                            } else {
                                                return '';
                                            }
                                        })()}
                                        </Text>
                                    </View>

                                </View>        
                    </ScrollView>
                    {   /*ScrollView  */}
                    <View style={styles.resizeClockPlace}>
                            <View style={styles.resizeClock} />                
                            <View style={styles.time}>
                                    <Text style={styles.timeStyle}>
                                        {(this.state.time.lastBuildDate !== undefined) ? 
                                        this.state.time.lastBuildDate.split(' ')[4].trim() : ''}
                                    </Text>
                            </View>
                            <View style={styles.resizeClock} />
                     </View>       
                            <View style={styles.boxLineSeven}>
                                <View style={styles.resizeWrapperCircle}>                      
                                    <Hamburger 
                                    style={[styles.hamburgerColor, styles.resizeForCircle]}
                                    active={this.state.active} 
                                    onPress={() => this.setState({ active: !this.state.active })} 
                                    />
                                    <View style={styles.resizeForCircle} />
                                    <View style={styles.counterCircleBox}>
                                                    <Text style={styles.count}>3</Text>
                                    </View>
                                </View>  
                            </View>
                </View>         
            </View>
                {/*whiteBoard  */}
                             
                <View style={styles.resizeRectSpaceContainer}>
                    <View style={[styles.boxLineSeven, styles.resizeRectSpace]}>                     
                        <Hamburger 
                        style={styles.hamburgerColor}
                        active={this.state.active} 
                        onPress={() => this.setState({ active: !this.state.active })} 
                        /> 
                    </View>
                    {/* Hamburger */}
                    <View>
                        <View style={styles.spaceImageDateAndTime}>
                            <View style={styles.viewImgS}>
                                <Image 
                                source={require('./img/middleRectMain.png')} 
                                />
                            </View>
                             
                            <View style={styles.dateAndTime}>
                                <Text style={styles.city}>
                                    {(this.state.location.city !== undefined) ? 
                                    this.state.location.city.toUpperCase() : ''}
                                </Text>
                                <Text style={styles.dateAndTimeStyle}>
                                {(this.state.weatherNow.day !== undefined) ? 
                                            this.state.weatherNow.day.split(' ')[0].trim() + ' ' : ''} 
                                    
                                {(this.state.time.lastBuildDate !== undefined) ? 
                                        this.state.time.lastBuildDate.split(' ')[4].trim() + ' / ' : ''}   
                                
                                {this.state.weatherNow.date}   
                                </Text>    
                            </View>
                            {/* dateAndTime */}
                        </View>
                        {/* viewImgSunWithClouds */}
                    </View>
                    {/* spaceImageDateAndTime          */}
                </View>
                <View style={styles.imageSpace}>
                    <Image style={styles.imgSunWithClouds} source={require('./img/SunWithCloud.png')} />
                </View>
                {/* imageSpace */}
                <View>
                
            <View> 
                <View style={styles.highLowPosition}>  

                    <View style={styles.bottomBox}>      
                        <View style={styles.bottomBoxInline}> 
                            
                                <Text style={styles.weatherFonts}> 
                                    {/* {this.state.highLowTwo ? 
                                    this.state.weatherNow.low // weatherNow.low
                                    : this.state.weatherTwo.low // weatherTwo.low
                                    } */}
                                    
                                    { (() => {
                                        if (this.state.highLow === 1) {
                                            return this.state.weatherTwo.low;
                                        } else if (this.state.highLow === 2) {
                                            return this.state.weatherThree.low;
                                        } else if (this.state.highLow === 3) {
                                            return this.state.weatherFour.low;
                                        } else if (this.state.highLow === 4) {
                                            return this.state.weatherFive.low;
                                        } else if (this.state.highLow === 5) {
                                            return this.state.weatherSix.low;
                                        } else if (this.state.highLow === 6) {
                                            return this.state.weatherSeven.low;
                                        } else if (this.state.highLow === 7) {
                                            return this.state.weatherEight.low;
                                        } else if (this.state.highLow === 8) {
                                            return this.state.weatherNine.low;
                                        } else if (this.state.highLow === 9) {
                                            return this.state.weatherTen.low;
                                        } else {
                                            return this.state.weatherNow.low;
                                        }
                                    
                                    })()} 
                                </Text>
                            
                            <View style={styles.circle} />
                                <Text style={styles.celsius}>
                                        C
                                </Text>    
                            </View>    
                        </View>

                        <Image style={styles.lineSize} source={require('./img/Shape.png')} /> 

                        <View style={styles.bottomBox}>
                            <View style={styles.bottomBoxInline}> 
                                <Text style={styles.weatherFonts}>
                                    {/* {this.state.highLowTwo ? 
                                    this.state.weatherNow.high // weatherNow.low
                                    : this.state.weatherTwo.high // weatherTwo.low
                                    }
                                    {this.state.highLowThree 
                                    ? this.state.weatherNow
                                    : this.state.weatherThree.high
                                    } */}
                                    { (() => {
                                        if (this.state.highLow === 0) {
                                            return this.state.weatherNow.high;
                                        } else if (this.state.highLow === 1) {
                                            return this.state.weatherTwo.high;
                                        } else if (this.state.highLow === 2) {
                                            return this.state.weatherThree.high;
                                        } else if (this.state.highLow === 3) {
                                            return this.state.weatherFour.high;
                                        } else if (this.state.highLow === 4) {
                                            return this.state.weatherFive.high;
                                        } else if (this.state.highLow === 5) {
                                            return this.state.weatherSix.high;
                                        } else if (this.state.highLow === 6) {
                                            return this.state.weatherSeven.high;
                                        } else if (this.state.highLow === 7) {
                                            return this.state.weatherEight.high;
                                        } else if (this.state.highLow === 8) {
                                            return this.state.weatherNine.high;
                                        } else if (this.state.highLow === 9) {
                                            return this.state.weatherTen.high;
                                        } else {
                                            return this.state.weatherNow.high;
                                        }
                                    })()} 
                                </Text>    

                                <View style={styles.circle} />

                                    <Text style={styles.celsius}>
                                            C
                                    </Text>    
                            </View> 
                        </View>
                    </View>
                    </View>
            </View>           
                   
</View>
    // container
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    whiteField: {
        flex: 0.7,
        backgroundColor: '#333333',
        flexDirection: 'row'
    },
    resize: {
        flex: 1,
        flexDirection: 'row',
    },
    colorWhite: {
        color: '#d6d6d6',
        textAlign: 'center',
    },
    textCenter: {
        color: '#ffffff',
        textAlign: 'center',
    },
    textFonts: {
        fontSize: 25,
        fontFamily: 'HelveticaNeueLTStd ThCn',
        fontWeight: 'normal'
    },
    boxLineOne: {
        width: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: '#e73535',
        borderTopColor: '#e73535',
        borderBottomColor: '#ffffff',
        borderLeftColor: '#e73535',
        borderRightColor: '#e73535',
        borderWidth: 1,
    },
    boxLineTwo: {
        width: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: '#333333',
        borderBottomColor: '#d6d6d6',
        borderLeftColor: '#333333',
        borderRightColor: '#333333',
        borderWidth: 1,
    },
    boxLineThree: {
        width: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: '#333333',
        borderBottomColor: '#adadad',
        borderLeftColor: '#333333',
        borderRightColor: '#333333',
        borderWidth: 1,
    },
    boxLineFour: {
        width: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: '#333333',
        borderBottomColor: '#858585',
        borderLeftColor: '#333333',
        borderRightColor: '#333333',
        borderWidth: 1,
    },
    boxLineFive: {
        width: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: '#333333',
        borderBottomColor: '#5c5c5c',
        borderLeftColor: '#333333',
        borderRightColor: '#333333',
        borderWidth: 1,
    },
    boxLineSix: {
        width: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: '#333333',
        borderBottomColor: '#484848',
        borderLeftColor: '#333333',
        borderRightColor: '#333333',
        borderWidth: 1,
    },
    boxLineSeven: {
        width: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 8,
        paddingRight: 2,
        backgroundColor: '#333333',
    },
    text: {
        backgroundColor: 'orange',
        color: 'red'
    },
    hamburgerColor: {
        color: '#555555',
        backgroundColor: '#555555'
    },
    box: {
        // flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    boxMonthText: {
        paddingLeft: 20
    },
    time: {
        flex: 1,
    },
    timeStyle: {
        color: '#ffffff',
        fontFamily: 'HelveticaNeueLTStd ThCn',
        fontSize: 90
    },
    scrollView: {
        flex: 0.5,
    },
    resizeClock: {
        flex: 1
    },
    resizeClockPlace: {
        flex: 2,
        flexDirection: 'column'
    },
    resizeWrapperCircle: {
        flex: 1,
        flexDirection: 'column'
    },
    resizeForCircle: {
        flex: 1,
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
    count: {
        color: '#c1c1c1',
        textAlign: 'center',
        paddingTop: 2,
    },
    resizeRectSpaceContainer: {
        flexDirection: 'row',
    },
    resizeRectSpace: {
        // flex: 0.35,
        flex: 0.40
    },
    spaceImageDateAndTime: {
        flex: 1,
        flexDirection: 'column'
    },
    viewImgSunWithClouds: {
        
    },
    dateAndTime: {
        marginLeft: 10,
        marginTop: 10
        
    },
    dateAndTimeCenter: {
        textAlign: 'center'
    },
    city: {
        color: '#333333',
        fontSize: 15,
        fontFamily: 'HelveticaNeueLTStd-Ex',
    },
    dateAndTimeStyle: {
        fontFamily: 'HelveticaNeueLTStd-Ex',
        color: '#c1c1c1'
    },
    imgSunWithClouds: {
        resizeMode: 'stretch',
        width: 120,
        height: 100
    },
    imageSpace: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5
    },
    weatherFonts: {
        fontFamily: 'HelveticaNeueLTStd ThCn',
        color: '#6a6a6a',
        fontSize: 80
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        borderColor: '#333333',
        borderWidth: 2,
    },
    bottomBox: {
        flexDirection: 'row',
        display: 'flex',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 50,
        // marginTop: 30
         // 1:3
    },
    bottomBoxInline: {
        flexDirection: 'row'
    },
    celsius: {
        fontSize: 20,
        fontFamily: 'HelveticaNeueLTStd-Ex',
        color: '#c1c1c1',
        fontWeight: '100'
    },
    highLowPosition: {
        flexDirection: 'row'
    },
    // highLowFontsLine: {
    //     fontSize: 90,
    //     fontWeight: 'normal',
    //     fontFamily: 'HelveticaNeueLTStd ThCn',
    // }
    lineSize: {
        height: 70,
        width: 1.5
    }
};

export default WeatherApp;
