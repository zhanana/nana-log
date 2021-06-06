<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" v-model="value"
    placeholder="输入你的备注" />
  </label>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from "vue-property-decorator";

@Component
export default class Notes extends Vue{
  value = ' ';

}
</script>

<style scoped lang="scss">
.notes{
    font-size: 14px;
    background:#f5f5f5 ;
    display: block;
    padding-left: 16px;
    display: flex;
    align-items: center;
    > .name{
        padding-right: 16px;
    }
    input{
        height: 64px;
        flex-grow: 1;
        background: transparent;
        border: none;
        padding-right: 16px;
    }
}
</style>
