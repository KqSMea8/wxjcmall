const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../utils/user.js');
//获取应用实例
const app = getApp();

Page({
  data: {
    notice:{
      show:true,
      id:'sdfsafsafsafd',
      text:'检测服务，商城服务，需求发布，需求询单等功能,欢迎。。',
      mode:'link',//closeable link
      url:"/pages/jc/sysinfo/index?uid=",
      delay:0,
      speed:20,
      color:'#ff0000',
      backgroundColor:'#ff0'
    },
    brands:[],
    hiddenItems:true
  },

  onShareAppMessage: function() {
    return {
      title: '简测商城',
      desc: '检测服务，商城服务，需求发布，需求询单等功能',
      path: 'pages/js/index/index?type=share'
    }
  },

  getJcAdData: function() {
    let that = this;
    util.request(api.JcAds, {}, 'POST').then(function (res) {
      console.log(res)
      that.setData({
        banner: res
      });
    });
  },
  onLoad: function(options) {
    console.log(options);
    var that = this;
    this.getJcAdData();
   
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function (options) {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  showItems(event){
    var that = this;
    this.setData({ hiddenItems: (!that.data.hiddenItems)});
  }
})