export class CounterService {
  count: number = 0;

  incrementCount() {
    this.count++;
    console.log(this.count);
  }
}
