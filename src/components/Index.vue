<template>
<div class="step-div">
<el-steps :active="active">
  <el-step title="步骤 1" icon="edit"></el-step>
  <el-step title="步骤 2" icon="upload"></el-step>
  <el-step title="步骤 3" icon="picture"></el-step>
  <el-step title="步骤 4" icon="picture"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 3) this.active = 0
    }
  }
}
</script>

<style scoped>
  .step-div {
    width:80%;
  }
</style>

