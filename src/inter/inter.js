/**
 * Created by hejg on 2017/1/14.
 */

import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TouchableHighlight,TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

export default class inter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.acontainer}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#252932"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>112233</Text>
                        <Icon type="foundation" name='calendar'
                              color="#FFFFFF" underlayColor="#252932"
                              onPress={() => {}}/>
                    </View>
                </View>
                <View style={styles.abody}>
                    <View style={{paddingTop:100}}>
                        <TextInput style={{borderWidth:1}}></TextInput>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    acontainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    aheader: {
        /*height: 200,*/
        padding:10,
        backgroundColor: '#252932'
    },
    abody: {
        flex: 1,
        alignItems: 'stretch'
    },
    afooter: {
        padding: 5,
        fontSize: 10,
        color: '#86939E',
        textAlign: 'center'
    }
});