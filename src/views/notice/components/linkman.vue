<template>
  <div>
    <!-- 人员列表 -->
    <person-list></person-list>
  </div>
</template>

<script>
  import personList from '../../../components/personList';
  import {MessageBox} from 'mint-ui';

  export default {
    name: "linkman",
    components: {
      personList
    },
    // 导航离开该组件的对应路由时调用
    beforeRouteLeave(to, from, next) {
      if (to.path == '/written') {
        next();
      } else {
        MessageBox.confirm('离开当前页面后，将丢失现在已经编辑好的所有通知内容，确定要返回主页吗?').then(action => {
          this.$store.commit('clearState')
          next();
        });
      }
    },
  }
</script>

<style scoped>

</style>
