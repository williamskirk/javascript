/*
	Requires Backbone
*/
/*
 * Form validate model
 */
Validator = Backbone.Model.extend({
	initialize: function(){

    },
    /*
     * Validate input for mac address formatted string
     * @param
     * 		mac address as string
     * @return
     * 		true/false - true on correct format
     */
	macAddress: function(nmac){
		var regex = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
		return(regex.test(nmac));
	},
	/*
	 * Validate input for correct email address formatted string
	 * @param
	 * 		nemail as string
	 * @return
	 * 		true/false - true on correct format
	 */
	email: function(nemail){
		var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		return(regex.test(nemail));
	},
	/*
	 * Validate string variable for data or not
	 * @param
	 * 		str as string
	 * @return
	 * 		true/false - true string not empty
	 */
	isEmpty: function(str) {
	    return (!str || 0 === str.length);
	}
});