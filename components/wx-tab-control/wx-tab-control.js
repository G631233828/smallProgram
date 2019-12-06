// components/wx-tab-control/wx-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      const index = event.currentTarget.dataset.index
      //console.log(event.currentTarget.dataset.index)
      this.setData({
        currentIndex: index
      }),
      //通知外部组件中的点击事件
      this.triggerEvent('itemclick',{index,title:this.properties.titles[index]});
    }
  }
})
