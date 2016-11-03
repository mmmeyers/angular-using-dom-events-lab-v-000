function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ some.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function ($scope) {
			this.count = 0;
		},
		controllerAs: 'some',
		link: function(scope, element, attr, ctrl) {

			window.addEventListener('click', function() {
				ctrl.count++;
				scope.$apply();
			});

			scope.$on('$destroy', function() {
				element.off();
			});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);
