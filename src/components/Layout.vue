<template>
    <div class="nav-wrapper"> 
        <div class="content">
            <slot /><!-- 插槽 -->
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
export default {
    name:'Layout',
    components: {

    },
   
    
};
</script>

<style scoped >
 .nav-wrapper{
        border: 1px solid palevioletred;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;
        overflow: auto;
        border: 1px solid powderblue;
    }
</style>
