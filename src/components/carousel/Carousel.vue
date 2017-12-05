<template>
    <div class="carousel" :style="{'height': height,'width':width}">
        <carousel-images :images="images"></carousel-images>
    </div>
</template>
<script>
    import CarouselImages from './CarouselImages.vue';

    export default {
        components: {
            CarouselImages
        },
        data: function(){
            return {
                images: []
            }
        },
        computed: {
            height() {
                return this.$store.state.settings.carousel.height + 'px';
            },
            width() {
                return this.$store.state.settings.carousel.width + '%';
            }
        },
        created() {
            for(var i=1; i<=10; i++) {
                this.images.push('https://loremflickr.com/600/370/?' + i);
            }

        },
        deactivated() {
            console.log('Carousel deactivated');
        },
        activated() {
            console.log('Carousel acitvated');
        },
        destroyed() {
            console.log('Carousel destroyed');
        }
    }
</script>
<style scoped>
    .carousel {
        overflow: hidden;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }
</style>