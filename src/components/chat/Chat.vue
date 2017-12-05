<template>
    <div v-if="chatEnabled">
        <chat-messages :messages="messages"></chat-messages>
        <chat-form @newmessage="addMessage"></chat-form>
    </div>
    <div v-else>
        Please wait...
    </div>
</template>

<script>
    import ChatMessages from './ChatMessages';
    import ChatForm from './ChatForm';
    import SocketIo from '../../socket.io';

    export default {
        components: {
            ChatMessages,
            ChatForm
        },
        data: function () {
            return {
                messages: [

                ],
                chatEnabled: false,
                isActive: true,
            }
        },
        computed: {
            unreadMessages(){
                return this.$store.state.unreadMessages++;
            },
            chatUser(){
                return this.$store.state.settings.chatUser;
            }
        },
        methods: {
          addMessage(data){
            SocketIo.send('send-message', {message: data, user: this.chatUser})
          }
        },
        watch: {
            chatUser(val){
                SocketIo.send('update-user',val)
            }
        },
        created() {
            var vm = this;

            if(!vm.chatUser) {
                SocketIo.send('new-user','user',function(){});
            } else {
                SocketIo.send('update-user',vm.chatUser);
                vm.chatEnabled = true;
            }

            SocketIo.socket.on('user-registered', function(data){
                console.log('user-registered');
                vm.$store.state.settings.chatUser = data.username;
                vm.chatEnabled = true;
            });

            SocketIo.socket.on('new-message', function(data){
                vm.messages.push({
                    isMine: (data.user == vm.chatUser),
                    user: data.user,
                    message: data.message
                });

                console.log('active:', vm.isActive);

                if(vm.isActive == false) {
                    vm.$store.state.unreadMessages++;
                }
            });
        },
        deactivated() {
            this.isActive = false;
        },
        activated() {
            this.isActive = true;
            this.$store.state.unreadMessages = 0;
        }
    }
</script>