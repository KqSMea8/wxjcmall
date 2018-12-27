const util = require('../../../utils/util.js');
const api = require('../../../config/api.js');
const user = require('../../../utils/user.js');
var WxParse = require('../../../lib/wxParse/wxParse.js');
//获取应用实例
const app = getApp();

Page({
  data: {
    uid:'',
    title: '',
    time:'',
    content:''
  },
  onLoad: function(options) {
    console.log(options);
    this.setData({
      uid: options.uid,
      title: '第13届D2前端技术论坛（D2前端技术论坛 2018）将于2019年1月6日在杭州和达希尔顿逸林酒店举办',
      time: '2012-12-12 12:21',
      content: `<div class="markdown-text"><p>第13届D2前端技术论坛（D2前端技术论坛 2018）将于2019年1月6日在杭州和达希尔顿逸林酒店举办。\n大会官方网站：<a href="http://d2forum.alibaba-inc.com">http://d2forum.alibaba-inc.com</a> 如果你对本次会议感兴趣，立即访问报名吧！</p>\n<p>历时近 10 年的发展,成功举办了 12 届，D2 为国内前端领域的开发者和设计者，以及所有对前端技术感兴趣的人提供一个交流的机会，以技术会友， 一起分享技术的乐趣,探讨行业的发展。</p>\n<p><img src="//static.cnodejs.org/FtjmBMJk3gso7WqNdgO_twrXkWU7" alt="D2-2nd.jpg"><img src="//static.cnodejs.org/FtjmBMJk3gso7WqNdgO_twrXkWU7" alt="D2-2nd.jpg"></p>\n<p>本次大会将设置3个分场，6大主题方向。将邀请近30位演讲嘉宾，给大家带来最前沿，最实用，最有价值的演讲，值得你期待！\n如果你想参加本次大会，可以访问大会网站（<a href="http://d2forum.alibaba-inc.com">http://d2forum.alibaba-inc.com</a>）立即购买门票。</p>\n<h3>大会门票</h3>\n<p>本次大会一共设置四个类型的门票：</p>\n<ul>\n<li>早鸟票（459元）</li>\n<li>早鸟拼团票 （3人成团，只需要399元）</li>\n<li>普通票 （559元）</li>\n<li>晚鸟票 （659元）</li>\n</ul>\n<p>现在就可以购买早鸟票或者早鸟拼团票，数量有限，购买时间也有限制，如果你对本次会议感兴趣，那就赶紧拿起手机访问大会网站购票吧：</p>\n<p>第13届D2前端技术论坛将于2019年1月6日在杭州举办！抢票进行中…  </p>\n<p>2019年1月6日，期待与你在D2现场相见！</p>\n</div>","title":"第13届D2前端技术论坛将于2019年1月6日在杭州举办，6大主题方向等你来听`
    });
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
    wx.showLoading({
        title:  '加载中...',
    });
    var  that  =  this;
    WxParse.wxParse('article',  'html', that.data.content,  that,  10);
    wx.hideLoading();
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  wxParseTagATap: function (e) {
    var self = this;
    var href = e.currentTarget.dataset.src;
    wx.setClipboardData({
      data: href,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '链接已复制',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  }

})