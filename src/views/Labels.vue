<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{tag}}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue"
import {Component} from "vue-property-decorator";

tagListModel.fetch()

@Component
export default class Labels extends Vue{
  tags = tagListModel.data;
  createTag(){
    const name = window.prompt("请输入标签");
    if(name){
      tagListModel.create(name);
    }
  }
}
</script>

<style scoped lang="scss">
    .tags{
        background: white;
        font-size: 16px;
        > li{
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom:1px solid #e6e6e6;
            margin-left: 16px;
            svg{
                width: 18px;
                height: 18px;
                color: #666;
                margin-right: 16px;
            }
        }
    }
    .createTag{
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
        &-wrapper{
            text-align: center;
            padding: 16px;
        }
    }
</style>
