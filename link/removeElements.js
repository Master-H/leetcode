
// 删除链表中等于给定值 val 的所有节点。

// 示例:

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

var removeElements = function(head, val) {
    let newHead = new ListNode()
    let pre = newHead
    newHead.next = head 
    let cur = head
    while(cur){
        if(cur.val === val){
            pre.next = cur.next
            cur = pre.next
        }else{  
            pre = cur
            cur = cur.next
        }
       
    }
    return  newHead.next
};