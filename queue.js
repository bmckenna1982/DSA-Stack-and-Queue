const _Node = require('./node')

class Queue {
  constructor() {
    this.first = null,
      this.last = null
  }

  enqueue(data) {
    const node = new _Node(data, null)

    if (this.first === null) {
      this.first = node
    }
    if (this.last) {
      this.last.next = this.node
    }
    this.last = node
  }

  dequeue() {

  }
}

module.exports = Queue