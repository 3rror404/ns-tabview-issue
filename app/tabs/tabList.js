var framesModule = require("ui/frame");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

var pageData = new Observable();

exports.onLoaded = function(args) {
    var page = args.object;

    pageData.set('myItems', new ObservableArray(['1','2','3']));

    page.bindingContext = pageData;
}

exports.tapGoToDetailPage = function(args) {
    var itemIndex = args.index;
    var item = pageData.myItems.getItem(itemIndex);

    console.log(item);

    framesModule.topmost().navigate({
        moduleName: "detail-page",
        context: item
    });
}