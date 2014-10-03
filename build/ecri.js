$(function () {
	var cat = new Animal('meoaw');
	cat.act();
	function Animal(say){
		this.say = say;
		this.act = function(){
			console.log(this.say);
		};
	};

});
