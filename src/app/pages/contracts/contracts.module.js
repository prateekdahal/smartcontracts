var contractSum;
var accounts;
var account;
var contract;
var architect;
var archEmployer;
var quantitySurveyor;
var qsEmployer;
var cdmCoordinator;
var principalContractor;
var otherCDM;


(function () {
  'use strict';

  angular.module('BlurAdmin.pages.contracts', [])
      .config(routeConfig);

	  
  function createNew()	{
	  contractSum = parseInt(document.getElementById("contractSum").value);
	  architect = document.getElementById("architect").value;
	  archEmployer = document.getElementById("archEmployer").value;
	  quantitySurveyor = document.getElementById("quantitySurveyor").value;
	  qsEmployer = document.getElementById("qsEmployer").value;
	  cdmCoordinator = document.getElementById("cdmCoordinator").value;
	  principalContractor = document.getElementById("principalContractor").value;
	  
  }
  
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('contracts', {
          url: '/contracts',
          templateUrl: 'app/pages/contracts/contracts.html',
          title: 'Contracts',
          sidebarMeta: {
            order: 800,
          },
        });
  }
  
  angular.module('datepickerBasicUsage', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});
  
  (function () {
  'use strict';

  angular.module('BlurAdmin.pages.form', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
        .state('form', {
          url: '/form',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Form Elements',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 250,
          },
        })
        .state('form.inputs', {
          url: '/inputs',
          templateUrl: 'app/pages/form/inputs/inputs.html',
          title: 'Form Inputs',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('form.layouts', {
          url: '/layouts',
          templateUrl: 'app/pages/form/layouts/layouts.html',
          title: 'Form Layouts',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('form.wizard',
        {
          url: '/wizard',
          templateUrl: 'app/pages/form/wizard/wizard.html',
          controller: 'WizardCtrl',
          controllerAs: 'vm',
          title: 'Form Wizard',
          sidebarMeta: {
            order: 200,
          },
        });
  }
})();

})();