// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    icon: {
      normal: '../../imgs/x-3.jpg',
      active: '../../imgs/x-3-1.jpg'
    },
    icon2: {
      normal: '../../imgs/x-1.jpg',
      active: '../../imgs/x-1-1.jpg'
    },
  },
  onChange(event) {
    console.log(event.detail);

    wx.navigateTo({
      url: '../' + event.detail + ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})