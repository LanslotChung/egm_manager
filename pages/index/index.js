//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    data:null,
    time:'',
    loading:false,
  },
  onLoad: function () {
    this.getDirectorInfo();
  },
  onShow:function(){
    wx.hideHomeButton();
  },
  getDirectorInfo:function(){
    wx.request({
      url: app.globalData.url + '/director/info',
      method:"post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        token: app.globalData.userInfo.token
      },
      success: (res) => {
        console.log(res)
        if (res.data && res.data.code == 1000){
          for(let i=0;i<res.data.data.productList.length;i++){
            res.data.data.productList[i].address = res.data.data.productList[i].address.split("/");
            res.data.data.productList[i].address = res.data.data.productList[i].address[1];
          }
          this.setData({
            data:res.data.data,
            time:res.header.Date
          })
        }else{
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            success: (res)=> {
              if (res.confirm) {
                this.setData({
                  loading:true
                })
              } else if (res.cancel) {
                this.setData({
                  loading:true
                })
              }
            }
          })
        }
      }
    })
  },
  goProductdetails:function(e){
    if(this.data.data.productList[e.currentTarget.dataset.index].expireTime - new Date(this.data.time)>0){
      wx.navigateTo({
        url: '/pages/productdetails/productdetails?id='+this.data.data.productList[e.currentTarget.dataset.index].projectId,
      })
    }else{
      wx.showToast({
        title: '该产品已过期',
        icon: 'none',
        duration: 2000
      })
    }
  }
})
