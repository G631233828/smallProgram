// components/mysel/mysel.js
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
    num:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    myseladd(o){
     this.setData({
       num:this.data.num + o
     }) 
    }

  }
})
