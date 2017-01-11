module.service('listService', function(){
    var lists = [];

    this.checkList = function(name){
        for(var i in lists){
            if(lists[i].name == name){
                return true;
            }
        }
        return false;
    };
    this.addList = function(name){
        for( var i in lists ){
            if(lists[i].name == name){
                return false;
            }
        }
        lists.push(new List(name));
        return true;
    };
    this.addItem = function(listName, itemName){
        var buffer = this.getListIndex(listName);
        if(buffer){
            lists[buffer].items.push(new Item(itemName));
            return true;
        }else{
            return false;
        }

    };
    this.getListIndex = function(listName){
        for( var i in lists ){
            if(lists[i].name == listName){
                return i;
            }
        }
        return false;
    };
    this.getItems = function (listName) {
        var buffer = this.getListIndex(listName);
        if(buffer){
            return lists[buffer];
        }else{
            return false;
        }
    }
});
