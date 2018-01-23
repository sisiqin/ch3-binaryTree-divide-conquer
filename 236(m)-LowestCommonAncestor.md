## 题
给root，两个node p & q，求这两个node的最近公共祖先。node的定义不包含parent pointer
## 思路

- divide：分成left & right, 分别问他们有没有p & q呀。区分都有，只有一个，都没有，三种情况。

- conquer：

    • 如果都有：我就是lca。return我自己
    
    • 如果只有其中一个：告诉上层，有一个，return什么都行
    
    • 如果都没有：告诉上层，都没有，return null --- 其实也是return什么都行，只要能区分就好了
    
## 代码
```
    var lowestCommonAncestor = function(root, p, q) {
	if(root === null || root === p || root === q) return root;
  
// recursion希望返回的是一个node，function希望返回的也是node，不用重新写
	
// divide 
	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);
  
// conquer
	if(left !== null & right !== null) {
		return root;
	} else if(left !== null) {
		return left;
	} else if(right !== null) {
		return right;
	} else {
		return null;
	}
};

```
