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

    <div v-bind:class="{ active:isActive } ">
      这是个vbind
    </div>
    <!-- 这是帮两个 -->
    <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError}"></div>

    <!-- 事件处理 -->
    <button v-on:click="counter += 1">递增加1</button>
    <p>加{{counter}}</p>

     <button v-on:click="greet">弹框</button>

      <div class="news">
          sjdgwsfkljsdkj

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
      name:"小伙子",
      isActive: true,
      hasError: false,
      counter:0,
      classObject: {
        active: true,
        "text-danger": true
      }
    };
  },
  methods: {
    Click: function() {
      this.see = false;
    },
    greet:function(e){
      alert("你好"+this.name+"!");
      if(e){
        alert(e.target.tagName);

      }
      if(2 == '2'){
        console.log(111111111)
      }

      if(3 === '3'){

      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  color: red;
}
.text-danger {
  background: #111;
  color: #f00;
  font-size: 24px;
  opacity: 1;
  display: block;
  border: 1px solid #a00;


}
.news{
  color: #fff;
  font-size: 20px;
}
</style>
