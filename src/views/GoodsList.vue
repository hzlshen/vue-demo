<template>
  <div>
    这是商品列表页面{{msg}}
    {{$route.params.goodsId}}
     <router-link to="/goods/title">显示标题</router-link>
     <router-link to="/goods/image">显示图片</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        msg:"你好世界"
      }
    }
  }
</script>

<style>

</style>
