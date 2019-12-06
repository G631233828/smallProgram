// components/myslotmore/myslotmore.js
Component({
//设置多插槽 multipleSlots ：true
//组件中的样式与调用组件样式共享（设置样式的隔离方式）  styleIsolation:"shared"
options: {
  multipleSlots:true
},

  /**
   * 组件的属性列表
   * 使用者可以给组件传入数据
   * observer监听属性的改变
   */
  properties: {
    title:{
      type:String,
      value:'',
      observer:function(newval,oldval){

      }
    }
  },

  /**
   * 组件的初始数据
   * 定义组件内部初始化数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表
   * 定义方法给调用组件的页面去调用
   */
  methods: {
    test(){

    }

  },

  /***
   * 外界给组件传入额外的样式
   */
  externalClasses:['xxxx','xxx'],


/**
 * 监听properties/data的改变  没有oldval
 */
observers:{
  count:function(newval){
    console.log(newval)
  }
},

/**
 * 组件中的生命周期函数
 * 
 */
//1 监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件所在页面显示出来时")
    },
    hide(){
      console.log("监听组件所在页面隐藏起来时")
    },
    resize(){
      console.log("监听页面尺寸的改变")
    }

  },


//2 监听组件本身的什么周期
lifetimes:{
  created(){
    console.log("组件被创建出来")
  },
  attached(){
    console.log("组件被添加到页面")
  },
  ready(){
    console.log("组件被渲染出来")
  },
  move(){
    console.log("组件被移动")
  },
  dettached(){
    console.log("组件被移除")
  }

}

})
