export class Todo {
  private title = '';
  private completed = false;
  constructor(inTitle: string) {
    this.title = inTitle || '';
  }
  get done(): boolean {
    return this.completed;
  }

  getTitle(): string {
    return this.title;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }
}
