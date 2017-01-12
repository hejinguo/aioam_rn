/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import {Alert} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge,
    InputGroup,
    Input
} from 'native-base';

export default class main extends Component {

    render() {
        return (
            <Container>
                <Header height={45} backgroundColor="#10A5E9" style={{paddingLeft:0,paddingRight:0}}>
                    <InputGroup borderType='underline' style={{borderColor:'#FFFFFF'}}>
                        <Input placeholder='请输入工号或集团问题查询' placeholderTextColor="#FFFFFF"
                               style={{textAlign:'center',color:'#FFFFFF'}} onChangeText={(searchContent) => Alert.alert(
                            'Alert Title',
                            '输入：'+searchContent
                        )} onSubmitEditing ={(searchContent) => Alert.alert(
                            'Alert Title',
                            '搜索：'+searchContent
                        )} />
                    </InputGroup>
                </Header>

                <Content>
                    <Text>1122</Text>
                </Content>
            </Container>
        )
    }
}
