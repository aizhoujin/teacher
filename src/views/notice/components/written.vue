<template>
  <div>
    <div class="written">
      <input type="text" v-model="title" class="written-title" placeholder="标题">
    </div>
    <div class="addNotice" @click="addPerson">
      <div class="icon el-icon-plus"></div><span>{{classIds}}</span>
    </div>
    <div class="context">
      <textarea name="writtenContext" id="writtenContext" rows="35" placeholder="正文" v-model="context"></textarea>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "written",
    data() {
      return{
        title: '',
        context: '',
      }
    },
    computed: {
      ...mapState({
        classIds: this.$store.person.classIds,
        personIds: this.$store.person.personIds
      })
    },
    methods: {
      addPerson() {
        this.$router.push({
          path: '/linkman',
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .written {
    width: 92%;
    margin: 15px auto;
    height: 100%;
    & .written-title {
      width: 100%;
      border:0 none !important;
      outline:none;
      font-size: 16px;
      background: none;
      padding: 4px 2px;
    }
  }
  .addNotice{
    width: 92%;
    display: flex;
    margin: 15px auto;
    & .icon{
      width: 20px;
      height: 20px;
      background: #40d2b4;
      color: #fff;
      border-radius: 2px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
    }
    & span{
      color: #B5B6B6;
      font-size: 14px;
      line-height: 20px;
      text-indent: 5px;
    }
  }
  .context{
    width: 92%;
    margin: 15px auto;
    & #writtenContext{
      width: 100%;
      border:0 none !important;
      outline:none;
      font-size: 14px;
    }
  }
</style>
