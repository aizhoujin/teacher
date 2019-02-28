<template>
  <div id="app" v-loading="loading">
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  data() {
    return{

    }
  },
  computed: {
    ...mapState({
      loading: state => state.common.loading
    }),
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
