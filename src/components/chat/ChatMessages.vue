<template>
    <div class="messages">
        <div class="messages-container">
            <chat-message v-for="(message, index) in messages" :key="index" :message="message"></chat-message>
        </div>
    </div>
</template>
<script>
    import ChatMessage from './ChatMessage';

    export default {
        props: ['messages'],
        components: {
            ChatMessage
        },
        watch: {
            messages: function(){
                var vm = this;
                setTimeout(function(){
                    vm.$el.scrollTop = vm.$el.scrollHeight;
                },10)
            }
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../scss/variables.scss';

    .messages {
        width: 100%;
        background: #eceef2;
        position: fixed;
        top: $header-height;
        bottom: $chatform-height;
        overflow: auto;
        padding-top: 10px;

        &-container {
            position: relative;
            bottom: 0;
            width: 100%;
        }
    }
</style>