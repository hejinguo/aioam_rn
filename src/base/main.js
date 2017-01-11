/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, Button, TextInput, Alert, TouchableHighlight} from 'react-native';

export default class main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput/>
                <View style={{flex:1}}>
                    <View style={styles.grid_row}>
                        <TouchableHighlight style={styles.grid_cell} underlayColor="#F00" onPress={() => {}}>
                            <Text>1111</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.grid_cell} underlayColor="#F00" onPress={() => {}}>
                            <Text>1111</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.grid_cell} underlayColor="#F00" onPress={() => {}}>
                            <Text>1111</Text>
                        </TouchableHighlight>
                    </View>


                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5F5F5'
    },
    grid_row: {
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    grid_cell:{
        flex:1,
        borderWidth:1,
        borderColor:'#999',
        height:50
    }
});