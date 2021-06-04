<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "Types",
  components: {},
};
</script>

<style scoped lang="scss">
.types{
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li{
        width: 50%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.selected::after{//支出下面的横线设置样式
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #333;
        }
    }
}
</style>
