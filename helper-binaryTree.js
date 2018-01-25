//先往左加 再往右加
class BTree {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.count = 0;
	}
	
	add(val) {
		let node = new BTree(val);
		if (this.val === null) {
			this.val = node;
		} else {
			let current = this;
			while(current.left !== null && current.right !== null ) {
				this.count++;
				if(this.count % 2 === 0) current = current.right;
				else current = current.left;
			}
			if(current.left !== null) {
				current.right = node;
			} else {
				current.left = node;
			}
		}
	}
}
