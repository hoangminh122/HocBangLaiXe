import React, { Component } from 'react';
import { TouchableHighlight,Platform,View,Text,StyleSheet,Dimensions, ScrollView, TextInput} from 'react-native';
import {Bode} from './BoDe'
import {Link} from 'react-router-native'

var screen =Dimensions.get('window');
export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state=({
      number:0,
      isUpdate:false
    })
   

  }
  setNumberBoDe = ()=>{
    this.setState({number:this.props.match.params.number});
      
  }
  // getDataFromNumberDoDe = (number)=>{
  //   var result = `<View style={styles.viewParentButton}>`
  //   let row = parseInt(number/3);
  //   let col = number % 3;
     
  //   for(let iCol = 0; iClo < col ;iRow++){

  //   }
  // }
  getForThreeButon =(col,count)=>{
     var arr =[];
    for(let i=1;i<=col;i++){
         arr.push(<Link  to={`/TestTheoBoDe/${i+count*3}`} style={[styles.txtButton,{backgroundColor:'gray'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    De {i+count*3}
              </Text>
            </View>
          </Link>)
    }
    // result =result + '</Text>';
    return arr;
  }
  demo2 =(number)=>{
    let row= parseInt(number/3);
    let col =parseInt(number%3);
    var result =[];
    let saveBienJ =0;
    for(let j=0;j<row ;j++){
      result.push(<View style={styles.viewParentButton}>{this.getForThreeButon(3,j)}</View>)
      saveBienJ++;
    }
    if(col>0 && col<3){
      // saveBienJ;
    result.push(<View style={styles.viewParentButton}>{this.getForThreeButon(col,saveBienJ)}</View>)

    }
    return result;

  }
  render() {
    // console.log(this.demo())
    // this.setNumberBoDe();
    // this.setState({number:this.props.match.params.number});
    // console.log(this.state.number)
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
        {/* <View style={styles.viewParentButton}> */}
       {this.demo2(10)}
           {/* <TouchableHighlight style={[styles.txtButton,{backgroundColor:'gray'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    Onn 
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'gray'}]}>
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    A1
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.txtButton,{backgroundColor:'gray'}]}> 
            <View style={styles.viewChildButton}>
              <Text style={styles.txtChildButton}>
                    A1
              </Text>
            </View>
          </TouchableHighlight> */}
        {/* </View> */}
      
              
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
    width:screen.width/4,
    height:screen.height/8,
    borderBottomWidth:1,
    borderRadius:10,
    margin:5
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



