<template>
  <div class="user">
    <div class="photo">
      <img src="static/img/faces/face-2.jpg"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" @click="toggleMenu" href="javascript:void(0)">
           <span>
             {{ username }}
            
          </span>
      </a>
      <div class="clearfix"></div>
      <div>

      </div>
    </div>
  </div>
</template>
<script>
  import store from 'src/store/store'
  import Vuex from 'vuex'
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  global.vuex = Vuex
  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    data () {
      return {
        isClosed: true,
        username: store.state.name
      }
    },
    methods: {
      toggleMenu () {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
<style>
  .collapsed {
    transition: opacity 1s;
  }
</style>
