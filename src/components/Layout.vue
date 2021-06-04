<template>
    <div class="layout-wrapper"> 
        <div class="content" :class="classPrefix &&`${classPrefix}-content`">
            <slot /><!-- 插槽 -->
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
export default {
    props:['classPrefix'],
    name:'Layout',
    components: {

    },
   
    
};
</script>

<style scoped lang="scss">
 .layout-wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;
        overflow: auto;
    }
</style>
