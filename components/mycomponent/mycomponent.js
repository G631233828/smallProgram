// components/mycomponent/mycomponent.js
Component({
  /**
   * 组件的属性列表 在properties中设置属性，可以变成动态配置属性
   */
  properties: {
    title:{
      type: String,
      value: "默认标题",
      /**observer实现监听 可以查看旧值与新值 */
      observer:function(newval,oldval){
        console.log(newval,oldval)
      }
    },
   
  },
  externalClasses: ['contentclass'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
