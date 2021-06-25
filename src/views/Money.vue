<template>
  <Layout class-prefix="layout">
    <Number-pad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type" />
    <div class="notes">
      <FormItem
        field-name="备注"
        placeholder="请输入你的备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/NumberPad.vue";
import FormItem from "@/components/money/FormItem.vue";
import Tags from "@/components/money/Tags.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constant/recordTypeList";
import Tabs from '@/components/Tabs.vue'

type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createAt?: string;
};
@Component({
  components: {
    NumberPad,
    FormItem,
    Tags,
    Tabs,
  },
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: " ",
    type: "-",
    amount: 0,
  };

  recordTypeList = recordTypeList;
  get recordList() {
      return this.$store.state.recordList;
  }
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit('createRecord',this.record);
  }
}
</script>

<style lang="scss" scoped>
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
<style scoped lang="scss">
</style>
