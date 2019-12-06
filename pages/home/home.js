// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   * data 中的name 对于了wxml中{{name}}的数据
   */
  data: {
    name: "jack",
    students: [{
      name: "fliay",
      age: 21
    }, {
      name: "jack",
      age: 22
    }],
    title:['西瓜','苹果','香蕉','菠萝'],
    counter: 0,
    num:0
  },

  //对应在wxml中绑定的事件
  handleBtnClient() {
    //界面不刷新
    // console.log("click"),
    //this.data.counter ++,
    // console.log(this.data.counter)
    this.setData({
      counter: this.data.counter + 1,
    })
  },

  handleMinusClient() {
    //对当前的data数据进行赋值
    this.setData({
      counter: this.data.counter - 1,
    })
  },
  isclick() {
    console.log("被点击了")
  },
  touchstart() {
    console.log("touchstart")
  },
  touchmove() {
    console.log("touchmove")
  },
  touchend() {
    console.log("touchend")
  },
  tag() {
    console.log("tag")
  },
  longpress() {
    console.log("longpress")
  },
  outter(event) {
    console.log(event)
  },
  inner(event) {
    console.log(event)
  },
  itemClick(event){
    console.log(event)
  },
  //------事件冒泡与事件捕获--------------
  capview1(){
    console.log("capview1")
  },
  view1() {
    console.log("view1")
  },
  capview2() {
    console.log("capview2")
  },
  view2() {
    console.log("view2")
  },
  capview3() {
    console.log("capview3")
  },
  view3() {
    console.log("view3")
  },
  add(){
    this.setData({
      num: this.data.num+1

    })
  },
  itemclick(event){
    console.log(event)
  },
//给组件传值
myseladd(){
  //通过界面设置的id或者class来获取组件
  const mysel = this.selectComponent("#sel-id")
  //通过setData来给组件内传值,不建议使用
  // mysel.setData({
  //   num: mysel.data.num +1
  // })
  //通过方法来给组件内传值
  mysel.myseladd(1)
}


})