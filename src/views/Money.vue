<template>
  <div>
    <Layout class-prefix="layout">
      <Number-pad />
      <Types :xxx="123"/>
      <Notes />
      <Tags />
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from "@/components/money/NumberPad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
export default {
  name: "Money",
  components: {
    NumberPad,
    Types,
    Notes,
    Tags,
  },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style scoped lang="scss">

</style>
