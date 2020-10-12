// pages/productdetails/productdetails.js
const app = getApp()
import * as echarts from '../../components/ec-canvas/echarts';
function setOption0(chart,data) {
  var option = {
    color:['#f59a23'],
    yAxis: {
        type: 'category',
        data: data.map(function(v){
          return v.house_type
        }),
        nameLocation:'middle',
        nameTextStyle:{
          fontSize:8,
          verticalAlign:'middle'
        }
    },
    xAxis: {
        type: 'value'
    },
    legend: {
      data: [{
        name:'访问次数'
      }],
    },
    series: [
      {
        name:'访问次数',
        type: 'bar',
        data: data.map(function(v){
          return v._num
        })
      }
    ],
    grid: {
      left: 5,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
  };
  chart.setOption(option);
}
function setOption1(chart,data) {
  var option = {
    color:['#169bd5'],
    yAxis: {
        type: 'category',
        data: data.map(function(v){
          return v.house_type
        }),
        nameLocation:'middle',
        nameTextStyle:{
          fontSize:8,
          verticalAlign:'middle'
        }
    },
    xAxis: {
        type: 'value'
    },
    legend: {
      data: [{
        name:'浏览时长'
      }],
    },
    series: [
      {
        name:'浏览时长',
        type: 'bar',
        data: data.map(function(v){
          return v._browsLength
        }),
      },
    ],
    grid: {
      left: 5,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
  };
  chart.setOption(option);
}
function setOption2(chart,data) {
  var option = {
    color:['#f59a23','#169bd5'],
    yAxis: {
        type: 'category',
        data: data.map(function(v){
          return v.name
        }),
        nameLocation:'middle',
        nameTextStyle:{
          fontSize:8,
          verticalAlign:'middle'
        }
    },
    xAxis: {
        type: 'value'
    },
    legend: {
      data: [{
          name:'回访次数',
        },
        // {
        //   name:'逾期次数',
        // }
      ],
    },
    series: [
      {
        name:'回访次数',
        type: 'bar',
        data: data.map(function(v){
          return v.returnVisitNum
        }),
      },
      // {
      //   name:'逾期次数',
      //   type: 'bar',
      //   data: data.map(function(v){
      //     return v.overdueNum
      //   }),
      // },
    ],
    grid: {
      left: 5,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
  };
  chart.setOption(option);
}
function setOption3(chart,data) {
  var option = {
    color:['#169bd5'],
    yAxis: {
        type: 'category',
        data: data.map(function(v){
          return v.name
        }),
        nameLocation:'middle',
        nameTextStyle:{
          fontSize:8,
          verticalAlign:'middle'
        }
    },
    xAxis: {
        type: 'value'
    },
    legend: {
      data: [{
        name:'逾期次数'
      }],
    },
    series: [
      {
        name:'逾期次数',
        type: 'bar',
        data: data.map(function(v){
          return v.overdueNum
        }),
      },
    ],
    grid: {
      left: 5,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
  };
  chart.setOption(option);
}
function setOption4(chart,data) {
  var option = {
    color:['#f59a23','#169bd5'],
    yAxis: {
        type: 'category',
        data: data.map(function(v){
          return v.name
        }),
        nameLocation:'middle',
        nameTextStyle:{
          fontSize:8,
          verticalAlign:'middle'
        }
    },
    xAxis: {
        type: 'value'
    },
    legend: {
      data: [{
          name:'分享次数'
        },
        // {
        //   name:'拓客次数'
        // }
      ],
    },
    series: [
      {
        name:'分享次数',
        type: 'bar',
        data: data.map(function(v){
          return v.shareNum
        }),
      },
      // {
      //   name:'拓客次数',
      //   type: 'bar',
      //   data: data.map(function(v){
      //     return v.talkNum
      //   }),
      // },
    ],
    grid: {
      left: 5,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
  };
  chart.setOption(option);
}
function setOption5(chart,data) {
  var option = {
    color:['#169bd5'],
    yAxis: {
        type: 'category',
        data: data.map(function(v){
          return v.name
        }),
        nameLocation:'middle',
        nameTextStyle:{
          fontSize:8,
          verticalAlign:'middle'
        }
    },
    xAxis: {
        type: 'value'
    },
    legend: {
      data: [{
        name:'拓客次数'
      }],
    },
    series: [
      {
        name:'拓客次数',
        type: 'bar',
        data: data.map(function(v){
          return v.talkNum
        }),
      },
    ],
    grid: {
      left: 5,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
  };
  chart.setOption(option);
}
function setOption6(chart,data,rankingType,rankingName) {
  var option = {
    color:['#169bd5'],
    yAxis: {
        type: 'category',
        data: data.map(function(v){
          return v.name
        }),
        nameLocation:'middle',
        nameTextStyle:{
          fontSize:8,
          verticalAlign:'middle'
        }
    },
    xAxis: {
        type: 'value'
    },
    legend: {
      data: [{
        name:rankingName
      }],
    },
    series: [
      {
        name:rankingName,
        type: 'bar',
        data: data.map(function(v){
          let t = 0;
          if(rankingType == 0){
            t = v.visitorNum
          }else if(rankingType == 1){
            t = v.clientNum
          }else if(rankingType == 2){
            t = v.signNum
          }else if(rankingType == 3){
            t = v.buyNum
          }
          return t
        }),
      },
    ],
    grid: {
      left: 5,
      right: 40,
      bottom: 10,
      top: 40,
      containLabel: true
    },
  };
  chart.setOption(option);
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',//产品id
    multiArray:[],//部门,置业顾问数据
    oldMultiArray:[],//部门,置业顾问数据(选择器取消时要用到)
    sysUserList:[],//所有置业顾问数据
    multiIndex:[0,0],//部门,置业顾问选择下标
    oldMultiIndex:[0,0],//部门,置业顾问选择下标(选择器取消时要用到),
    time:'',//当前时间
    index:0,//户型,客户,回访等下标
    timePhasing:0,//时间段0近一日,1近7日,2近30日
    oldHouseTypeData:null,//户型数据
    houseTypeData:null,//户型数据
    houseTypeHeight:200,//户型图表高度
    oldClientData:null,//客户数据
    clientData:null,//客户数据
    oldReturnVisitData:null,//回访数据
    returnVisitData:null,//回访数据
    returnVisiteHeight:200,//回访图表高度
    oldShareData:null,//分享数据
    shareData:null,//分享数据
    shareHeight:200,//分享图表高度
    oldRankingData:null,//排名数据
    rankingData:null,//排名数据
    rankingHeight:200,//排名图表数据
    rankingType:0,//排名类型0访客,1客户,2签约,3成交
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    this.getDirectorInfo().then(()=>{
      this.getHouseBrowingTotal();
    });
  },
  onReady: function () {
    // 获取组件
    this.ecComponent0 = this.selectComponent('#mychart-dom-bar-0');
    this.ecComponent1 = this.selectComponent('#mychart-dom-bar-1');
    this.ecComponent2 = this.selectComponent('#mychart-dom-bar-2');
    this.ecComponent3 = this.selectComponent('#mychart-dom-bar-3');
    this.ecComponent4 = this.selectComponent('#mychart-dom-bar-4');
    this.ecComponent5 = this.selectComponent('#mychart-dom-bar-5');
    this.ecComponent6 = this.selectComponent('#mychart-dom-bar-6');
    this.eci0 = this.eci1 = this.eci2 = this.eci3 = this.eci4 = this.eci5 = this.eci6 = null;
  },
  getDirectorInfo:function(){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: app.globalData.url + '/director/queryAdviserList',
        method:"post",
        header: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        data: {
          projectId: this.data.id
        },
        success: (res) => {
          if (res.data && res.data.code == 1000){
            res.data.data.sysDeptList.unshift({
              deptId:0,
              name:'全部'
            })
            res.data.data.sysUserList.unshift({
              deptId:0,
              userId:0,
              name:'全部'
            })
            this.setData({
              sysUserList:res.data.data.sysUserList,
              multiArray:[res.data.data.sysDeptList,res.data.data.sysUserList],
              oldMultiArray:[res.data.data.sysDeptList,res.data.data.sysUserList]
            })
            resolve()
          }else{
            reject()
          }
        }
      })
    })
  },
  bindMultiPickerChange:function(e){
    this.setData({
      oldMultiArray:JSON.parse(JSON.stringify(this.data.multiArray)),
      multiIndex: e.detail.value,
      oldMultiIndex:e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if(e.detail.column == 0){
      if(this.data.multiArray[0][e.detail.value].deptId == 0){
        this.data.multiArray[1] = JSON.parse(JSON.stringify(this.data.sysUserList));
      }else{
        let sysUserList = [];
        for(let i=0;i<this.data.sysUserList.length;i++){
          
          if(this.data.sysUserList[i].deptId == 0){
            console.log(this.data.sysUserList[i].name)
            sysUserList.push(JSON.parse(JSON.stringify(this.data.sysUserList[i])))
          }else if(this.data.sysUserList[i].deptId == this.data.multiArray[0][e.detail.value].deptId){
            console.log(this.data.sysUserList[i].name)
            sysUserList.push(JSON.parse(JSON.stringify(this.data.sysUserList[i])))
          }
        }
        this.data.multiArray[1] = sysUserList;
      }
      this.setData({
        multiArray:this.data.multiArray,
        multiIndex:[e.detail.value,0]
      })
    }else{
      this.setData({
        multiIndex:[this.data.multiIndex[0],e.detail.value]
      })
    }
  },
  bindMultiPickerColumnCancel:function(){
    this.setData({
      multiArray:JSON.parse(JSON.stringify(this.data.oldMultiArray)),
      multiIndex:this.data.oldMultiIndex
    })
  },
  queryFn:function(){
    this.allClear();
    if(this.data.index == 0){//户型
      this.controlHouseTypeDataFn();
    }else if(this.data.index == 1){//客户
      this.controlClientDataFn();
    }else if(this.data.index == 2){//回访
      this.controlReturnVisitDataFn();
    }else if(this.data.index == 3){//分享
      this.controlShareDataFn();
    }else if(this.data.index == 4){//排名
      this.controlRankingDataFn();
    }
  },
  timePhasingChange:function(e){//切换时间段
    if(e.currentTarget.dataset.index == this.data.timePhasing) return
    this.setData({
      timePhasing:e.currentTarget.dataset.index,
    })
    if(this.data.index == 0){//户型
      this.allClear()
      this.controlHouseTypeDataFn();
    }else if(this.data.index == 1){//客户
      this.controlClientDataFn();
    }else if(this.data.index == 2){//回访
      this.allClear()
      this.controlReturnVisitDataFn();
    }else if(this.data.index == 3){//分享
      this.allClear()
      this.controlShareDataFn();
    }else if(this.data.index == 4){//排名
      this.allClear()
      this.controlRankingDataFn();
    }
  },
  allClear:function(){    
    var ecis = [this.eci0,this.eci1,this.eci2,this.eci3,this.eci4,this.eci5,this.eci6]
    ecis.forEach((item) => {
      if(item)
        item.clear();
    });
  },
  indexChange:function(e){//切换户型,客户等
    if(e.currentTarget.dataset.index == this.data.index) return
    this.setData({
      index:e.currentTarget.dataset.index,
      multiIndex:[0,0],//重置部门置业顾问
      oldMultiIndex:[0,0],//重置部门置业顾问
      multiArray:[JSON.parse(JSON.stringify(this.data.oldMultiArray[0])),JSON.parse(JSON.stringify(this.data.sysUserList))],//重置部门置业顾问数据
      oldMultiArray:[JSON.parse(JSON.stringify(this.data.oldMultiArray[0])),JSON.parse(JSON.stringify(this.data.sysUserList))],//重置部门置业顾问数据
      timePhasing:0//重置选中时间段
    })
    if(this.data.index == 0){//户型
      this.getHouseBrowingTotal();
    }else if(this.data.index == 1){//客户
      this.getNewCustomersTotal();
    }else if(this.data.index == 2){//回访
      this.getReturnVisitList();
    }else if(this.data.index == 3){//分享
      this.getShareTotalList();
    }else if(this.data.index == 4){//排名
      this.getRankingTotalList();
    }
  },
  returnTimePhasing:function(){//计算时间
    let timePhasing = 24*60*60*1000;//时间段
    if(this.data.timePhasing == 0){
      timePhasing = timePhasing*1;
    }else if(this.data.timePhasing == 1){
      timePhasing = timePhasing*7;
    }else if(this.data.timePhasing == 2){
      timePhasing = timePhasing*30;
    }else if(this.data.timePhasing == 3){
      timePhasing = timePhasing*30*120*5;
    }
    return timePhasing
  },    
  getHouseBrowingTotal:function(){//获取户型数据
    wx.request({
      url: app.globalData.url + '/director/houseBrowingTotal',
      method:"post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        projectId: this.data.id,
      },
      success: (res) => {
        if (res.data && res.data.code == 1000){
          this.setData({
            oldHouseTypeData:res.data.data,
            time:res.header.Date
          })
          this.controlHouseTypeDataFn();
        }
      }
    })
  },
  controlHouseTypeDataFn:function(){//控制户型数据
    let timePhasing = this.returnTimePhasing();
    //置业顾问或者部门
    let deptId = this.data.multiArray[0][this.data.multiIndex[0]].deptId;
    let adviserId = this.data.multiArray[1][this.data.multiIndex[1]].userId;
    let houseTypeList = JSON.parse(JSON.stringify(this.data.oldHouseTypeData.houseTypeList));
    for(let i=0;i<houseTypeList.length;i++){
      houseTypeList[i]._num = 0;
      houseTypeList[i]._browsLength = 0;
    }
    for(let i =0;i<this.data.oldHouseTypeData.userHouseBrowsingList.length;i++){
      for(let j=0;j<houseTypeList.length;j++){
        if((houseTypeList[j].id == this.data.oldHouseTypeData.userHouseBrowsingList[i].houseId) && 
          ((new Date(this.data.time) - this.data.oldHouseTypeData.userHouseBrowsingList[i].createTime)<timePhasing) &&
          (this.data.oldHouseTypeData.userHouseBrowsingList[i].deptId == deptId || deptId == 0) &&
          (this.data.oldHouseTypeData.userHouseBrowsingList[i].adviserId == adviserId || adviserId == 0)
        ){
          houseTypeList[j]._num = houseTypeList[j]._num + this.data.oldHouseTypeData.userHouseBrowsingList[i].num;
          houseTypeList[j]._browsLength = houseTypeList[j]._browsLength + this.data.oldHouseTypeData.userHouseBrowsingList[i].browsLength;
        }
      }
    }
    houseTypeList.sort((a,b)=>{
      return a.house_type.localeCompare(b.house_type);
    });
    this.setData({
      houseTypeData:houseTypeList
    })
    //生成统计图
    this.setData({
      houseTypeHeight:houseTypeList.length/2*100+160
    })
    houseTypeList.sort((a,b)=>{
      return b.house_type.localeCompare(a.house_type);
    });
     this.ecComponent0.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      setOption0(chart,houseTypeList);
      this.eci0 = chart;
      return chart;
    });
    this.ecComponent1.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      setOption1(chart,houseTypeList);
      this.eci1 = chart;
      return chart;
    });
  },
  getNewCustomersTotal:function(){//获取客户数据
    wx.request({
      url: app.globalData.url + '/director/newCustomersTotal',
      method:"post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        projectId: this.data.id,
      },
      success: (res) => {
        console.log(res)
        if (res.data && res.data.code == 1000){
          this.setData({
            oldClientData:res.data.data,
            time:res.header.Date
          })
          this.controlClientDataFn();
        }
      }
    })
  },
  controlClientDataFn:function(){
    let timePhasing = this.returnTimePhasing();
    //置业顾问或者部门
    let deptId = this.data.multiArray[0][this.data.multiIndex[0]].deptId;
    let adviserId = this.data.multiArray[1][this.data.multiIndex[1]].userId;
    let clientData = {
      addClientNum:0,//新增客户
      addVisitorNum:0,//新增访客
      addSignNum:0,//新增签约
      addBuyNum:0,//新增购买
      clientNum:0,//客户总数
      visitorNum:0,//访客总数
      signNum:0,//签约总数
      buyNum:0//购买总数
    }
    for(let i=0;i<this.data.oldClientData.visitorList.length;i++){
      if((this.data.oldClientData.visitorList[i].deptId == deptId || deptId == 0) && 
        (this.data.oldClientData.visitorList[i].adviserId == adviserId || adviserId == 0) &&
        ((new Date(this.data.time) - this.data.oldClientData.visitorList[i].createTime)<timePhasing)
      ){
        if(this.data.oldClientData.visitorList[i].userType == 1){
          clientData.addVisitorNum = clientData.addVisitorNum + 1;
        }
        if(this.data.oldClientData.visitorList[i].userType == 2){
          clientData.addClientNum = clientData.addClientNum + 1;
        }
      }
      if((this.data.oldClientData.visitorList[i].deptId == deptId || deptId == 0) && 
        (this.data.oldClientData.visitorList[i].adviserId == adviserId || adviserId == 0)
      ){
        if(this.data.oldClientData.visitorList[i].userType == 1){
          clientData.visitorNum = clientData.visitorNum + 1;
        }
        if(this.data.oldClientData.visitorList[i].userType == 2){
          clientData.clientNum = clientData.clientNum + 1;
        }
      }
    }
    for(let i=0;i<this.data.oldClientData.userTypeAllList.length;i++){
      if((this.data.oldClientData.userTypeAllList[i].deptId == deptId || deptId == 0) && 
        (this.data.oldClientData.userTypeAllList[i].adviserId == adviserId || adviserId == 0) &&
        ((new Date(this.data.time) - this.data.oldClientData.userTypeAllList[i].dealTime)<timePhasing)
      ){
        if(this.data.oldClientData.userTypeAllList[i].dealType == 3 && this.data.oldClientData.userTypeAllList[i].status == 1){
          clientData.addSignNum = clientData.addSignNum + 1;
        }
        if(this.data.oldClientData.userTypeAllList[i].dealType == 4 && this.data.oldClientData.userTypeAllList[i].status == 1){
          clientData.addBuyNum = clientData.addBuyNum + 1;
        }
      }
      if((this.data.oldClientData.userTypeAllList[i].deptId == deptId || deptId == 0) && 
        (this.data.oldClientData.userTypeAllList[i].adviserId == adviserId || adviserId == 0)
      ){
        if(this.data.oldClientData.userTypeAllList[i].dealType == 3 && this.data.oldClientData.userTypeAllList[i].status == 1){
          clientData.signNum = clientData.signNum + 1;
        }
        if(this.data.oldClientData.userTypeAllList[i].dealType == 4 && this.data.oldClientData.userTypeAllList[i].status == 1){
          clientData.buyNum = clientData.buyNum + 1;
        }
      }
    }
    this.setData({
      clientData:clientData
    })
  },
  getReturnVisitList:function(){
    wx.request({
      url: app.globalData.url + '/director/returnVisitList',
      method:"post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        projectId: this.data.id
      },
      success: (res) => {
        if (res.data && res.data.code == 1000){
          this.setData({
            oldReturnVisitData:res.data.data,
            time:res.header.Date
          })
          this.controlReturnVisitDataFn();
        }
      }
    })
  },
  controlReturnVisitDataFn:function(){
    let timePhasing = this.returnTimePhasing();
    let deptId = this.data.multiArray[0][this.data.multiIndex[0]].deptId;
    let adviserId = this.data.multiArray[1][this.data.multiIndex[1]].userId;
    let returnVisitData = [];
    if(adviserId != 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0 && this.data.sysUserList[i].userId == adviserId){
          returnVisitData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            returnVisitNum:0,
            overdueNum:0
          })
        }
      }
    }else if(deptId == 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0){
          returnVisitData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            returnVisitNum:0,
            overdueNum:0
          })
        }
      }
    }else if(deptId != 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0 && this.data.sysUserList[i].deptId == deptId){
          returnVisitData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            returnVisitNum:0,
            overdueNum:0
          })
        }
      }
    }
    for(let i=0;i<returnVisitData.length;i++){
      for(let j=0;j<this.data.oldReturnVisitData.length;j++){
        if((returnVisitData[i].adviserId == this.data.oldReturnVisitData[j].adviserId) && 
          (returnVisitData[i].deptId == this.data.oldReturnVisitData[j].deptId ) &&
          ((new Date(this.data.time) - this.data.oldReturnVisitData[j].dealTime)<timePhasing)
        ){
          if(this.data.oldReturnVisitData[j].type == 1){
            if(this.data.oldReturnVisitData[j].status == 1){
              returnVisitData[i].returnVisitNum = returnVisitData[i].returnVisitNum + 1;
            }else if(new Date(this.data.time) - this.data.oldReturnVisitData[j].dealTime > 0){
              returnVisitData[i].overdueNum = returnVisitData[i].overdueNum + 1;
            }
          }
        }
      }
    }
    this.setData({
      returnVisitData:returnVisitData
    })
    returnVisitData.reverse()
    //生成统计图
    this.setData({
      returnVisiteHeight:returnVisitData.length/2*100+160
    })
    this.ecComponent2.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      setOption2(chart,returnVisitData);
      this.eci2 = chart;
      return chart;
    });
    this.ecComponent3.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      setOption3(chart,returnVisitData);
      this.eci3 = chart;
      return chart;
    });
  },
  getShareTotalList:function(){
    wx.request({
      url: app.globalData.url + '/director/shareTotalList',
      method:"post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        projectId: this.data.id
      },
      success: (res) => {
        if (res.data && res.data.code == 1000){
          this.setData({
            oldShareData:res.data.data,
            time:res.header.Date
          })
          this.controlShareDataFn();
        }
      }
    })
  },
  controlShareDataFn:function(){
    let timePhasing = this.returnTimePhasing();
    //置业顾问或者部门
    let deptId = this.data.multiArray[0][this.data.multiIndex[0]].deptId;
    let adviserId = this.data.multiArray[1][this.data.multiIndex[1]].userId;
    let shareData = [];
    if(adviserId != 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0 && this.data.sysUserList[i].userId == adviserId){
          shareData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            shareNum:0,
            talkNum:0
          })
        }
      }
    }else if(deptId == 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0){
          shareData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            shareNum:0,
            talkNum:0
          })
        }
      }
    }else if(deptId != 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0 && this.data.sysUserList[i].deptId == deptId){
          shareData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            shareNum:0,
            talkNum:0
          })
        }
      }
    }
    for(let i=0;i<shareData.length;i++){
      for(let j=0;j<this.data.oldShareData.userShareList.length;j++){
        if( (shareData[i].adviserId == this.data.oldShareData.userShareList[j].adviserId) &&
            (shareData[i].deptId == this.data.oldShareData.userShareList[j].deptId) &&
            ((new Date(this.data.time) - this.data.oldShareData.userShareList[j].shareTime)<timePhasing)
          ){
          shareData[i].shareNum = shareData[i].shareNum + 1;
        }
      }
      for(let j=0;j<this.data.oldShareData.visitorList.length;j++){
        if((shareData[i].adviserId == this.data.oldShareData.visitorList[j].adviserId) &&
          (shareData[i].deptId == this.data.oldShareData.visitorList[j].deptId) &&
          ((new Date(this.data.time) - this.data.oldShareData.visitorList[j].createTime)<timePhasing)
        ){
          shareData[i].talkNum = shareData[i].talkNum + 1;
        }
      }
    }
    this.setData({
      shareData:shareData
    })
    shareData.reverse()
    //生成统计图
    this.setData({
      shareHeight:shareData.length/2*100+160
    })
    this.ecComponent4.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      setOption4(chart,shareData);
      this.eci4 = chart;
      return chart;
    });
    this.ecComponent5.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      setOption5(chart,shareData);
      this.eci5 = chart;
      return chart;
    });
  },
  getRankingTotalList:function(){
    wx.request({
      url: app.globalData.url + '/director/rankingTotalList',
      method:"post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        projectId: this.data.id
      },
      success: (res) => {
        if (res.data && res.data.code == 1000){
          this.setData({
            oldRankingData:res.data.data,
            time:res.header.Date
          })
          this.controlRankingDataFn();
        }
      }
    })
  },
  controlRankingDataFn:function(){
    let timePhasing = this.returnTimePhasing();
    //置业顾问或者部门
    let deptId = this.data.multiArray[0][this.data.multiIndex[0]].deptId;
    let adviserId = this.data.multiArray[1][this.data.multiIndex[1]].userId;
    let rankingData = [];
    if(adviserId != 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0 && this.data.sysUserList[i].userId == adviserId){
          rankingData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            visitorNum:0,
            clientNum:0,
            signNum:0,
            buyNum:0
          })
        }
      }
    }else if(deptId == 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0){
          rankingData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            visitorNum:0,
            clientNum:0,
            signNum:0,
            buyNum:0
          })
        }
      }
    }else if(deptId != 0){
      for(let i=0;i<this.data.sysUserList.length;i++){
        if(this.data.sysUserList[i].userId != 0 && this.data.sysUserList[i].deptId == deptId){
          rankingData.push({
            adviserId:this.data.sysUserList[i].userId,
            name:this.data.sysUserList[i].name,
            deptId:this.data.sysUserList[i].deptId,
            visitorNum:0,
            clientNum:0,
            signNum:0,
            buyNum:0
          })
        }
      }
    }
    for(let i=0;i<rankingData.length;i++){
      for(let j=0;j<this.data.oldRankingData.visitorMaps.length;j++){
        if((rankingData[i].deptId == this.data.oldRankingData.visitorMaps[j].deptId)&&
          (rankingData[i].adviserId == this.data.oldRankingData.visitorMaps[j].adviserId) &&
          ((new Date(this.data.time) - this.data.oldRankingData.visitorMaps[j].createTime)<timePhasing)
        ){
          if(this.data.oldRankingData.visitorMaps[j].userType == 1){
            rankingData[i].visitorNum = rankingData[i].visitorNum + 1;
          }
          if(this.data.oldRankingData.visitorMaps[j].userType == 2){
            rankingData[i].clientNum = rankingData[i].clientNum + 1;
          }
        }
      }
      for(let j=0;j<this.data.oldRankingData.userDealMaps.length;j++){
        if((rankingData[i].deptId == this.data.oldRankingData.userDealMaps[j].deptId)&&
          (rankingData[i].adviserId == this.data.oldRankingData.userDealMaps[j].adviserId) &&
          ((new Date(this.data.time) - this.data.oldRankingData.userDealMaps[j].dealTime)<timePhasing)
        ){
          if(this.data.oldRankingData.userDealMaps[j].type == 3 && this.data.oldRankingData.userDealMaps[j].status == 1){
            rankingData[i].signNum = rankingData[i].signNum + 1;
          }
          if(this.data.oldRankingData.userDealMaps[j].type == 4 && this.data.oldRankingData.userDealMaps[j].status == 1){
            rankingData[i].buyNum = rankingData[i].buyNum + 1;
          }
        }
      }
    }
    this.setData({
      rankingData:rankingData
    })
    rankingData.reverse()
    //生成统计图
    this.setData({
      rankingHeight:rankingData.length/2*100+160
    })
    let rankingType = this.data.rankingType;
    let rankingName = '';
    if(rankingType == 0){
      rankingName = '访客数';
    }else if(rankingType == 1){
      rankingName = '客户数';
    }else if(rankingType == 2){
      rankingName = '签约数';
    }else if(rankingType == 3){
      rankingName = '成交数';
    }
    this.ecComponent6.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr
      });
      setOption6(chart,rankingData,rankingType,rankingName);
      this.eci6 = chart;
      return chart;
    });
  },
  rankingTypeChange:function(e){
    if(e.currentTarget.dataset.index == this.data.rankingType) return
    
    this.allClear()
    this.setData({
      rankingType:e.currentTarget.dataset.index,
    })
    this.controlRankingDataFn();
  }
})