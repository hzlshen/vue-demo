<template>
    <div>
      <button v-on:click="show = !show">
      点击我
    </button>
    <transition name="false">
        <p v-if="show">
          哟！小伙子你真棒~
        </p>
    </transition>

    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！ 
    </span>

    <p v-if="see">看到我了吧</p>

    <ul>
      <li v-for="todo in tos">
      {{ todo.to }}
      </li>
    </ul>

    <button v-on:click="Click">点击隐藏</button>
    
    <input v-model="message">

    <div class="">

    </div>


    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "这是第一个vue cli",
      show: true,
      message: "页面加载于 " + new Date().toLocaleString(),
      see: true,
      tos: [
        { to: "这是个text1" },
        { to: "这是个text2" },
        { to: "这是个text3" },
        { to: "这是个text4" }
      ],
    };
  },
  methods:{
    Click:function(){
      this.see =false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
