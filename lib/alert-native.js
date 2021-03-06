// Native Javascript for Bootstrap 3 | Alert
// by dnp_theme

// (function(w,d) {

	// ALERT DEFINITION
	// ===================
	var Alert = function( element ) {
		this.btn = typeof element === 'object' ? element : document.querySelector(element);
		this.alert = null;
		this.duration = 150; // default alert transition duration
		this.init();
	}
	
	// ALERT METHODS
	// ================
	Alert.prototype = {
		
		init : function() {
			var self = this;
			this.actions();
			document.addEventListener('click', this.close, false); //delegate to all alerts, including those inserted later into the DOM
		},
	
		actions : function() {
			var self = this;
			
			this.close = function(e) {
				var target = e.target;
				self.btn = target.getAttribute('data-dismiss') === 'alert' && target.className === 'close' ? target : target.parentNode;
				self.alert = self.btn.parentNode;
					
				if ( self.alert !== null && self.btn.getAttribute('data-dismiss') === 'alert' && self.alert.classList.contains('in') ) {
					self.alert.classList.remove('in');
					setTimeout(function() {
						self.alert && self.alert.parentNode.removeChild(self.alert);
					}, self.duration);						
				}

			}
		}
    }
    
	// ALERT DATA API
	// =================
    var Alerts = document.querySelectorAll('[data-dismiss="alert"]');
	[].forEach.call(Alerts, function (item) {
		return new Alert(item);
	})
	
// })(window,document);	