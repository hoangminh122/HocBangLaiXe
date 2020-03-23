import React, { Component } from 'react';
import { TouchableHighlight,Platform,View,Image,Text,StyleSheet,Dimensions, Button, ScrollView, TextInput} from 'react-native';
import {Link} from 'react-router-native'
import BienBao from './BoBienBaoCam.js'

var screen =Dimensions.get('window');
export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  getAnyRowWarming =(len)=>{
    let page = len/4;
    let pageResidual =len % 4;
    let arr=[];
    if(pageResidual !=0) 
      page++;
    for(let i=0;i<page;i++){
      arr.push(<View><View style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>{this.get4ColWarming(i)}</View></View>)
    }
    return arr;
  }

  get4ColWarming =(num)=>{
    let arr=[];
    for(let i=0;i<4;i++){
      console.log("vao1")
      arr.push( <View style={[styles.parentWarmingContent,{borderWidth:1,borderColor:'gray'}]}>
                  <View style={{flex:3,borderColor:'gray',borderRightWidth:1}}>
                    <Image style={styles.childWarmingImage} source={{uri:BienBao[num*4+i].image}}></Image>
                  </View>
                  <View style={{flex:7,backgroundColor:'white'}}>
                      {/* <View style={{margin:5}}> */}
                          <Text style={styles.childWarmingTxt}>{BienBao[num*4+i].name}</Text>
                      {/* </View> */}
                      <View style={{marginLeft:5}}>
                          <Text >{BienBao[num*4+i].description}</Text>
                      </View>
                  </View>
                </View>)
    }
    return arr;
  }

  render() {
    console.log(BienBao.length)
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
        <View style={[styles.childTitle,{backgroundColor:'white'}]}>
          <View style={styles.childTitle}>
            <View style={[styles.textThiSatHach,{backgroundColor:'#C4C4C4'}]}>
                <Text style={[styles.textThiSatHach_txtChild,{fontSize:30,fontWeight:'bold'}]}>
                          Biển Báo
                </Text>
            </View>
          </View>
        </View>
     
      <View style={styles.childView }>
        <ScrollView 
                      horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}>
        {this.getAnyRowWarming(BienBao.length)}
        {/* //them */}
       
      
        </ScrollView>
      </View>
      <View style={styles.footerView}>
      </View>
    </View>
   
    );
  }
}
const styles = StyleSheet.create({
    parentView :{
        // flex:1,
        display:'flex',
        flexDirection :'column',
        backgroundColor:'#58D3F7',
        // height:400,
         height:screen.height,
         width:screen.width,
        marginTop:Platform ==='ios' ?34 : 0
    },
    childTitle:{
      flex:1,
        // height:screen.height*1/10,
        width:screen.width
    },
    childView :{
      margin:1,
      flex:7,
        // height:screen.height*8/10,
        width:screen.width,
        backgroundColor:'white'
    },
    textThiSatHach:{

      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
      
  },
   parentWarmingContent:{
    display:'flex',
    flexDirection:'row',
    width:screen.width,
    height:screen.height/6
   },
   childWarmingImage:{
    width:'100%',
    height:screen.height/6
   },
   childWarmingTxt:{
    marginLeft:5,
    fontSize:20,
    fontWeight:'bold',
    color:'red'
   }

});



