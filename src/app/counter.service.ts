export class CounterService {
  activeToInActiveCount: number = 0;
  inActiveToActiveCount: number = 0;

  incrementActiveCount() {
    this.activeToInActiveCount++;
  }
  incrementInActiveCount() {
    this.inActiveToActiveCount++;
  }
}
