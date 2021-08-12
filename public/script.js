const socket = io();


$('#chat').hide();



$('#login-btn').click(()=>{

    socket.emit('login',{

        name:$('#login-inp').val()
    })


        $('#login').hide();
        $('#chat').show();

    
})

$('#send').click(()=>{

    socket.emit('send_msg',{

        text:$('#text-area').val()

    })
    $('#text-area').val("")
    $('.emojionearea-editor').text("");
    
})

socket.on('recieved_msg',(data)=>{

    $('#list').prepend(`<li> <strong>${data.name}</strong> :  ${data.msg}</li>`)

   
})

