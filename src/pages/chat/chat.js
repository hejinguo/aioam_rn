/**
 * Created by hejg on 2017/1/20.
 */
import React, {Component} from "react";
import {Alert, Text, View, StyleSheet, ScrollView, TextInput} from "react-native";
import {Icon} from "react-native-elements";

export default class step extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.aheader}>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="foundation" name='arrow-left'
                              color="#FFFFFF" underlayColor="#3D455F"
                              onPress={() => this.props.navigator.pop()}/>
                        <Text style={{flex:1,textAlign: 'center',color:'#FFFFFF'}}>自助服务</Text>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.abody}>
                    <ScrollView>


                    </ScrollView>
                </View>
                <View style={styles.afooter}>
                    <TextInput
                        placeholder=""
                        underlineColorAndroid="transparent"
                        style={{borderColor:'#00FF00',borderWidth:1}}></TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    aheader: {
        height: 44,
        padding: 10,
        backgroundColor: '#3D455F'
    },
    abody: {
        flex: 1,
        alignItems: 'stretch'
    },
    afooter: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FF0000'
    }
});