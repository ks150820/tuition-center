interface IQueue<T> {
  enqueue(item: IQueueElement): void;
  dequeue(): T | undefined;
  size(): number;
}
interface IQueueElement {
  url: string;
  method: string;
}
class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  enqueue(item: IQueueElement): void {
    if (this.size() === this.capacity) {
      throw Error('Queue has reached max capacity, you cannot add more items');
    }
    this.storage.push(item as T);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
  }
  size(): number {
    return this.storage.length;
  }
  peek(): T[] {
    return this.storage;
  }
}

const apiQueue = new Queue<{url: string; method: string}>();

export default apiQueue;
