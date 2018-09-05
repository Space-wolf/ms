<template>
  <div id="home">
    <div class="os">
      <div class="os-tit">
        <div>
          系统: <span>CentOS Linux 7.3.1611 (Core)</span>
        </div>
        <div>
          已不间断运行: <span>39天12小时48分钟</span>
        </div>
        <el-button type="primary">重启服务器</el-button>
        <el-button type="primary">重启面板</el-button>
      </div>
      <ul class="os-box">
        <li class="i-box">
          <div class="ibox-lf fl">网站</div>
            <div class="ibox-rt fl">
              <div class="ibox-num">368个</div>
              <div class="ibox-btns">
                <el-button type="text">管理</el-button>
                <el-button type="text">添加</el-button>
              </div>
            </div>
            </li>
            <li class="i-box">
              <div class="ibox-lf fl">FTP</div>
              <div class="ibox-rt fl">
                <div class="ibox-num">371个</div>
                <div class="ibox-btns">
                  <el-button type="text">管理</el-button>
                  <el-button type="text">添加</el-button>
                </div>
              </div>
            </li>
            <li class="i-box">
            <div class="ibox-lf fl">数据库</div>
            <div class="ibox-rt fl">
            <div class="ibox-num">370个</div>
            <div class="ibox-btns">
              <el-button type="text">管理</el-button>
              <el-button type="text">添加</el-button>
            </div>
          </div>
        </li>
      </ul>
      </div>
      <div class="server">
        <div class="s-head">
            服务器状态
          <el-button type="text" class="ml">连接管理</el-button>
          <el-button type="text">状态管理</el-button>
        </div>
      <div class="s-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.os{
    height: 191px;
    background: #fff;
    margin: 15px 0;
  }
  .os .os-tit{
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    border-bottom: 1px solid #c0c0c0;
  }
  .os-tit div{
    display: inline-block;
    margin-right: 30px;
  }
  .os .os-box{
    height: 110px;
    padding: 15px 0;
  }
  .os-box .i-box{
    float: left;
    padding: 0 15px;
    height: 110px;
  }
  .i-box .ibox-lf{
    width: 55px;
    height: 110px;
    text-align: center;
    line-height: 110px;
    color: #fff;
    background: #409EFF;
  }
  .i-box .ibox-rt{
    width: 263px;
    height: 78px;
    padding: 15px 0;
    border: 1px solid #c0c0c0;
  }
  .ibox-rt .ibox-num{
    height: 40px;
    line-height: 40px;
    font-size: 28px;
    text-align: center;
  }
  .ibox-rt .ibox-btns{
    padding-left: 70px;
    height: 38px;
  }
  .ibox-btns .el-button{
    padding-right: 20px;
    font-size: 16px;
  }
  .server{
    height: 251px;
    background: #fff;
  }
  .server .s-head{
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    border-bottom: 1px solid #c0c0c0;
  }
  .s-head .ml{
    margin-left: 40px;
  }
</style>
