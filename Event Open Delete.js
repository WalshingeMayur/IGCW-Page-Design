import React, { Component } from "react";
import { Container, Header,Right, Title, Card, Content, Button, Icon, Left, Body, Text } from "native-base";
import { AppRegistry, View, Image } from 'react-native';

export default class HeaderSpan extends Component {
  render() {
    return (
        <Container style ={styles.container}>
        <Header span androidStatusBarColor="#0A7B4A" style={{display:'none'}}
        style={{backgroundColor:'#0A7B4A'}}>
        {/* <Image 
          source={{uri:'https://cdn.pixabay.com/photo/2015/08/14/07/46/gradient-888101_960_720.jpg'}} 
          style={{flex:1}} / > */}
          <Left style={{flex:1}}>
            <Button transparent style={{flex:1,paddingBottom:35,alignContent:'center',justifyContent:'center'}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{flex:1}}>
          <Image source={{uri:'https://cdn.pixabay.com/photo/2015/08/14/07/46/gradient-888101_960_720.jpg'}} style={{width:"100%", height: 400, resizeMode: "contain"}} />
            <Title style={{flex:0,alignContent:'center',paddingBottom:40,paddingLeft:30}}>Events</Title>
          </Body>
          <Right style={{flex:1}} />
        </Header>
        <Content>
          <Image
          style={{width: 400, height: 200}}
          source={{uri: 'https://images.pexels.com/photos/1384614/pexels-photo-1384614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}/>
        <Card style={styles.shadow}>
            <Text style={{fontSize:12,textAlign:'left',paddingTop:5,paddingLeft:10,paddingBottom:5}}>
                {'6th Industrail Green Chemistry World\nDay1, 16th October'}</Text>
                </Card>
                <View style={{flexDirection: "row",paddingBottom:20,paddingTop:20}}>
                <View style={{}}>
                <Button rounded 
                style={{marginRight: 5,marginLeft: 15,backgroundColor:'#0A7B4A'}}>
                   <Text>               open            </Text>
                    </Button>
                    </View>
                    <View style={{flex:0}}>
                <Button rounded transparent
                style={{marginLeft: 5,marginRight: 15,borderWidth: 1}}>
                   <Text>           Delete            </Text>
                    </Button>
                    </View>
                    </View>

        </Content>    
      </Container>
    );
  }
}

const styles = ({
    container: {
      flex: 1,
      backgroundColor: '#D5D6D6',
    },
    contentContainer: {
      paddingVertical: 20
    },

    shadow: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 40,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
    borderWidth: 1,
    flex: 1,
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 10,
    elevation: 15,
    shadowOffset: { width: 3,height: 4},
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowRadius: 5
    },

    button:{
      color:'',

    }

    });