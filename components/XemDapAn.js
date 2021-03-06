import React, { Component } from 'react';
import De from './BoDe'
import {Link} from 'react-router-native'
import {View, FlatList,StyleSheet,AppRegistry,Text,Image, Platform,
    Modal,TouchableHighlight, Dimensions, ScrollView, TextInput, CheckBox, Alert, Button} from 'react-native'
var screen =Dimensions.get('window');

var De1=De[0].de1;
class HorizontalFlatListItem extends Component {
    constructor(props){
        super(props);
    }

    setBackground = (number)=>{
        console.log("num"+number)
        console.log(number==1)
        if(number == 0) 
            return styles.colorFalse;
        else if(number ==1)
            return styles.colorTrue;
    }
    render(){
     
       if(this.props.item.image ==""){
            return (
                <View>
                    <View style={[styles.childTitle,{backgroundColor:'white'}]}>
                        <Text style={{flex:1}}>
                                Cau {this.props.index+1}
                        </Text>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Text  style={{justifyContent:'flex-end'}}>
                                20:00
                            </Text>
                        </View>
                
                        <Text style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                0/30
                        </Text>
                    </View>
                    <View  style={styles.horizontalParent}>
                        <Text style={styles.itemTitle}>{this.props.item.title}
                        </Text>
                        <View key={this.props.index} style={{margin:5}}>
                        {/* <View style={this.setBackground(1)}><CheckBox  ></CheckBox><Text style={{marginTop:5}}>sdasdasd</Text></View> */}
                        {/* <View style={this.setBackground(1)}><CheckBox  ></CheckBox><Text style={{marginTop:5}}>âsfasfasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text></View> */}
                        {/* <View style={this.setBackground(0)}><CheckBox  ></CheckBox><Text style={{marginTop:5}}>âssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text></View> */}
                        {this.props.item.result.map((val,index) => <View style={this.setBackground(this.props.item.resultTrue[index])}><CheckBox   ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
                        </View>
                    </View>
                </View>
            )
        }else{
            
            return (
                <View>
                    <View style={[styles.childTitle,{backgroundColor:'white'}]}>
                        <Text style={{flex:1}}>
                                Cau {this.props.index+1}
                        </Text>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Text  style={{justifyContent:'flex-end'}}>
                                20:00
                            </Text>
                        </View>
                        <Text style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                0/30
                        </Text>
                    </View>
                    <View key={this.props.index} style={styles.horizontalParent}>
                        <Text style={styles.itemTitle}>{this.props.item.title}
                        </Text>
                        <View style={{margin:2,marginTop:10}}>
                            <Image source={{uri:this.props.image}} style={styles.imageIcon}></Image>
                        </View>

                        <View style={{margin:5}}>
                            {this.props.item.result.map((val,index) => <View style={this.setBackground(this.props.item.resultTrue[index])} ><CheckBox ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
                        </View>
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
            num:1
        };
    }
    
   numberPage =(number) =>{
        this.setState({
            // num:number
        })
   }
  render() {
    return (
        <View style={styles.parentView}>
            <View style={styles.childTitle}>
                <View style={styles.textThiSatHach}>
                    <Text style={styles.textThiSatHach_txtChild}>
                        Thi Sát Hạch GPLX
                    </Text>
                    <Link to='/'><Text>Home</Text></Link>
                </View>
            </View>
          
            <View style ={styles.childView}>
                <FlatList style={styles.flatList}
                data={De1}
                horizontal={true}
                renderItem = {({item,index}) =>{
                        return (
                            
                        <HorizontalFlatListItem  image={item.image} index={index} item={item} parentFlatList={this}>
                             {console.log(index)}
                        </HorizontalFlatListItem>
                        );
                }}
                >
                </FlatList>
            </View>
           
            <View style={styles.childTitle}>
                <View style={{flex:1}}>
                    <Button onPress={() =>this.showButtonSubmit()}  style={{flex:0.2,justifyContent:'flex-end'}} title="" ></Button>
                </View>
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
        height:screen.height*7/10,
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
    childTitle:{
        alignItems:'center',
        borderTopWidth:0.5,
        borderTopColor:'gray',
        // flex:1,
        backgroundColor :'#58D3F7',
        flexDirection:'row',
        height:screen.height*1/10,
        width:screen.width
    },
    imageIcon:{
        resizeMode:'contain',
        width:screen.width,
        height:screen.height/5
    },
    textThiSatHach:{

        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
    },
    textThiSatHach_txtChild:{
        // fontWeight: 'bold',
        // fontSize:20,
        // color:'#FFFFFF'
    },
    colorTrue:{
        margin:5,
        backgroundColor:'#00FFFF',
        flexDirection:'row',
        borderColor:'black',
        borderWidth:1

    },colorFalse:{
        margin:5,
        backgroundColor:'#FF6600',
        flexDirection:'row',
        borderColor:'black',
        borderWidth:1
    }

})