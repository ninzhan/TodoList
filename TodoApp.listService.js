
(function(){

    module.provider('listService', function listServiceProvider(){
        this.$get = function($localStorage){
            return new listServiceFunction($localStorage);
        }
    });

    var listServiceFunction = function($localStorage){



        this.addList = function(name){
            for( var i in lists ){
                if(this.lists[i].name == name){
                    return false;
                }
            }
            this.lists.push(new List(name));
            this.push();
            return true;
        };
        this.addItem = function(listName, itemName){
            var buffer = this.getListIndex(listName);
            if(buffer){
                this.lists[buffer].items.push(new Item(itemName));
                this.push();
                return true;
            }else{
                return false;
            }
        };
        this.getListIndex = function(listName){
            for( var i in lists ){
                if(this.lists[i].name == listName){
                    return i;
                }
            }
            return false;
        };
        this.getItems = function (listName) {
            var buffer = this.getListIndex(listName);
            if(buffer){
                return this.lists[buffer].items;
            }else{
                return false;
            }
        };
        this.checkItem = function(name, text){
            var buffer = this.getListIndex(name);
            if(buffer){
                for(var i in lists[buffer].items){
                    if(this.lists[buffer].items[i].text == text){
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
            this.push();
        };

        this.push = function(){
            $localStorage.lists = lists;
        };

        this.update = function(){
            lists = $localStorage.lists;
        };

        this.update();

        this.lists = $localStorage.lists;

        if(this.lists == undefined){
            this.lists = [];
            this.addList("Welcome!");
            this.addItem("Welcome!", "This is an Item!");
            this.push();
        }



    };

})();

