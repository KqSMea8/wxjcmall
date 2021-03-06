/**
 * 用户相关服务
 */
const util = require('../utils/util.js');
const api = require('../config/api.js');


/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function(resolve, reject) {
    wx.checkSession({
      success: function() {
        resolve(true);
      },
      fail: function() {
        reject(false);
      }
    })
  });
}

/**
 * Promise封装wx.login 
 */
function login() {
  return new Promise(function(resolve, reject) {
    wx.login({
      success: function(res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function(err) {
        reject(err);
      }
    });
  });
}

/**
 * 调用微信登录
 */
function loginByWeixin(userInfo) {
  return new Promise(function(resolve, reject) {
    return login().then((res) => {
      //登录远程服务器
      userInfo.code = res.code;
      util.request(api.AuthLoginByWeixin, userInfo, 'POST').then(res => {
        if (res.errno === 0) {
          //存储用户信息
          wx.setStorageSync('userInfo', userInfo);
          wx.setStorageSync('token', res.token);
          if (res.isGetunionId){
            console.log('get unionid')
            wx.getUserInfo({
              withCredentials: true,
              success(res) {
                if (res.errMsg == "getUserInfo:ok"){
                  var param = {};
                  param.encryptedData = res.encryptedData;
                  param.iv = res.iv;
                  param.openid = wx.getStorageSync('token');
                  util.request(api.GetWxUserUnionId, param, 'POST').then(res => {
                    console.log('Save UnionId OK.');
                    resolve(res);
                  }).catch((err) => {
                    reject(err);
                  });
                }
                
              }
            })
          }
          resolve(res);
        } else {
          reject(res);
        }
      }).catch((err) => {
        reject(err);
      });
    }).catch((err) => {
      reject(err);
    })
  });
}

/**
 * 判断用户是否登录
 */
function checkLogin() {
  return new Promise(function(resolve, reject) {
    if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')) {
      checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });
    } else {
      reject(false);
    }
  });
}

module.exports = {
  loginByWeixin,
  checkLogin,
};