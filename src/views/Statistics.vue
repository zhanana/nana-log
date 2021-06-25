<template>
    <Layout>
         <Types class-prefix="xxx" :value.sync="yyy"/>
         <Tabs :data-source="array" :value.sync = "hhh"/>
    </Layout>
</template>

<script lang="ts">
import Types from '@/components/money/Types.vue';
import Tabs from '@/components/Tabs.vue'
import Vue from 'vue';
import { Component } from "vue-property-decorator"
@Component({
    components: {
        Types,
        Tabs
    },
})
export default class Statistics extends Vue{
    yyy = '-';
    hhh = 'day';
    array = [
        {text:'按天',value:'day'},
        {text:'按周',value:'week'},
        {text:'按月',value:'month'},]

}
</script>

<style scoped lang="scss">
    ::v-deep .xxx-item{
        background: white;
        &.selected {
            background: #c4c4c4;
            &::after {
                display: none;
            }
        }
    }

</style>
