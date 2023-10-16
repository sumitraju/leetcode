class Node{
    constructor(data) {
        this.data = (data===undefined ? 0 : data)
    }
}

class LinkedList{
    constructor(head) {
        this.head = (head===undefined ? null : head)
    }

    is_empty() {
        return this.head == null
    }

    size(){
        let current = this.head
        let count = 0

        while(current){
            count += 1
            current = current.next_node
        }
        return current
    }

    add(data){
        let new_node = new Node(data)
        new_node.next_node = this.head
        this.head = new_node
    }

    repr() {
        let nodes = []
        let current = this.head

        while(current){
            if(current == this.head){
                nodes.push("[Head: " + current.data + "]")
            }else if(current.next_node == null){
                nodes.push("[Tail: " + current.data + "]")
            }else{
                nodes.push("[" + current.data + "]")
            }
            current = current.next_node
        }
        return nodes.join("->")
    }

    search(key){
        let current = this.head

        while(current){
            if(current.data == key){
                return current
            }else{
                current = current.next_node
            }
        }
        return null
    }

    insert(data,index){
        if(index==0){
            this.add(data)
        }

        if(index > 0){
            let new_node = new Node(data)

            let position = index
            let current = this.head

            while(position > 1){
                current = current.next_node
                position -=1

            }
            let prev_node = current
            let next_node = current.next_node
        
            prev_node.next_node = new_node
            new_node.next_node = next_node
        }
    }
    remove(key){
        let current = this.head
        let previous = null
        let found = false

        while(current && found == false){
            if(current.data == key && current == this.head){
                found = true
                this.head = current.next_node
                return current
            }else if(current.data == key){
                found = true
                previous.next_node = current.next_node
                return current
            }else{
                previous = current
                current = current.next_node
            }
        }
        return null
    }
}

l = new LinkedList()
l.add(10)
l.add(20)
l.add(3)
