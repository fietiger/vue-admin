<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-image">
        <img src="../../assets/image/login.jpg" alt="" />
      </div>
      <div class="login-from">
        <h2>会员登录</h2>
        <input type="text" placeholder="请输入用户名" />
        <input type="text" placeholder="请输入密码" />
        <button class="login-button">登&nbsp;录</button>
        <div class="login-link">
          <a href="">网站首页</a>
          <a href="">找回密码</a>
          <a href="">注册账号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #bdc8d6;
  .login-box {
    display: flex;
    width: 720px;
    height: 400px;
    background-color: #fefefe;
    border-radius: 10px;
    overflow: hidden;
    // @media screen and (min-width: 375px) {
    //   .login-image {
    //     flex: 1;
    //     img {
    //       width: 100%;
    //       height: 100%;
    //     }
    //   }
    // }

    .login-image {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-from {
      display: flex;
      box-sizing: border-box;
      padding: 18px;
      flex-direction: column;
      flex: 1;
      h2 {
        margin: 20px auto;
        color: rgb(113, 113, 113);
        font-size: 25px;
        font-weight: 500;
        text-shadow: rgba(114, 114, 115, 0.418) 1px 1px 5px;
      }
      input {
        width: 100%;
        margin: 15px 0px;
        box-sizing: border-box;
        padding: 8px 5px;
        outline: none;
        border: 1.5px solid rgb(159, 182, 182);
        border-radius: 4px;
        //设置外边线
        &:focus {
          outline: #622fce solid 2.5px;
          //外边线偏移量
          outline-offset: 3px;
          transition: 0.1s;
          border-color: rgb(255, 255, 255);
        }
      }
      .login-button {
        width: 100%;
        padding: 8px;
        color: #c2cede;
        font-size: 17px;
        border: none;
        border-radius: 6px;
        background-color: #6f0de8;
        margin-top: 20px;
        &:hover {
          transition: 0.3s;
          background-color: #6f0de8;
          opacity: 0.8;
          cursor: pointer;
        }
      }
      .login-link {
        margin-top: 25px;
        display: flex;
        justify-content: space-evenly;
        a {
          color: #717172;
          font-size: 18px;
          &:hover {
            color: #1190ff;
          }
        }
      }
    }
  }
}
</style>
