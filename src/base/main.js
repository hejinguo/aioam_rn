/**
 * Created by hejg on 2017/1/11.
 */

import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon ,Text,Badge } from 'native-base';

export default class main extends Component {

    render() {
        return (
            <Container>
                {/*<Header height={45}>
                    <Title>Header</Title>
                </Header>*/}

                <Content>
                    <Text>1122</Text>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button>
                            <Badge>2</Badge>
                            Apps
                            <Icon name='ios-apps-outline' />
                        </Button>
                        <Button>
                            Camera
                            <Icon name='ios-camera-outline' />
                        </Button>
                        <Button active>
                            Navigate
                            <Icon name='ios-compass' />
                        </Button>
                        <Button>
                            Contact
                            <Icon name='ios-contact-outline' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
