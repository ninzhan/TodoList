module.provider('listService', function listServiceProvider(){
    this.$get = function(){
        return new listServiceFunction();
    }
});

var listServiceFunction = function(){
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
            console.log(buffer);
            console.log(lists[buffer]);
            return lists[buffer].items;
        }else{
            return false;
        }
    };
    this.checkItem = function(name, text){
        var buffer = this.getListIndex(name);
        if(buffer){
            for(var i in lists[buffer].items){
                if(lists[buffer].items[i].text == text){
                    return true;
                }
            }
        }
        return false;
    };
    this.removeItems = function(name){
        var buffer = this.getListIndex(name);
        for(var item in lists[buffer].items){
            if(lists[buffer].items[item].done){
                lists[buffer].items.splice(item, 1);
            }
        }
    };
    this.addList("Welcome!");
    this.addItem("Welcome!", "This is an Item!");
};