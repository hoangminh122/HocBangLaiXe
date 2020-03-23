import React, { Component } from 'react';
import { TouchableHighlight,Platform,View,Text,StyleSheet,Dimensions} from 'react-native';
import {Link} from 'react-router-native'
var screen =Dimensions.get('window');


export default class componentName extends Component {
  render() {
    console.log(this.props.match.params.loaiBang)
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
      <View style={styles.footerView}>
      </View>
      <View style={styles.childView}>
        
        <View style={styles.viewParentButton}>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'#108B33',margin:5}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    Ôn Tập
              </Text>
            </View>   
          </TouchableHighlight>
          <Link to='/ThiSatHach/4'>
          <View style={[styles.txtButton,{backgroundColor:'#FF0000'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    Thi Sát Hạch
              </Text>
            </View>   
          </View>
          </Link>
        </View>
        <View style={styles.viewParentButton}>
          <Link to='/BienBaoCam' style={[styles.txtButton,{backgroundColor:'#EED709',margin:5}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    Biển Báo
              </Text>
            </View>   
          </Link>
          <Link to='/Meo' style={[styles.txtButton,{backgroundColor:'#0B5F8E'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    Mẹo
              </Text>
            </View>   
          </Link>
        </View>
        <View style={styles.viewParentButton}>
          <Link to='/SaHinh' style={[styles.txtButton,{backgroundColor:'#9E1490',margin:5}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    Sa Hình
              </Text>
            </View>   
          </Link>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'#9E9A9A'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    Xem Câu Sai
              </Text>
            </View>   
          </TouchableHighlight>
        </View>
        
              
      </View>
      <View style={styles.footerView}>
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
    childTitle:{
      alignItems:'center',
      borderTopWidth:0.5,
      borderTopColor:'gray',
      // flex:1,
      backgroundColor :'#58D3F7',
      flexDirection:'row',
      height:screen.height*1/10,
      width:screen.width,
      
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
    childView :{
  
      height:screen.height*8/10,
      width:screen.width
    },
    footerView:{
      height:screen.height*0.5/10,
      width:screen.width
    },
    txtButton:{
      backgroundColor:'blue',
      width:screen.width/2.5,
      height:screen.height/4,
      borderBottomWidth:1,
      borderRadius:10
    },
    viewParentButton :{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    viewChildButton :{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    },
    txtChildButton :{
      color:'white'
  
    }
  });
  