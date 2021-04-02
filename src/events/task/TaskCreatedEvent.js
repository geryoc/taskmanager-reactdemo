export default class TaskCreatedEvent {
  constructor(task) {
    this.args = [task];
  }
}
