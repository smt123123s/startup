$(document)
    .ready(function(){
        $('.ui.form')
            .form('reset')
            .form({
                fields:{
                    uName:{
                        identifier :'uName',
                        rules:[
                            {
                                type : 'empty',
                                prompt : '一定要填寫名字~'
                            },
                        ]
                    },
                    uPhone: {
                        identifier : 'uPhone',
                        rules: [
                            {
                                type: 'empty',
                                prompt : '一定要填寫電話~'
                            },
                        ]
                    },
                    uEmail: {
                        identifier : 'uEmail',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '一定要填寫電郵~'
                            },
                        ]
                    },
                    uOccupation: {
                        identifier: 'uOccupation',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '一定要選一個地區~'
                            },
                        ]
                    },
                    uRevenue: {
                        identifier: 'uRevenue',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '一定要估~'
                            },
                        ]
                    },
                    uPrice: {
                        identifier: 'uPrice',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '一定要賣~'
                            },
                        ]
                    },
                    terms:{
                        identifier: 'terms',
                        rules: [
                            {
                                type: 'checked',
                                prompt: '一定要勾選~'
                            },
                        ]
                    },
                }
            })
            ;
    })
    ;

$(document)
    .ready(function(){
        $("#click").click(function(){
            $("#msg").hide("slow");
            $("#msg2").hide("slow");
        }); 
    });

$(document)
    .ready(function(){
        $('#click2').click(function(){
            $("#msg").show("slow");
            $("#msg2").hide("slow");
        });
    });
