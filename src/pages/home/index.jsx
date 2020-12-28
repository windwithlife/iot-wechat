import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'


import './index.less'


@inject('store')
@observer
class Roomdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  onLoad(){
    Taro.getSetting({
        success: function (res) {
          if (!res.authSetting['scope.record']) {
            Taro.authorize({
              scope: 'scope.record',
              success: function () {
                // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
                // Taro.startRecord()
                console.log('同意授权');
              }
            })
          }
        }
    })
  }

  roomClick() {
    Taro.navigateTo({ url: '/pages/roomDetail/index' });
  }

  render () {
    const dataArr = [{
        name:"room_1",
    },{
        name:"添加",
        type:"add"
    }]
    return (
        <View className='home_con'>
            <View className='home_header'>
                <Text className='home_title'>我的家</Text>
            </View>
            <View className='new_device'>发现新设备</View>
            <View className='room_list'>
                {
                    dataArr.map((item,idx)=>{
                        return (
                            <View className='room_con' key={idx} onClick={this.roomClick.bind(this,item)}>
                                <View className='room'>{item.name}</View>
                            </View>
                        )
                    })
                }              
            </View>
        </View>
    )
  }
}

export default Roomdetail
