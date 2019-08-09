function Bird(){
	this.stomach = [];
}
Bird.protoype.eat = function(cat){
	this.stomach.push(cat)
}