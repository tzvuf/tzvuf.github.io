<template>
  <div class="main">
    <div>
      <h3>速卖通计算器</h3>
      <p>出售的价格-货物价值-国内货物物流运费-平台抽取佣金（速卖通的佣金是8个点，敦煌网的佣金大概20个点）-国际物流运费=利润</p>
      <p>包装袋大概0.02-0.04之间，还有包装袋和打印纸的成本, 一起大概算1元</p>
    </div>
    <el-form ref="form" :model="form" label-width="120px" inline>
      <el-form-item label="出售价格($)">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="货物价值(￥)">
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
      <el-form-item label="利润(￥)">
        <el-input v-model="profit" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      form: {
        weight: 50, // 重量
        price: 0, // 出售的价格
        cost: 0, // 货物价值
        logistics_cost_cn: 0, // 国内货物物流运费
        pack: 1 // 包装费
      }
    };
  },
  computed: {
    // 计算属性的 getter
    profit: function() {
      const {
        cost,
        logistics_cost_cn,
        brokerage,
        price,
        pack,
        weight
      } = this.form;
      // 0.064*50
      // 65 - 15 - 5 - （13） -（15 + 3.25）- 1 =
      // 出售的价格-货物价值-国内货物物流运费-平台抽取佣金（速卖通的佣金是8个点，敦煌网的佣金大概20个点）-国际物流运费=利润<
      // 1美元 = 6.7755人民币 汇率
      const _rmb = price * 6.7755;
      return _rmb - cost - logistics_cost_cn - (15 + 0.064 * weight) - _rmb * 0.08 - pack;
    }
  },
  methods: {
    routeTo({ id, title, category }) {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 1000px;
  margin: 0 auto;
}
</style>