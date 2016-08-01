(function () {
    angular
        .module('anket')
        .directive('paginator', paginatorDirective);

    function paginatorDirective() {

        return {
            restrict: 'E',
            templateUrl: 'js/directives/paginationArrows/pagination.template.html',
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