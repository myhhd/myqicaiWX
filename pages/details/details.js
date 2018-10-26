// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgBan:[],
    details:{},
    Info:{},
    imgList:[],
    Title:'',
    showCart:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pid=options.pid;
    wx.request({
      url: 'http://127.0.0.1:3000/detailsInfo',
      data:{pid:pid},
      method:"GET",
      success:(res)=>{
        this.setData({
          imgBan:res.data.imgBanner,
          details:res.data.details,
          Info:res.data.Info,
          imgList:res.data.imgList,
          Title:res.data.details.title
        })
      }
    })
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  backHome:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  addCartTo:function(){
    this.setData({
      showCart:true
    })
  },
  closeCart:function(){
    this.setData({
      showCart:false
    })
  }
})