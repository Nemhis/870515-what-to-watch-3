import {formatMinutes} from './utils';

describe(`Utils tests`, () => {
  it(`Correct format minutes`, () => {
    expect(formatMinutes(0)).toBe(``);
    expect(formatMinutes(10)).toBe(`10m`);
    expect(formatMinutes(60)).toBe(`1h`);
    expect(formatMinutes(125)).toBe(`2h 5m`);
  });
});
