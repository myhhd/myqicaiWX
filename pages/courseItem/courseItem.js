// pages/courseItem/courseItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    phoneNum:'13539873142',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tid=options.tid;
    wx:wx.request({
      url: 'http://127.0.0.1:3000/courseInfo',
      data: {tid:tid},
      method: 'GET',
      success:(res)=>{
        this.setData({
          info:res.data
        })
      },
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
  phoneCall:function(){
    var that=this;
    wx:wx.showActionSheet({
      itemList: ['呼叫','添加到联系人'],
      success: function(res) {
        console.log("点击电话 res:",res);
        if(res.tapIndex==0){
          wx:wx.makePhoneCall({
            phoneNumber:that.data.phoneNum,
            success: function(res_makePhone) {
              console.log('呼叫电话返回:',res_makePhone)
            },
          })
        } else if (res.tapIndex == 1){
          wx:wx.addPhoneContact({
            firstName: '关关',
            mobilePhoneNumber: that.data.phoneNum,
            success: function(res_addPhone) {
              console.log('电话联系人返回：',res_addPhone)
            },
          })
        }
      },
    })
  }
})