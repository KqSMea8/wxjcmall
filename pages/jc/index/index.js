const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../utils/user.js');
//获取应用实例
const app = getApp();

Page({
  data: {
    notice:{
      show:false,
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

    that.setData({
      banner: [
        { "id": 1, "name": "合作 谁是你的菜", "link": "", "url": "http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg", "position": 1, "content": "合作 谁是你的菜", "enabled": true, "addTime": "2018-02-01 00:00:00", "updateTime": "2018-02-01 00:00:00", "deleted": false }, 
        { "id": 2, "name": "活动 美食节", "link": "", "url": "http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg", "position": 1, "content": "活动 美食节", "enabled": true, "addTime": "2018-02-01 00:00:00", "updateTime": "2018-02-01 00:00:00", "deleted": false }, 
        { "id": 3, "name": "活动 母亲节", "link": "", "url": "http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg", "position": 1, "content": "活动 母亲节5", "enabled": true, "addTime": "2018-02-01 00:00:00", "updateTime": "2018-02-01 00:00:00", "deleted": false }]
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