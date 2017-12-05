<template>
    <div class="chat-message" :class="{'my-msg' : message.isMine}">
        <div class="chat-message-container">
            <div class="chat-message-user" v-if="!message.isMine">
                {{message.user}}
            </div>
            <div class="chat-message-content">
                {{message.message}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['message']
    }
</script>
<style scoped lang="scss">
    .chat-message {

        &.my-msg {
            .chat-message-container {
                align-items: flex-end;
            }

        }

        &-container {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-bottom: 15px;
        }

        &-user {
            font-size: 10px;
            line-height: 18px;
            padding-left: 10px;
            padding-right: 10px;
        }

        &-content {
            display: inline-block;
            max-width:calc(100% - 50px);
            border-radius: 10px;
            background: #ffffff;
            padding: 8px;
            color: #4a4a4a;
            margin-right: 10px;
            margin-left: 10px;
        }

    }
</style>