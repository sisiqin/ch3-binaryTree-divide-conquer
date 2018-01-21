Given a binary tree, find the subtree with minimum sum. Return the root of the subtree.
## 思路

divide & conquer 对于每一个node：让它return left child & right child的sum，加上自己得到一个总数

拿到总数：打擂台得到一个最小的 return出来

## 三步
### 1. recursion 的定义：

 - 定义sum = leftSum + rightSum + 自己
 
 ### 2. recursion的缩小：
 
 - divide --> root.left & root.right
 
 ### 3. recursion的返回：
 
 （❌）- 到leaf的时候，返回自己的value
 
 （对） - root === null ： return 0

 ### 打擂台该写在哪里？
 
 对于每一个得到的sum，都需要跟上一个得到的sum比大小，所以要写在里头

代码
```
const minSubtree = (root) => {
	if(!root) return;
	let rtnNode = root;
	let compare = -1000000;

	const subtree = (root) => {
		if(root === null) return 0;
		let leftSum = subtree(root.left);
			let rightSum = subtree(root.right);
		let sum = leftSum + rightSum + root.value;
		if(sum > compare) {
			compare = sum;
			rtnNode = root;
		}
		return compare;
	}
	
	subtree(root)；
	return rtnNode;
}
```
