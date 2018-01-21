//先往左加 再往右加
function TreeNode(num) {
	this.val = num;
	this.left = null;
	this.right = null;
}

TreeNode.prototype.add = function(num) {
	if(this.val === null) {
		this.val = num;
		return;
	}
	let currentNode = this;
	let addNode = new TreeNode(num);
	while(currentNode) {
		if(!currentNode.left) {
			currentNode.left = addNode;
			break;
		} else if(!currentNode.right) {
			currentNode.right = addNode;
			break;
		}
		currentNode = currentNode.left;
	}
	return this;
}
