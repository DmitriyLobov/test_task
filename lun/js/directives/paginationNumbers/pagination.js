(function () {
    angular
        .module('anket')
        .directive('pagination', paginationDirective);

    function paginationDirective() {

        return {
            restrict: 'E',
            templateUrl: 'js/directives/paginationNumbers/pagination.template.html',
            scope: {
                paginationData: '=paginationData',
                changePage: '&change'
            },
            link: function (scope) {
                scope.$watch(function(scope){
                    return angular.toJson(scope.paginationData);
            	},function(newVal,oldVal){
                    console.log(scope.paginationData);
                });

                scope.setPage = setPage;

                function setPage(page){
                	if(!page.blocked){		//якщо сторінка не заблокована то переходимо
                		scope.changePage({page:page});
                		console.log('page='+page.number);
                	}
                }
            }
    	}
	}
})();