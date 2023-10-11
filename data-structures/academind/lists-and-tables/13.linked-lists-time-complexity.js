// retrieving an item

// arrays - constant time O(1) if you know the index
// linked list - worst case you have to go through every item to get to the item you want, so O(n) linear time

// adding an item

// do we keep track of the tail? our implementation does, but if we didn't, it's going to take longer
// to add an item at the end
// if we don't store the tail, it's gonna cost O(n)

// compare again to array where we can push to the end in O(1)

// ok now let's see where linked list is faster

// inserting item at the beginning

// linked list - O(1) because we just set a new head and point next to the previous head

// with arrays it's O(n) because we have to change the index on all the other values / shift them to the right
