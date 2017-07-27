$(function(){
    chrome.storage.sync.get(['total','goal'], function(items){
        var total = items.total;
        var goal = items.goal;
        if(total){
            $('#total').text(total);
        }
        if(goal){
            $('#goal').text(goal);
        }
    });
    $('#btnAddProtein').click(function(){
        chrome.storage.sync.get(['total','goal'], function(items){
            var total = items.total;
            var goal = items.goal;
            var newTotal = 0;
            if(total){
                var totalAmount = parseInt(total);
                newTotal += totalAmount;
            }

            var amount = $('#amount').val();
            if(amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal});
            $('#amount').val('');
            $('#total').text(newTotal);

            if(newTotal >= goal){
                var opt = {
                    type: "basic",
                    title: "Goal achieved!!",
                    message: "You have reached the goal of "+ goal +"  !!",
                    iconUrl: "icon.png"
                }

                chrome.notifications.create('goalReached', opt, function(){});
            }
        });
    });
});