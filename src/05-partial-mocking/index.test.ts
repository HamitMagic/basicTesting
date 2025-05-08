// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  return jest.requireActual<typeof import('./index')>('./index');
});

describe('partial mocking', () => {
  const mockedConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
  afterAll(() => {
    jest.unmock('./index');
    jest.resetModules();
    mockedConsole.mockRestore();
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    mockOne();
    mockTwo();
    mockThree();
    expect(mockedConsole).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
    const mockedConsole = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});
    unmockedFunction();
    expect(mockedConsole).toHaveBeenCalledWith('I am not mocked');
  });
});
