
import type { Account } from './model/Account'

/**
 * This interface describes the methods that should be implemented by a class
 * providing the access to the accounts in the storage for the purpose of
 * managing the user's authorized accounts.
 */
export interface AccountStorage {
  /**
   * Retrieves all accounts currently stored in the storage.
   *
   * @return A promise that resolves to the accounts in the storage.
   */
  getAccounts(): Promise<Array<Account>>;

  /**
   * Adds the provided account to the storage.
   *
   * The method may resolve the returned promise without synchronizing the
   * account's subscriptions and subscription videos, depending on the
   * implementation.
   *
   * @param account The account to store into the storage.
   * @return A promise that resolves to the stored account entity. The promise
   *         resolves when the account has been persisted.
   */
  addAccount(account: Account): Promise<Account>;

  /**
   * Enables the specified account. This will make all videos associated with
   * this account through its subscribed channels available (again).
   *
   * The method has no effect if the account is already enabled.
   *
   * @param account The account to enable.
   * @return A promise that resolves when the account has been enabled. The
   *         promise resolves when the change has been persisted.
   */
  enableAccount(account: Account): Promise<Account>;

  /**
   * Disables the specified account. This will make all videos that are not
   * included in any other subscribed channel or playlist that are subscribed
   * by another enabled account or incognito subscription.
   *
   * The method has no effect if the account is already disabled.
   *
   * @param account The account to disable.
   * @return A promise that resolves when the account has been disabled. The
   *         promise resolves when the change has been persisted.
   */
  disableAccount(account: Account): Promise<Account>;

  /**
   * Removes the specified account from the storage.
   *
   * The method does not have to remove the account's subscriptions,
   * playlists and videos immediately with the account, depending on the
   * implementation.
   *
   * The method has no effect if the specified account is not stored in the
   * storage.
   *
   * @param account The account to remove from the storage.
   * @return A promise that resolves when the account has been removed.
   */
  removeAccount(account: Account): Promise<void>;
}
