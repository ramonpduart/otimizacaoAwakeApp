import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Input,
  Icon,
  Item,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class Resultado extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
   
  }

  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Awake</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text style = {{
            fontWeight: 'bold',
            fontSize: 40,
            alignSelf: 'center',
            margin: 20,
            padding: 10
          }}
          >
          Resultado
          </Text>

          
        </Content>
      </Container>
    );
  }
}

export default Resultado;
