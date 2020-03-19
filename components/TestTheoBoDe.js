import React, { Component } from 'react';
import De1 from './BoDe'
import {View, FlatList,StyleSheet,AppRegistry,Text,Image, Platform,
    Modal,TouchableHighlight, Dimensions, ScrollView, TextInput, CheckBox, Alert, Button} from 'react-native'
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
                //  console.log(this.state.check1)
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
        if(this.state.check1 !=0 || this.state.check2 != 0 || this.state.check3 != 0)
        this.props.parentFlatList.getAnswerUser(this.state.keyChange,this.state.check1,this.state.check2,this.state.check3)
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
                    {this.props.item.result.map((val,index) => <View style={{flexDirection:'row'}}><CheckBox value={this.checkValueIndex(index)}  onChange = {() => this.checkOnChange(this.props.index,index) } ></CheckBox><Text style={{marginTop:5}}>{val}</Text></View>)} 
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
        this.state={
            modalVisible :false,
        };
       
       
    }
    setModalVisible(visible){
        this.setState({modalVisible:visible})
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
            // console.log("check cha:"+check1+check2+check3)
            // this.answerUser.forEach(function(value, key, map) {
            //     console.log(`${key} has ${value}`)
            // });
          
    }
   showButtonSubmit = () =>{
       Alert.alert(
           "Submit",
           "Ban muon ket thuc va nop bai ?",
           [
               {
                   text:"Cancel", onPress: () => {
                        console.log("cancel");
                   }
                },
                {
                    text:"OK",onPress : () =>{
                        this.setModalVisible(true);
                    }
                }

           ]

       )
   }
   compareTwoArray =(arr1,arr2) =>{
       console.log("kiem tra" +arr1.length+ arr2.length)
        if(arr1.length != arr2.length) return false;
        else{
            for(let i=0;i<arr1.length;i++){
                console.log("kiem tra"+arr1[i]+"="+arr2[i])
                if(arr1[i] != arr2[i]) return false
            }
        }
        return true;
   }
   compareResult =(result) =>{
       let temp= [];
       let countTrue=0;
    for(var [key,value] of result){
        if(this.compareTwoArray(value,De1[key].resultTrue)){
            console.log("trueresult")
            temp.push(1);
            countTrue=countTrue+1;
        } 
        else{
            console.log("falseResult");
            temp.push(0);
        }
          
    }
    console.log("ket thuc")
     return countTrue;
   }
  render() {
    return (
        <View style={styles.parentView}>
            <View style={styles.childTitle}>
                <Button title="sdf" style={{flex:1}}></Button>
                <Text style={{flex:3}}>

                </Text>
                <View style={{flex:1}}>
                    <Button onPress={() =>this.showButtonSubmit()}  style={{flex:0.2,justifyContent:'flex-end'}} title="Nop Bai" ></Button>
                </View>
            </View>
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
            <View >
                <Modal
                    style={{ 
                        justifyContent:'center',
                        borderRadius:3,
                        width:screen.width-80,
                        height:280
                    }}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22,backgroundColor:'blue'}}>
                        <View>
                            <Text>{this.compareResult(this.answerUser)}</Text>

                            <TouchableHighlight
                                onPress={() => {
                                this.setModalVisible(false);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
            </Modal>
            </View>
        </View>
        // modal
                    
        

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
        height:screen.height*9/10,
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
        flex:1,
        backgroundColor :'#58D3F7',
        flexDirection:'row',
        // height:screen.height*1/10,
        width:screen.width
    },
    imageIcon:{
        resizeMode:'contain',
        width:screen.width,
        height:screen.height/5
    }

})