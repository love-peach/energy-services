<template>
  <el-container>
    <el-header>
      <CustomHeader></CustomHeader>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import CustomHeader from './CustomHeader.vue'
export default {
  name: 'CustomLayout',
  components: {
    CustomHeader
  }
}
</script>
