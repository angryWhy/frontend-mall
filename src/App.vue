<template>
  <el-container>
      <el-header class="header"><el-icon><Histogram /></el-icon>mall</el-header>
      <el-container>
        <el-aside width="200px"><menu-view/></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
</template>
<script>
import { defineComponent } from 'vue'
import menuView from "@/components/mainMenu.vue"
export default defineComponent({
  name: 'appView',
  components:{
    menuView
  },
  setup() {
    return {}
  }
})
</script>
<style>
.header{
  background-color: #303b4f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

}
</style>
