<template>
  <div v-show="before">
    这是商品图片的子组件{{msg}}
    {{$route.params.goodsId}}
  </div>
</template>

<script>

  export default{
    data(){
      return {
        msg:"你好世界",
        before:true
      }
    }
  }
</script>

<style>

</style>
