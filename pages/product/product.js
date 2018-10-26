// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ImgList:[],
    proList:[],
    pageIndex: 0,
    pageSize: 6,
    hasMore: true,
    tid: 1
  },
  loadMore:function(tid){
    if(!this.data.hasMore)return;
    wx.request({
      url: 'http://127.0.0.1:3000/productList',
      data:{
        pageSize:this.data.pageSize,
        pno:++this.data.pageIndex,
        tid:tid
      },
      dataType:"json",
      success:(res)=>{
        var newList = this.data.proList.concat(res.data.msg);
        var pageCount = res.data.pageCount;
        var flag = this.data.pageIndex < pageCount;
        this.setData({
          proList: newList,
          hasMore: flag
        })
      }
    })
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
    this.loadMore(1)
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
    this.setData({
      proList:[],
      pageIndex:0,
      hasMore:true
    });
    var tid=this.data.tid;
    this.loadMore(tid);
    //停止当前操作
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var tid = this.data.tid
    this.loadMore(tid);
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