<template>
  <div class="dashboard-container">
    <el-select v-model="value" placeholder="请选择楼层" style="float: right;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
      return {
        options: [{
          value: '选项1',
          label: '一层'
        }, {
          value: '选项2',
          label: '二层'
        }, {
          value: '选项3',
          label: '三层'
        }, {
          value: '选项4',
          label: '四层'
        }, {
          value: '选项5',
          label: '五层'
        }],
        value: ''
      }
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
