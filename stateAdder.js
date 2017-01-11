/**
 * Created by Joseph on 1/7/17.
 */
module.provider('stateAdder', function($stateProvider){
    this.$get = function() {
        return {
            addList: function (name, state) {
                $stateProvider.state(name, state);
            }
        }
    }
});