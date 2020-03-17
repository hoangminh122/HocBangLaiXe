import React, { Component } from 'react';
import De1 from './BoDe'
import {View, FlatList,StyleSheet,AppRegistry,Text,Image, Platform, Dimensions, ScrollView, TextInput, CheckBox, Alert} from 'react-native'
var screen =Dimensions.get('window');


class HorizontalFlatListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            check1:true,
            check2:false,
            check3:false
        }
    }
    //kiem tra check1,check2,... ddungs khong
    checkValueIndex =(index) =>{
        // console.log("index: "+index)
         switch(index){
             case 0:{
                  return this.state.check1;
                //   break;
             }
             case 1:{
                return this.state.check2;
                // break;
           }
           case 2:{
            return this.state.check3;
            // break;
       }
         }
    }
    checkOnChange =(index) =>{
        switch(index){
            case 0:{
                this.setState({
                     check1 : !this.state.check1
                 });
                 console.log(this.state.check1)
                 break;
            }
            case 1:{
                this.setState({
                    check2 : !this.state.check2
                });
               break;
          }
          case 2:{
                this.setState({
                    check3 : !this.state.check3
                });
                break;
          }
        }
        console.log("ok1")
    }
    render(){
        console.log("inde"+this.props.index)

        // console.log(this.checkValueIndex(1))
       if(this.props.item.image ==""){
            return (
                <View key={this.props.index} style={styles.horizontalParent}>
                <Text style={styles.itemTitle}>{this.props.item.title}</Text>
                    <View style={{margin:5}}>
                    {this.props.item.result.map((val,index) => <View style={{flexDirection:'row'}}><CheckBox value={this.checkValueIndex(index)}  onChange = {() => this.checkOnChange(index) } ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
                    </View>
                </View>
            )
        }else{
            
            return (
               
                <View key={this.props.index} style={styles.horizontalParent}>
                <Text style={styles.itemTitle}>{this.props.item.title}</Text>
                 <View style={{margin:2,marginTop:10}}>
                     <Image source={{uri:this.props.image}} style={styles.imageIcon}></Image>
                 </View>

                {/* // <Image source={require('../images/de1-20.jpg')} style={{height:100,width:100}}></Image> */}
                    <View style={{margin:5}}>
                    {this.props.item.result.map((val,index) => <View style={{flexDirection:'row'}}><CheckBox ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
                    </View>
                </View>
            )
            

        }
    }
}

export default class componentName extends Component {
    constructor(props){
        super(props)
        this.state={
            answerUser:[]
        }
    }
   
  render() {
    return (
        <View style={styles.parentView}>
            <View style ={styles.childView}>
                <FlatList style={styles.flatList}
                data={De1}
                horizontal={true}
                renderItem = {({item,index}) =>{
                        return (
                        <HorizontalFlatListItem image={item.image} index={index} item={item} parentFlatList={this}>
                        </HorizontalFlatListItem>
                        );
                }}
                >
                </FlatList>
            </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
    parentView :{
        flex:1,
        flexDirection :'column',
        marginTop:Platform ==='ios' ?34 : 0
    },
    childView :{
        height:screen.height,
        width:screen.width
    },
    flatList :{
        opacity:0.8,
        backgroundColor :'gray'
    },
    horizontalParent:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        borderColor:'grey',
        margin:4,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'white',
        width:screen.width,
        height:screen.height,
        
    },
    itemTitle:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    imageIcon:{
        resizeMode:'contain',
        width:screen.width,
        height:screen.height/5
    }

})