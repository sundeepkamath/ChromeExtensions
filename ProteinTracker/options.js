$(function(){
    chrome.storage.sync.get('goal', function(items){
        var goal = items.goal;
        if(goal){
            $('#goal').val(goal);
        }
    });
    
    $('#btnSaveGoal').click(function(){
        var newGoal = $('#goal').val();
        if(newGoal){
            chrome.storage.sync.set({'goal': newGoal});
        }
    });

    $('#btnResetTotal').click(function(){
        chrome.storage.sync.set({'total': 0});
        var opt = {
            type: "basic",
            title: "Total Reset!",
            message: "Total has been reset back to 0.",
            iconUrl: "icon.png"
        }

        chrome.notifications.create('reset', opt, function(){});
    });
});