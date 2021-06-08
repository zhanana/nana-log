<template>
  <Layout class-prefix="layout">
    <Number-pad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";

const recordList:Record[] = JSON.parse(window.localStorage.getItem('recordList') ||'[]');

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  creatAt?: Date;
};
@Component({
  components: {
    NumberPad,
    Types,
    Notes,
    Tags,
  },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "玩"];
  recordList:Record[] = recordList;
  record: Record = {
    tags: [],
    notes: " ",
    type: "-",
    amount: 20,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord(){
    const record2 = JSON.parse(JSON.stringify(this.record)) //深拷贝，record2只是拷贝了record
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style scoped lang="scss">
</style>
