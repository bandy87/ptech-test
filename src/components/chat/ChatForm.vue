<template>
    <div class="chat-form">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Send message" v-model="message">
            <span class="input-group-btn">
            <button class="btn btn-primary" type="button" @click="sendMessage">Send</button>
          </span>
        </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                message: ''
            }
        },
        methods: {
            sendMessage() {
                if(this.message.length > 0) {
                    this.$emit('newmessage', this.message)
                    this.message = '';
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../scss/variables.scss';
    .chat-form {
        padding: 20px;
        background: #fbfbfc;
        border-top: 1px solid #d1d3d8;
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: $chatform-height !important;
        overflow: hidden;
    }

</style>