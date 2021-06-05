<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Types extends Vue{
  type = '-';
  @Prop(Number) xxx:number|undefined;
  //Prop 告诉vue xxx不是data是prop
  //Number 告诉vue xxx运行时是number
  //xxx是属性名
  //number|undefined是xxx编译时的类型
  selectType(type:string){
       if(type !== '-' && type !== '+'){
         throw new Error('type is unknown')
       }
       this.type = type
     }
  mounted(){
    if(this.xxx === undefined){
      console.log('没有xxx')
    }
    else{
      console.log(this.xxx.toString());
    }
  }
}

// export default {
//   name: "Types",
//   props:['xxx'],
//   data(){
//     return {
//       type:'-'//'-表示支出，+表示收入
//     }
//   },
//   mounted(){
//     console.log(this.xxx)
//   },
//   methods:{
//     selectType(type){
//       if(type !== '-' && type !== '+'){
//         throw new Error('type is unknown')
//       }
//       this.type = type
//     }
//   }
// };
</script>

<style scoped lang="scss">
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      //支出下面的横线设置样式
      content: "";
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
