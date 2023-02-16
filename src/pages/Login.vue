<script lang="ts" setup>
import { reactive } from "vue";
import { axiosInstance } from "@/services";
const payloadLogin = reactive({
  username: "",
  password: "",
});

const handlerLogin = async () => {
  try {
    const data = await axiosInstance.post("/auth/login", payloadLogin);
    console.log("data", data);
  } catch (error) {
    console.log("er", error);
  }
};
</script>

<template>
  <div class="limiter">
    <div class="container-login">
      <div class="wrap-login">
        <form class="login-form validate-form p-l-55 p-r-55 p-t-178">
          <!-- @submit.prevent="handlerLogin" -->
          <div class="login-form-title"><span> Sign In </span></div>
          <div
            class="wrap-input validate-input m-b-16"
            data-validate="Please enter username"
          >
            <input
              class="input"
              type="text"
              placeholder="Username"
              v-model="payloadLogin.username"
            />
            <span class="focus-input"></span>
          </div>
          <div
            class="wrap-input validate-input"
            data-validate="Please enter password"
          >
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="payloadLogin.password"
            />
            <span class="focus-input"></span>
          </div>
          <div class="container-login-form-btn">
            <button class="login-form-btn" @click.prevent="handlerLogin()">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.limiter {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container-login {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    position: relative;
    background-color: #fff;
    .wrap-login {
      width: 500px;
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%);
      .login-form {
        .login-form-title {
          background-color: green;
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            color: white;
            font-size: 1.3rem;
            font-weight: 700;
          }
        }

        .wrap-input {
          &:nth-child(2) {
            padding-top: 2rem;
          }
          padding: 1rem 3rem 0 3rem;
          input {
            width: 100%;
            border: 0;
            outline: 0;
            height: 2.5rem;
            background-color: #f3f3f3;
            padding: 0.3rem;
            border-radius: 0.4rem;
          }
        }

        .container-login-form-btn {
          padding: 1rem 3rem 2rem 3rem;
          width: 100%;
          button {
            width: 100%;
            background-color: rgba($color: green, $alpha: 0.8);
            color: white;
            height: 2.5rem;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
