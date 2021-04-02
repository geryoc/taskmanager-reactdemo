export default class TaskDeletedEvent {
  constructor(task) {
    this.args = [task];
  }
}
