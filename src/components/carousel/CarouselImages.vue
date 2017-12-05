<template>
    <div>
        <div class="carousel-ctrl carousel-ctrl-left" @click="scrollToPrev()">
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="carousel-images" :style="transform" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <carousel-image v-for="(image, index) in images" :key="index" :image="image"></carousel-image>
        </div>
        <div class="carousel-ctrl carousel-ctrl-right" @click="scrollToNext()">
            <i class="fa fa-angle-right"></i>
        </div>
    </div>
</template>
<script>
    import CarouselImage from './CarouselImage.vue';

    export default {
        props: ['images'],
        data: function(){
            return {
                xStart: null,
                yStart: null,
                swipeMinDiff: 10,
                swipeType: null,
                pages: this.images.length-1,
                currentPage: 0,
                transform: {}
            }
        },
        methods: {
            touchStart($event){
                this.xStart = $event.touches[0].clientX;
                this.yStart = $event.touches[0].clientY;

                console.log(this.xStart,this.yStart);
            },
            touchMove($event){
                if ( !this.xStart || !this.yStart ) {
                    return;
                }

                this.swipeType = null;

                var xNow = $event.touches[0].clientX;
                var yNow = $event.touches[0].clientY;

                var xDiff = this.xStart - xNow;
                var yDiff = this.yStart - yNow;

                if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {

                    if ( xDiff > 0 ) {

                        if(Math.abs( xDiff ) > this.swipeMinDiff) {
                            this.swipeType = 'left';
                        }
                    } else {
                        if(Math.abs( xDiff ) > this.swipeMinDiff) {
                            this.swipeType = 'right';
                        }
                    }
                } else {
                    if ( yDiff > 0 ) {
                        if(Math.abs( yDiff ) > this.swipeMinDiff) {
                            this.swipeType = 'up';
                        }
                    } else {
                        if(Math.abs( yDiff ) > this.swipeMinDiff) {
                            this.swipeType = 'down';
                        }
                    }
                }

                if(this.swipeType) {
                    this.xStart = null;
                    this.yStart = null;
                }
            },
            touchEnd(){
                if(this.swipeType == 'left') {
                    this.scrollToNext();
                } else if(this.swipeType == 'right') {
                    this.scrollToPrev();
                }
            },
            scrollToNext() {
                if(this.currentPage+1 <= this.pages) {
                    this.currentPage++;
                    this.translate();
                }
            },
            scrollToPrev() {
                if(this.currentPage-1 >= 0) {
                    this.currentPage--;
                    this.translate();
                }
            },
            translate(){
                let translateX = -(this.currentPage * 100) + '%';
                this.transform = {'transform': 'translateX('+translateX+')'}
            }
        },
        components: {
            CarouselImage
        }

    }
</script>
<style scoped lang="scss">

    .carousel-images {
        white-space: nowrap;
        transition: all 300ms;
    }

    .carousel-ctrl {
        width: 50px;
        height: 50px;
        line-height: 50px;
        background: #fff;
        box-shadow: 0px 2px 15px rgba(0,0,0,0.5);
        position: absolute;
        border-radius: 50%;
        z-index: 100;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        font-size: 32px;
        color: #2b2b2b;

        &-left {
            left: 5px;
        }
        &-right {
            right: 5px;
        }
    }

</style>