<template>
    <div class="main">
        <RouterLink to="/home" class="logo"><img src="../assets/jianshu/logo.png" class="logo"/></RouterLink>
        <div class="left">
            <div class="download">
                <img src="../assets/jianshu/phone.png" class="phone" />
                <div class="downloadWay">
                    <button class="btn">下载简书APP</button>
                    <div class="codeDiv">
                        <img src="../assets/jianshu/qrcode.jpg" class="code" />
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="card">
                <div class="tab">
                    <RouterLink to="/login" class="login">登陆</RouterLink>
                    <div class="dot">·</div>
                    <RouterLink to="/register" class="register" 
                        @mouseenter="onHover = true" 
                        @mouseleave="onHover=false">
                        注册
                    </RouterLink>
                </div>
                <div style="height: 2px">
                    <div class="line"></div>
                    <div class="lineShow" v-show="onHover"></div>
                </div>
                <div class="container">
                    <div class="inputBox">
                        <div class="inputLine">
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-wode"></use>
                            </svg>
                            <input type="text" placeholder="手机号或邮箱">
                        </div>
                        <div class="inputLine">
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-a-13Csuo"></use>
                            </svg>
                            <input type="password" placeholder="密码">
                        </div>
                    </div>
                    <div class="content">
                        <div style="flex: 1;display:flex">
                            <input type="checkbox" class="check">
                            <div style="width:100px">记住我</div>
                        </div>
                        <div>登录遇到问题?</div>
                    </div>
                    <button class="loginBtn">登录</button>
                </div>
                <img src="../assets/jianshu/ThirdLogin.jpg" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let onHover = ref(false)
</script>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    background: #f1f1f1;
    padding: 30px 10px;
    display: flex;
}
.left, .right {
    flex: 1;
}
.logo {
    width: 180px;
    height: 101px;
    position: absolute;
    z-index: 10;
}
.download {
    display: flex;
    padding: 20px 35px;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

.phone {
    width: 332px;
    height: 422px;
}

.downloadWay {
    display: flex;
    flex-direction: row;
    width: 340px;
    padding: 35px 0 0 25px;
}

.btn {
    border: none;
    background: #ea6f5a;
    color: #fff;
    text-align: center;
    width: 252px;
    height: 46px;
    border-radius: 50px;
    font-size: 18px;
    margin-right: 20px;
}

.codeDiv {
    background: #fff;
    border-radius: 5px;
    padding: 5px;
    width: 50px;
    height: 50px;
}

.code {
    width: 40px;
    height: 40px;
}

.card {
    margin-top: 30px;
    margin-left: 10px;
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 2px 2px 5px #d3d3d3;
    width: 400px;
    min-height: 500px;
    padding: 50px 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.tab {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.dot {
    color: #969696;
    font-size: 24px;
    margin: 0 20px;
}

.login {
    color: #ea6f5a;
    font-size: 18px;
    font-weight: 700;
}

.line {
    height: 1.5px;
    width: 55px;
    background: #ea6f5a;
    position: relative;
    left: 81px;
}

.register {
    color: #969696;
    font-size: 18px;
    font-weight: 700;
}

.lineShow {
    height: 1.5px;
    width: 55px;
    background: #ea6f5a;
    position: relative;
    top: -1.5px;
    left: 162px;
}

.container {
    flex: 1;
    padding-top: 40px;
}

input {
    border: none;
    background: #f7f7f7;
    padding: 15px;
    font-size: 16px;
    width: 100%;
    margin: 0;
    outline: none;/*清除input点击之后的黑色边框*/
}

input::-webkit-input-placeholder{
	color:#a1a0a0;
}

.inputBox {
    border-radius: 5px;
    background: #f7f7f7;
    border: 1px #c8c8c8 solid;
}

.inputLine {
    display: flex;
    background: #f7f7f7;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    border-radius: 5px;
}

.inputLine:first-child {
    border-radius: 5px 5px 0 0;
    border-bottom: 1px #c8c8c8 solid;
}

.content {
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 14px;
    color:#a1a0a0;
}

.check {
    margin: 0;
    padding: 0;
    width: 20px;
}

.loginBtn {
    border: none;
    background: #3194d0;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 46px;
    border-radius: 50px;
    font-size: 18px;
}

.loginBtn:hover {
    background: #187cb7;
}


</style>