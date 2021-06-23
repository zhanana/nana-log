<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { TagHelper } from "@/mixins/TagHelper";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
@Component({
  computed:{
    tagList(){
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];
  
  created(){
    this.$store.commit('fetchTags');
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if(index >= 0){
      this.selectedTags.splice(index,1);
    }
    else{
    this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags)
  }
}
</script>

<style scoped lang="scss">
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  background: white;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h; //确定内容只有一行的时候可以用height=line-height实现居中
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-bottom: 6px;
      &.selected {
        background: darken($color: $bg, $amount: 50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
