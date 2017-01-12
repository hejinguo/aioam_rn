/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {Alert,Text,View,TouchableHighlight} from 'react-native';
import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    InputGroup,
    Input,
    Grid,
    Row,
    Col
} from 'native-base';

export default class main extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchContent:''
        };
    }
    render() {
        return (
            <Container>
                <Header searchBar rounded style={{paddingTop:8,}}>
                    <InputGroup>
                        <Icon name="ios-search" />
                        <Input placeholder="请输入有关用户或集团的关键字检索"
                               onChangeText={(text) => {this.setState({searchContent:text})}}
                               onSubmitEditing ={(text) => Alert.alert(
                            'Alert Title',
                            '搜索：'+this.state.searchContent
                        )}/>
                        <Icon name="ios-people" />
                    </InputGroup>
                    <Button transparent>
                        搜索
                    </Button>
                </Header>

                <Content style={{padding:5}}>
                    <Grid>
                        <Row>
                            <Col style={{height: 130,margin:1}}>
                                <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#CCC'}} underlayColor="#0F0">
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='ios-home' style={{fontSize: 50, color: 'red'}}/>
                                        <Text>111</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col style={{height: 130,margin:1}}>
                                <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#CCC'}}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='ios-home' style={{fontSize: 50, color: 'red'}}/>
                                        <Text>111</Text>
                                    </View>
                                </TouchableHighlight>

                            </Col>
                            <Col style={{height: 130,margin:1}}>
                                <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#CCC'}}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='ios-home' style={{fontSize: 50, color: 'red'}}/>
                                        <Text>111</Text>
                                    </View>
                                </TouchableHighlight>

                            </Col>
                        </Row>
                        <Row>
                            <Col style={{height: 130,margin:1}}>
                                <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#CCC'}} underlayColor="#0F0">
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='ios-home' style={{fontSize: 50, color: 'red'}}/>
                                        <Text>111</Text>
                                    </View>
                                </TouchableHighlight>
                            </Col>
                            <Col style={{height: 130,margin:1}}>
                                <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#CCC'}}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='ios-home' style={{fontSize: 50, color: 'red'}}/>
                                        <Text>111</Text>
                                    </View>
                                </TouchableHighlight>

                            </Col>
                            <Col style={{height: 130,margin:1}}>
                                <TouchableHighlight style={{flex:1,borderWidth:1,borderColor:'#CCC'}}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Icon name='ios-home' style={{fontSize: 50, color: 'red'}}/>
                                        <Text>111</Text>
                                    </View>
                                </TouchableHighlight>

                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}
