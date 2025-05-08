// Uncomment the code below and write your tests
import path from 'path';
import fs from 'node:fs';
import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from '.';

describe('doStuffByTimeout', () => {
  const callback = jest.fn();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callback, 1000);
    expect(setTimeout).toHaveBeenCalledWith(callback, 1000);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    doStuffByTimeout(callback, 2000);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setInterval');
    const callback = jest.fn();
    doStuffByInterval(callback, 1000);
    expect(setInterval).toHaveBeenCalledWith(callback, 1000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    const callback = jest.fn();
    doStuffByInterval(callback, 2000);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(10001);
    expect(callback).toHaveBeenCalledTimes(5);
  });
});

describe('readFileAsynchronously', () => {
  jest.mock('path');
  // const mockFullPath = 'c:/windows/ssh.md';

  test('should call join with pathToFile', async () => {
    // Write your test here
    const mockFilename = 'index.ts';
    const join = jest.spyOn(path, 'join');
    await readFileAsynchronously(mockFilename);
    expect(join).toHaveBeenCalledWith(__dirname, mockFilename);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    const mockFilename = 'ssh.ts';
    await expect(readFileAsynchronously(mockFilename)).resolves.toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    const mockFilename = 'index.ts';
    jest.spyOn(path, 'join');
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    const result = await readFileAsynchronously(mockFilename);
    expect(typeof result).toBe('string');
  });
});
