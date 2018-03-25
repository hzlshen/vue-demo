<template>
  <div>
    这是商品标题子组件{{msg}}
    {{$route.params.goodsId}}
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
