(function () {
    angular
        .module('anket')
        .controller('AnketaCtrl', AnketaCtrl);

        function AnketaCtrl(){
        	//this._api = AnketaApiService;

			
        	this.information = {
        		name:'',
        		email:'',
        		country:'',
        		city:'',
        		social:{},
        		imgSrc:''
        	};			/* information about user */		

        	this.currentPage = 1;			//current page
        	this.paginationData = [
        		{
        			'number':1,
        			'blocked':false,
        			'active':false
        		},{
        			'number':2,
        			'blocked':false,
        			'active':true
        		},{
        			'number':3,
        			'blocked':true,
        			'active':false
        		},{
        			'number':4,
        			'blocked':true,
        			'active':false
        		}
        	];
        	AnketaCtrl.prototype.onChangePage = onChangePage;

        	function onChangePage(page){
        		this.currentPage = page.number;
        		console.log('controller='+page.number);
        	}	
        }
})();