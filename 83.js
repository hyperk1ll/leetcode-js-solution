// 83. Remove Duplicates from Sorted List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    const duplicate = new Set();

    let current = head;
    let previous = null;

    while (current !== null) {
        if (duplicate.has(current.val)) {
            previous.next = current.next;
        }
        else {
            duplicate.add(current.val);
            previous = current;
        }
        current = current.next
    }
    return head;
};