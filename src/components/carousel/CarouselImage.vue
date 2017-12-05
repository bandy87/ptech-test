<template>
    <div class="carousel-image" :style="{'height': height}" >
        <div class="img" :style="imageStyle"></div>
    </div>
</template>
<script>
    export default {
        props:['image'],
        data: function(){
          return {
              imageStyle: {}
          }
        },
        computed: {
            height() {
                return this.$store.state.settings.carousel.height + 'px';
            }
        },
        created() {
            var vm = this;
            var img = new Image();
            img.src = this.image;
            img.onload = function(){
               vm.imageStyle = {'backgroundImage': 'url('+vm.image+')',opacity:1};
            }
        }
    }
</script>
<style scoped lang="scss">
    .carousel-image {
        display: inline-block;
        width: 100%;
        background: #efefef;
        position: relative;

        .img {
            transition: all 400ms ease-in-out;
            background-position: center center;
            background-size: cover;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
        }
    }
</style>