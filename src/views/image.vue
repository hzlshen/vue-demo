<template>
  <div v-show="before">
    子组件{{msg}}
    {{$route.params.goodsId}}
    <button>click</button>
  </div>
  
</template>

<script>

  export default{
    data(){
      return {
        msg:"hello",
        before:true
      }
    }
  }
</script>

<style>

</style>
