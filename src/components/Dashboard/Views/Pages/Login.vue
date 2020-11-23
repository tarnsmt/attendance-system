<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                  @click="toggleNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/admin">Attendance System</router-link>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" data-color=""
           data-image="static/img/background/background-2.jpg">

        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form method="#" action="#">
                  <div class="card" data-background="color" data-color="blue">
                    <div class="card-header">
                      <h3 class="card-title">Login</h3>
                    </div>
                    <div class="card-content">
                      <div class="form-group">
                        <label>Username</label>
                        <input type="email" placeholder="Enter email" class="form-control input-no-border" v-model='username'>
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" class="form-control input-no-border" v-model='password'>
                      </div>
                    </div>
                    <div class="card-footer text-center">
                      <button class="btn btn-fill btn-wd ">
                        <a @click='login' style="color:white">Login</a>
                      </button>
                      <div class="forgot">
                        <router-link to="/register">
                          Forgot your password?
                        </router-link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="full-page-background" style="background-image: url(static/img/background/background-2.jpg) "></div>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <router-link to="/register" tag="li">
          <a>Register</a>
        </router-link>
        <router-link to="/admin/overview" tag="li">
          <a>Dashboard</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import store from 'src/store/store'
  import Vuex from 'vuex'
  global.vuex = Vuex
  export default {
    data () {
      return {
        username: null,
        password: null,
        loginstate: store.state.login,
        message: null
      }
    },
    store,
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      async login () {
        if (this.username === null || this.password === null) {
          alert('Please enter username and password')
        } else {
          let payload = {
            'email': this.username,
            'password': this.password
          }
          this.apipayload = payload
          await axios.post('http://127.0.0.1:5000/user/teacher/login', this.apipayload).then(
            res => {
              this.info = res.data
              this.message = this.info['message']
              store.commit('USERNAME_CHANGE', this.username)
              store.commit('PASSWORD_CHANGE', this.password)
              store.commit('NAME_CHANGE', this.info['user_info'][1])
              store.commit('LOGIN_CHANGE', true)
              store.commit('USERID_CHANGE', this.info['user_info'][0])
              alert(this.message)
            }
          )
          await axios.get('http://127.0.0.1:5000/user/teacher/get_class?teacher_id=' + store.state.userid).then(
          res => {
            store.commit('CLASS_LIST_CHANGE', res.data['class_list'])
            this.$router.push('/admin/overview')
          }
        )
        }
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
</style>