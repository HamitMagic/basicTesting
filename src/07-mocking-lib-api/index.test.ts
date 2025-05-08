// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios', () => {
  return {
    create: () => ({
      get: jest.fn().mockImplementation((path: string) => ({ data: path })),
    }),
  };
});

jest.mock('lodash', () => {
  return {
    throttle: jest.fn().mockImplementation((fn) => fn),
  };
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    // Write your test here
    const response = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi('');
    expect(response).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
    // jest.spyOn(axios, 'get').mockResolvedValue({ data: '/todos/1' });
    const response = await throttledGetDataFromApi('/todos/1');
    expect(response).toBe('/todos/1');
  });

  test('should return response data', async () => {
    // Write your test here
    const response = await throttledGetDataFromApi('todos');
    expect(response).toBeTruthy();
  });
});
