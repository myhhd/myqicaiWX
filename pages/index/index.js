//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    ImgList:[],
    rows:[],
  },
  onLoad:function(options){
    wx.request({
      url: 'http://127.0.0.1:3000/getImgList',
      method:'GET',
      success:(res)=>{
        this.setData({
          ImgList: res.data
        })
      }
    });
    wx.request({
      url: 'http://127.0.0.1:3000/detailList',
      method:'GET',
      success:(res)=>{
        this.setData({
          rows:res.data
        })
      }
    })
  }
})
