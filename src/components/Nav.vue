<template>
    <div class="nav">
      <router-link to="/money">
        <svg>
          <use xlink:href="#bda-label-service" />
        </svg>
      记账
      </router-link>
      |
      <router-link to="/labels">标签</router-link>
      |
      <router-link to="/statistics">统计</router-link>
    </div>
</template>

<script lang="ts">
//引入一整个icons目录
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try {
//   importAll(require.context('../assets/icons/',true,/\.svg$/));
// } catch (error) {
//   console.log(error);
// }

export default {
   name:'Nav'
};
</script>

<style scoped >
  .nav {
    border: 1px solid red;
  }
</style>

