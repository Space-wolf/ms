<template>
    <div id="login" :style="{height: bodyHeight}">
        <div class="main">
            <div class="linux">Linux面板</div>
            <el-form ref="form">
                <el-form-item>
                    <el-Input placeholder="账号"></el-Input>
                </el-form-item>
                <el-form-item>
                    <el-Input placeholder="密码"></el-Input>
                </el-form-item>
                <el-form-item>
                    <button class='loginBtn'>登陆</button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    bodyHeight: function () {
      return document.documentElement.clientHeight + 'px'
    }
  }
}
</script>
<style>
    #login{
        position: relative;
        width:100%;
        background: #444;
    }
    #login .main{
        position: absolute;
        left: 50%;
        top: 20%;
        background: #fff;
        width: 360px;
        margin-left: -220px;
        padding:35px 40px;
        border-radius: 10px;
    }
    .main .linux{
        height: 48px;
        line-height: 48px;
        text-align: center;
        color: #444;
        font-size: 30px;
        margin-bottom: 10px;
    }
    .loginBtn{
        width: 100%;
        height: 38px;
        font-size: 16px;
        border: 1px;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        border-radius: 4px;
    }
</style>
