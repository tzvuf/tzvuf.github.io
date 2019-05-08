<template>
  <div class="main">
    <div>
      <h2 style="text-align: center">速卖通计算器</h2>
      <!-- <p>出售的价格-货物价值-国内货物物流运费-平台抽取佣金（速卖通的佣金是8个点，敦煌网的佣金大概20个点）-国际物流运费=利润</p>
      <p>包装袋大概0.02-0.04之间，还有包装袋和打印纸的成本, 一起大概算1元</p> -->
    </div>
    <el-form ref="form" :model="form" label-width="200px" inline>
      <el-row :gutter="10"><strong>固定设置</strong></el-row>
      <el-row :gutter="10">
        <el-form-item label="美元汇率">
          <el-input v-model="form.exchange_rate"></el-input>
        </el-form-item>
        <el-form-item label="挂号费(￥)">
          <el-input v-model="form.registration_fee" disabled></el-input>
        </el-form-item>
        <el-form-item label="计重费(￥)">
          <el-input v-model="form.weighted_fee" disabled></el-input>
        </el-form-item>
      </el-row>
      <hr class="hr_row" />
      <el-row :gutter="10"><strong>成本设置</strong></el-row>
      <el-row :gutter="10">
        <el-form-item label="进货价格(￥)">
          <el-input v-model="form.cost"></el-input>
        </el-form-item>
        <el-form-item label="国内物流费(￥)">
          <el-input v-model="form.logistics_cost_cn"></el-input>
        </el-form-item>
        <el-form-item label="重量（g）">
          <el-input v-model="form.weight"></el-input>
        </el-form-item>
        <el-form-item label="包装费(￥)">
          <el-input v-model="form.pack" disabled></el-input>
        </el-form-item>
        <el-form-item label="货物成本(￥)">
          <el-input v-model="price" disabled></el-input>
        </el-form-item>
      </el-row>
      <hr class="hr_row" />
      <el-row :gutter="10"><strong>利润计算</strong></el-row>
      <el-row :gutter="10">
        <el-form-item label="平台折扣率(%)">
          <el-input v-model="form.discount_rate"></el-input>
        </el-form-item>
        <el-form-item label="佣金比例(%)">
          <el-input v-model="form.brokerage_rate"></el-input>
        </el-form-item>
        <el-form-item label="利润率(%)">
          <el-input v-model="form.profit_rate"></el-input>
        </el-form-item>
        </el-row>
        <el-row :gutter="10">
        <el-form-item label="售价($美元)">
          <el-input v-model="discount_price_en" disabled></el-input>
        </el-form-item>
        <el-form-item label="售价(￥人民币)">
          <el-input v-model="discount_price" disabled></el-input>
        </el-form-item>
        </el-row>
        <el-row :gutter="10">
          <el-form-item label="折扣价-实际卖价($美元)">
            <el-input v-model="sell_price_en" disabled></el-input>
          </el-form-item>
          <el-form-item label="折扣价-实际卖价(￥人民币)">
            <el-input v-model="sell_price" disabled></el-input>
          </el-form-item>
        </el-row>
        <el-row :gutter="10">
        <el-form-item label="利润(￥)">
          <el-input v-model="profit_price" disabled></el-input>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      form: {
        registration_fee: 15, //挂号费
        weighted_fee: 0.064, //计重费
        weight: 50, // 重量
        cost: 60, // 进货价格
        logistics_cost_cn: 5, // 国内货物物流运费
        pack: 1, // 包装费
        exchange_rate: 6.7683, // 美元汇率
        profit_rate: 50, // 利润率 %
        discount_rate: 30, // 平台折扣率 %
        brokerage_rate: 8 // 佣金比例 %
      }
    };
  },
  computed: {
    // 货物成本
    price: function(vm) {
      const { cost, logistics_cost_cn, weight, pack, registration_fee, weighted_fee } = vm.form;
      // 商品价格 + 国内物流 + （挂号费 + 重量 * 0.064） + 包装费
      let _weight = weight < 50 ? 50 : weight;
      return parseFloat(cost) + parseFloat(logistics_cost_cn) + (parseFloat(registration_fee) + (parseFloat(weighted_fee) * _weight)) + parseFloat(pack);
    },
    // 显示售价(人民币)
    discount_price: function(vm) {
      const { profit_rate, discount_rate, brokerage_rate } = vm.form;
      // 期望利润 
      const _profit_rate = (parseFloat(profit_rate) / 100);
      const _profit = vm.price * _profit_rate;
      // 成本 + 期望利润 
      let p = vm.price + _profit;
      // 加上平台折扣
      p = p + p * (parseFloat(discount_rate) / 100);
      // 加上佣金
      p = p + p * (parseFloat(brokerage_rate) / 100);
      return p;
    },
    // 显示售价(美元)
    discount_price_en: function(vm) {
      const _p = vm.discount_price / vm.form.exchange_rate;
      return _p.toFixed(4);
    },
    // 折扣价(人民币)
    sell_price: function(vm) {
      const { profit_rate, discount_rate } = vm.form;
      return vm.discount_price * ((100 - parseFloat(discount_rate)) / 100);
    },
    // 折扣价(美元)
    sell_price_en: function(vm) {
      const _p = vm.sell_price / vm.form.exchange_rate;
      return _p.toFixed(4);
    },
    // 利润
    profit_price: function(vm) {
      const { brokerage_rate, discount_rate, exchange_rate } = vm.form;
      // 扣除佣金
      const _brokerage_rate = vm.sell_price_en * (parseFloat(brokerage_rate) / 100);
      const _exchange_rate = parseFloat(exchange_rate);
      const _p = (parseFloat(vm.sell_price_en) - parseFloat(_brokerage_rate) - (vm.price / _exchange_rate)) * _exchange_rate;
      return _p.toFixed(4);
    }
  },
  methods: {
    conversion() {
      return ;
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
}
.hr_row{
  margin-top: 0px;
  margin-bottom: 15px;
  border:solid 1px #EEE;
}
</style>

