// pages/04-xcheng/04-xcheng.js
Page({
  handleGetUserInfo(event) {
    console.log(event)
  },
  /**
   * 页面的初始数据
   */
  data: {
    itemBeans:[
      {
        "type":0,
        "imageUrl":'../../images/apIco1.png',
        "title":'111',
        "tagUrl":'',
        "items":[
          {"imageUrl":'',"title":'海外酒店',"tagUrl":''},
          { "imageUrl": '', "title": '团购', "tagUrl": '' },
          { "imageUrl": '', "title": '特价酒店', "tagUrl": '' },
          { "imageUrl": '', "title": '民宿酒店', "tagUrl": '' }
        ],
        "bgColor":'#fb5265'
      },
      {
        "type": 0,
        "imageUrl": '../../images/apIco2.png',
        "title": '222',
        "tagUrl": '',
        "items": [
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' },
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' },
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' },
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' }
        ],
        "bgColor": 'green'
      },
      {
        "type": 0,
        "imageUrl": '../../images/apIco3.png',
        "title": '333',
        "tagUrl": '',
        "items": [
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' },
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' },
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' },
          { "imageUrl": '', "title": '海外酒店', "tagUrl": '' }
        ],
        "bgColor": 'blue'
      }
    ]
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