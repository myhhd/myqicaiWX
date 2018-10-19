// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImgList:[],
    proList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3000/getImgList',
      method: 'GET',
      success: (res) => {
        this.setData({
          ImgList: res.data
        })
      }
    });
    wx.request({
      url: 'http://127.0.0.1:3000/productList',
      method:"GET",
      success:(res)=>{
        this.setData({
          proList:res.data
        })
      }
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
  showDetail:function(e){
    var pid=e.target.dataset.pid;
    wx.navigateTo({
      url: '../details/details?pid='+pid,
    })
  }
})