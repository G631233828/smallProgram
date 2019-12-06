// components/myevent/myevent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(event){
      //console.log(event)
      //通过triggerEvent将结果从组件中发送出去
      this.triggerEvent('increment',{},{})
    }
  }
})
