<template>
  <div>
    <div class="payroll-head" @click="changeDate">
      <span>{{pickerVisible | dateFil}}</span>
      <i class="el-icon-arrow-down"></i>
    </div>
    <div class="payroll-counnt">
      <div class="payroll-count-title">实发金额</div>
      <div class="payroll-count-number">{{sumMoney | currency}}</div>
      <el-button type="primary" style="width: 212px; height: 40px;font-size: 20px;" :disabled="isConfirm == 1"
                 @click="confirm">确认无误
      </el-button>
      <div class="payroll-count-hint">如工资发放无误，请操作确认</div>
      <div class="chain">
        <div class="chain-li">
          <div class="chain-li-top"></div>
          <div class="chain-li-bottom"></div>
          <div class="chain-li-line"></div>
        </div>
        <div class="chain-li">
          <div class="chain-li-top"></div>
          <div class="chain-li-bottom"></div>
          <div class="chain-li-line"></div>
        </div>
      </div>
    </div>
    <div class="payroll-detail">
      <div class="payroll-detail-title">工资详情</div>
      <div v-if="payollDetaill.length == 0" style="text-align: center;margin-top: 60px;color: #909399;font-size: 13px">
        暂无数据
      </div>
      <div class="payroll-detail-list">
        <div class="payroll-detail-list-li"
             v-for="(item,index) in payollDetaill" :key="index">
          <div>{{item.payunitName}}</div>
          <div><span>{{item.payUnitEntity&& item.payUnitEntity.type == 0 ? "+" : "-"}}</span> {{item.money | currency}}
          </div>
        </div>
      </div>

    </div>
    <mt-datetime-picker
      v-model="pickerVisible"
      class="payroll-date"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      @confirm="handleConfirm"
    >
    </mt-datetime-picker>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import {DatetimePicker} from 'mint-ui';
  import {getPayroll, confirmPayroll} from '../../../api/user'

  export default {
    name: "payroll",
    data() {
      return {
        pickerVisible: new Date(),
        payollData: null,
        sumMoney: "00.00",
        payollDetaill: [],
        isConfirm: 1
      }
    },
    methods: {
      // 获取工资
      getPayroll() {
        let obj = {
          year: this.pickerVisible.getFullYear(),
          month: this.pickerVisible.getMonth() + 1
        }
        this.$store.commit('loadChange', true);
        getPayroll(obj).then(res => {
          this.$store.commit('loadChange', false);
          if (res.data.data) {
            this.payollData = res.data.data;
            this.sumMoney = this.payollData.sumMoney;
            this.payollDetaill = this.payollData.detailList;
            this.isConfirm = this.payollData.isConfirm;
          }
        })
          .catch(err => {
            this.$store.commit('loadChange', false);
          })
      },

      // 切换日期
      changeDate() {
        this.$refs.picker.open();
      },

      handleConfirm() {
        this.getPayroll();
      },

      // 确认无误
      confirm() {
        let recordId = this.payollData.id;
        confirmPayroll(recordId).then(res => {
          Toast({
            message: res.data.msg,
            position: 'center',
            duration: 2000
          });
        })
      }
    },
    mounted() {
      this.getPayroll();
    },
    filters: {
      currency: (value, currency, decimals) => {
        value = parseFloat(value)
        const digitsRE = /(\d{3})(?=\d)/g
        if (!isFinite(value) || (!value && value !== 0)) return ''
        currency = currency != null ? currency : ''
        decimals = decimals != null ? decimals : 2
        var stringified = Math.abs(value).toFixed(decimals)
        var _int = decimals
          ? stringified.slice(0, -1 - decimals)
          : stringified
        var i = _int.length % 3
        var head = i > 0
          ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
          : ''
        var _float = decimals
          ? stringified.slice(-1 - decimals)
          : ''
        var sign = value < 0 ? '-' : ''
        return sign + currency + head +
          _int.slice(i).replace(digitsRE, '1,') +
          _float;
      },
      dateFil: (value) => {
        console.log(value)
        return value.getFullYear() + '年' + (value.getMonth() + 1) + '月'
      }
    }
  }
</script>

<style scoped lang="scss">
  .payroll-head {
    width: 100%;
    height: 137px;
    color: #fff;
    font-size: 20px;
    padding-top: 21px;
    text-align: center;
  }

  .payroll-counnt {
    width: 90%;
    height: 235px;
    margin: 0 auto;
    margin-top: -70px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  .payroll-counnt {
    text-align: center;
    position: relative;
    .payroll-count-title {
      color: #1F2423;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
      padding-top: 30px;
    }
    .payroll-count-number {
      color: #1F2423;
      font-size: 36px;
      font-weight: bold;
      height: 50px;
      line-height: 50px;
      margin: 7px 0px 15px 0px;
    }
    .payroll-count-hint {
      margin-top: 10px;
      height: 20px;
      line-height: 20px;
      color: #717373;
      font-size: 14px;
    }
    .chain {
      position: absolute;
      bottom: -25px;
      left: 10%;
      width: 80%;
      display: flex;
      justify-content: space-between;
      .chain-li {
        .chain-li-top {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #656565;
          z-index: 9;
        }
        .chain-li-line {
          width: 12px;
          height: 40px;
          background-color: #D8D8D8;
          border-radius: 7px;
          margin-left: 3px;
          margin-top: -12px;
          z-index: 10;
        }
        .chain-li-bottom {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #656565;
          margin-top: -50px;
          z-index: 9;
        }
      }
    }
  }

  .payroll-detail {
    border-radius: 8px;
    background-color: #ffffff;
    width: 90%;
    margin: 10px auto;
    padding-top: 20px;
    .payroll-detail-title {
      width: 100%;
      text-align: center;
      font-size: 16px;
      height: 22px;
      line-height: 22px;
    }
    .payroll-detail-list {
      padding-bottom: 10px;
      min-height: 200px;
      .payroll-detail-list-li {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #EBEDED;
      }
    }
  }

</style>
