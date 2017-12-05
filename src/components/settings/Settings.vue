<template>
    <div class="">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Carousel Settings</h4>
            </div>
            <div class="panel-body">
                <label>Carousel width</label>
                <div>
                    <input type="range" @change="setCarouselWidth" v-model="cWidth" min="50" max="100" step="1">
                </div>
                <label>Carousel height</label>
                <div>
                    <input type="range" @change="setCarouselHeight" v-model="cHeight" min="100" max="300" step="1">
                </div>

            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Chat Settings</h4>
            </div>
            <div class="panel-body">
                <label>Chatname:</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Add your chatname" v-model="chatName">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button" @click="saveName">Save</button>
                    </span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                cWidth: 0,
                cHeight: 0,
                chatName: ''
            }
        },
        methods: {
            setCarouselWidth(){
                this.$store.state.settings.carousel.width = this.cWidth;
            },
            setCarouselHeight(){
                this.$store.state.settings.carousel.height = this.cHeight;
            },
            saveName() {
                this.$store.state.settings.chatUser = this.chatName;
            }
        },
        created() {
            this.cWidth =  this.$store.state.settings.carousel.width;
            this.cHeight =  this.$store.state.settings.carousel.height;
            this.chatName =  this.$store.state.settings.chatUser;
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../scss/variables.scss';
    @import '../../../scss/range.scss';
</style>