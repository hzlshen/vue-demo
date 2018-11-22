<template>
  <div v-show="before">
    子组件{{msg}}
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
