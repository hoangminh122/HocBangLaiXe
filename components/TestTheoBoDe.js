import React, { Component } from 'react';
import De1 from './BoDe'
import {View, FlatList,StyleSheet,AppRegistry,Text,Image, Platform, Dimensions, ScrollView, TextInput, CheckBox, Alert} from 'react-native'
var screen =Dimensions.get('window');


class HorizontalFlatListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            check1:false,
            check2:false,
            check3:false,
            keyChange:0
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
    checkOnChange =(key,index) =>{
        switch(index){
            case 0:{
                this.setState({
                     check1 : !this.state.check1,
                     keyChange:key
                 });
                 console.log(this.state.check1)
                 break;
            }
            case 1:{
                this.setState({
                    check2 : !this.state.check2,
                    keyChange:key
                });
               break;
          }
          case 2:{
                this.setState({
                    check3 : !this.state.check3,
                    keyChange:key
                });
                break;
          }
        }
        // console.log("key:" +key)
        //save answer change
      
    }
    render(){
        this.props.parentFlatList.getAnswerUser(this.state.keyChange,this.state.check1,this.state.check2,this.state.check3)
        console.log("check con:" +this.state.check1,this.state.check2,this.state.check3);
        // console.log("inde"+this.props.index)

        // console.log(this.checkValueIndex(1))
       if(this.props.item.image ==""){
            return (
                <View  style={styles.horizontalParent}>
                <Text style={styles.itemTitle}>{this.props.item.title}</Text>
                    <View key={this.props.index} style={{margin:5}}>
                    {this.props.item.result.map((val,index) => <View style={{flexDirection:'row'}}><CheckBox value={this.checkValueIndex(index)}  onChange = {() => this.checkOnChange(this.props.index,index) } ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
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
     answerUser = new Map();
    constructor(props){
        super(props)
        // this.state={
        //     answerUser:[]
        // }
        

    }
    changeBoolenToInt = (val) =>{
         if(val ==true) return 1;
         else 
            return 0;
         return 0;
    }
    getAnswerUser =(key,check1,check2,check3) =>{
            let arr=[];
            arr.push(this.changeBoolenToInt(check1));
            arr.push(this.changeBoolenToInt(check2));
            arr.push(this.changeBoolenToInt(check3));
            // this.answerUser.push({key:})
            this.answerUser.set(key,arr);
            //tim vi tri 
            // this.answerUser.map((value,index) =>{
            //     if(key == index) 
            // });
            // console.log("m:"+this.answerUser.size)
            console.log("check cha:"+check1+check2+check3)
            this.answerUser.forEach(function(value, key, map) {
                console.log(`${key} has ${value}`)
            });
          
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
                        <HorizontalFlatListItem  image={item.image} index={index} item={item} parentFlatList={this}>
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