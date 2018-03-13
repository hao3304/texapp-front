<template>
<div class="mobile-page">
  <iframe class="viewer" v-if="src" :src="'/static/ViewerJS/#/tex/'+ src" frameborder="0"></iframe>
</div>
</template>

<script>
    export default {
        name: "mobile",
        data(){
            return {
              src:""
            }
        },
      beforeRouteEnter(to,from,next) {
          next(vm=>{
            vm.src = vm.$route.params.id;
          })
        }
    }
</script>

<style lang="less">
  .mobile-page {
    height: 100%;
    .viewer{
      width: 100%;
      height: 100%;
    }
  }
</style>
