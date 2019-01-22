import { MyPrefixPipe } from './my-prefix.pipe';

describe('MyPrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPrefixPipe();
    expect(pipe).toBeTruthy();
  });
});
