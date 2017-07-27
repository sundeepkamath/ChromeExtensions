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
    });
});