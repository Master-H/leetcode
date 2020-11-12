//最深叶节点的最近公共祖先,给你一个有根节点的二叉树，找到它最深的叶节点的最近公共祖先。
// 叶节点 是二叉树中没有子节点的节点
// 树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
// 如果我们假定 A 是一组节点 S 的 最近公共祖先，S 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。
// 题目要返回最深叶结点的最近公共祖先。
// 由于最深的叶结点可能有多个（如果只有一个最深的叶结点，那么它的最近公共祖先就是它自己），我们观察它们最近公共祖先的性质。
// 首先，我们可以看出最近公共祖先的两个子树是等高的，如果不等高，那么高度较小的那个子树叶结点必然不是最深。
// 所以我们可以设计这样的深度优先搜索算法，每一层返回值有两部分组成：一部分是以该结点为根的子树中，最深叶结点的公共祖先，
// 另一部分是该层的高度（也即该结点到其最深叶结点的深度）。然后我们可以递归比较：

// 1、如果一个结点的左子树和右子树高度相等，那么其左子树的最深结点和右子树的最深结点，都是以这个结点为根的最深叶结点，
// 那么我们就返回这个结点，和这个结点的高度（左子树高度或右子树高度加 11）；
// 2、如果一个结点的左子树高度大于右子树，那么以这个结点为根的树，其最深叶结点一定在左子树中，那么我们就返回其左子树中最深结点的最近公共祖先，
// 和当前结点的高度（左子树高度加 11）；
// 3、如果一个结点的右子树高度大于左子树，那么我们处理情况和情况2相反，返回右子树中最深结点的最近公共祖先，和当前结点的高度（右子树高度加 11）。



var lcaDeepestLeaves = function(root) {
    if(!root) return 
    function getDepth(root){
        if(root) return 0
        return Math.max(getDepth(root.left),getDepth(root.right))+1
    }

    function travel(root){
        if(!root) return 
        let leftDepth = getDepth(root.left)
        let rightDepth = getDepth(root.right)
        if(leftDepth === rightDepth) return root
        if(leftDepth > rightDepth){
            return travel(root.left)
        }else{
            return travel(root.right)
        }
    }
    

}