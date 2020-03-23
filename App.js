import React, { Component } from 'react';
import {Text,View, Linking} from 'react-native'
import PhanLoaiBang from './components/PhanLoaiBang'
import LoaiDichVu from './components/LoaiDichVu'
import ThiSatHach from './components/ThiSatHach'
import Demo from './components/demo'
import BienBaoCam from './components/BienBaoCam'
import Meo from './components/Meo'
import SaHinh from './components/SaHinh'
import XemDapAn from './components/XemDapAn'
import TestTheoBoDe from './components/TestTheoBoDe'
import {NativeRouter,Route,Link,Switch} from 'react-router-native'
export default class componentName extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Switch>
              <Route exact path='/LoaiDichVu/:loaiBang' component={LoaiDichVu} />
              <Route exact path='/ThiSatHach/:number' component={ThiSatHach} />
              <Route exact path='/' component={PhanLoaiBang} />
              <Route exact path='/BienBaoCam' component={BienBaoCam} />
              <Route exact path='/Meo' component={Meo} />
              <Route exact path='/XemDapAn' component={XemDapAn} />
              <Route exact path='/SaHinh' component={SaHinh} />
              <Route exact path='/TestTheoBoDe/:id' component={TestTheoBoDe} />

          </Switch>
        </View>
     </NativeRouter>
    
    );
  }
}
