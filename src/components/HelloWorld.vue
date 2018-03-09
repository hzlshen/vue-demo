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
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "这是第一个vue cli",
      show: true
    };
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
