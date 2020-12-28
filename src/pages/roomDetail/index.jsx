import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.less'


@inject('store')
@observer
class Roomdetail extends Component {
  constructor(props) {
    super(props);
    this.itemHeight = 104;
    this.itemGap = 4;
    this.state = {
      currentItem: 0,
      topBlockHeight: '4rpx',
      bottomBlockHeight: 'calc(100vh - 244rpx)'
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  itemClick(index) {
    let topBlockHeight, bottomBlockHeight;
    topBlockHeight = `${index * this.itemHeight + this.itemGap}rpx`;
    bottomBlockHeight = `calc(100vh - ${ 140 + (index + 1) * this.itemHeight }rpx)`;
    this.setState({
      currentItem: index,
      topBlockHeight: topBlockHeight,
      bottomBlockHeight: bottomBlockHeight
    })
  }

  render () {
    const { counterStore: { counter } } = this.props.store;
    const { currentItem, topBlockHeight, bottomBlockHeight } = this.state;
    return (
      <View className='roomDetail'>
        <View className='roomDetail_header'>
          <Text className='roomDetail_title'>卧室</Text>
        </View>
        <View className='roomDetail_container'>
          <View className='roomDetail_list'>
            <View className='roomDetail_top_block' style={{height: topBlockHeight}}></View>
            <View className='roomDetail_bottom_block' style={{height: bottomBlockHeight}}></View>
            {
              [1,1,1,1,1,1].map((item, index) => {
                return (
                  <View key={index} className={`roomDetail_list_item ${index == currentItem ? "active" : ""}`} onClick={() => { this.itemClick(index) } }>
                    设备{index + 1}
                  </View>
                )
              })
            }
          </View>
          <View className='roomDetail_area'></View>
        </View>
      </View>
    )
  }
}

export default Roomdetail
