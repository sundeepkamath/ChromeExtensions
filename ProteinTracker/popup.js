$(function(){
    chrome.storage.sync.get('total', function(items){
        var total = items.total;
        if(total){
            $('#total').text(items.total);
        }
    });
    $('#btnAddProtein').click(function(){
        chrome.storage.sync.get('total', function(items){
            var total = items.total;
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
        });
    });
});