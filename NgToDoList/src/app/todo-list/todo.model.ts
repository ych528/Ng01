export class Todo {
  private title = '';
  private completed = false;
  private editMode = false;
  constructor(inTitle: string) {
    this.title = inTitle || '';
  }
  get done(): boolean {
    return this.completed;
  }

  get editing(): boolean {
    return this.editMode;
  }

  set editable(b1: boolean) {
    this.editMode = b1;
  }

  getTitle(): string {
    return this.title;
  }
  setTitle(inTitle: string): void {
    this.title = inTitle;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }
}
