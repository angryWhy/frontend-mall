<template>
    <div>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1"
            text-color="#fff" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Fries />
                    </el-icon>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="1-1" ><router-link to="/category">分类维护</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/brand">品牌管理</router-link></el-menu-item>
                <el-menu-item index="1-3"><router-link to="/attrgroup">属性分组</router-link></el-menu-item>
                <el-menu-item index="1-4"><router-link to="/attr">规格参数</router-link></el-menu-item>
                <el-menu-item index="1-5"><router-link to="/saleattr">销售属性</router-link></el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    name: 'goodsView',
    setup() {
        const route = useRouter();
        const handleClick = () => {
            route.push({
                path:"/category"
            })
        }
        return {
            handleClick
        }
    }
})
</script>
  
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>