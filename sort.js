
var sort_by = function(field, reverse, primer) {
    var key = primer ?
        function(x) {
            return primer(x[field])
        } :
        function(x) {
            return x[field]
        };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}
//sort alphabettically
fruits.sort(sort_by('fruitName', false, function(a) {
    return a.toUpperCase()
}));
//sort numerically
fruits.sort(sort_by('fruitPrice', true, parseInt));
