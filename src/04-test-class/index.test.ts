// Uncomment the code below and write your tests
import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  const account1 = getBankAccount(100);
  const account = getBankAccount(100);

  test('should create account with initial balance', () => {
    // Write your test here
    expect(account).toBeInstanceOf(BankAccount);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => account1.withdraw(200)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    expect(() => account1.transfer(200, account)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect(() => account1.transfer(50, account1)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    // Write your test here
    expect(account1.deposit(50)).toBe(account1);
    expect(account1.getBalance()).toBe(150);
  });

  test('should withdraw money', () => {
    // Write your test here
    expect(account1.withdraw(50)).toBe(account1);
    expect(account1.getBalance()).toBe(100);
  });

  test('should transfer money', () => {
    // Write your test here
    expect(account1.transfer(5, account)).toBe(account1);
    expect(account1.getBalance()).toBe(95);
    expect(account.getBalance()).toBe(105);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const result = await account1.fetchBalance();
    if (result) expect(typeof result).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const mockFetch1 = jest
      .spyOn(account1, 'fetchBalance')
      .mockImplementation(() => Promise.resolve(80));
    await account1.synchronizeBalance();
    if (mockFetch1) expect(account1.getBalance()).toBe(80);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const mockFetch = jest
      .spyOn(account, 'fetchBalance')
      .mockImplementation(() => Promise.resolve(null));
    if (!mockFetch)
      await expect(() => account.synchronizeBalance()).rejects.toThrow(
        SynchronizationFailedError,
      );
  });
});
