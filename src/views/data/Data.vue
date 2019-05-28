<template>
  <el-container>
    <el-aside width="200px">
      <CustomSideMenu></CustomSideMenu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import CustomSideMenu from '@/components/CustomSideMenu.vue'

export default {
  name: 'Data',
  components: {
    CustomSideMenu
  }
}
</script>
