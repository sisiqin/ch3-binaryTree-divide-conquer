题目：给一棵二叉树，找出从根节点到叶子节点的所有路径。

思路：recursion -- divide conquer 

三部：定义--缩小--返回


1. recursion的定义：
* 定义rtnarr = [str, str, str, ...] 初始为[]
* 定义str = root.val + "->" + str. 初始为""

2. recursion 的缩小：
* divide & conquer 分成左右两边 通过root.left & root.right往下传递

3. recursion的返回：
* 当接触到leef --> root.left & root.right均不存在 --> 加上自己的val，pass进rtnarr; 
 ** recursion返回时，假设已经构造好，而非从0开始构造！


notes: 为什么要再写一个function而不是调用自己：
- 因为rtnarr是global variable，
    所以需要重新定义一个function，进行内部调用，而非直接调用原函数

代码
```
var binaryTreePaths = function(root) {
	let returnArr = [];
	
	const subPath = (root, str) => {
		if(!root.left && !root.right) returnArr.push(str + root.val);
		//根据定义，str构造好了，加上leef的val，push进rtnarr
		if(root.left) subPath(root.left, root.val + "->" + str);
		if(root.right) subPath(root.right, root.val + "->" + str);

	}
	subPath(root, "");
	return returnArr
	
}
```
## divide & conquer
```
const bTreePath = root => {
	//each recursion initialize an empty rtnArr 
	let rtnArr = [];
	if(!root) return rtnArr;
	
	
	// divide 也得到一个array, 让我可以for loop 它 
	let left = bTreePath(root.left);
	let right = bTreePath(root.right);
	console.log(left)
	// conquer  拿到左右给我的array，加上自己，传给rtnarr。
	for(let i = 0; i < left.length; i++) {
		rtnArr.push(left[i] + "->" + root.val ); 
	}
	for(let j = 0; j < right.length; j++) {
		rtnArr.push(right[j] + "->" + root.val);
	}
	// 解决多一个“->”指向undefined的问题
	if(rtnArr.length === 0) rtnArr.push("" + root.val);
	
	return rtnArr;
}
```
