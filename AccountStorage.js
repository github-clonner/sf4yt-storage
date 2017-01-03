
import type { Account } from './model/Account'

export interface AccountStorage {
  getAccounts(): Promise<Account>;

  addAccount(account: Account): Promise<Account>;

  /**
   * Enables the specified account. This will make all videos associated with
   * this account through its subscribed channels available (again).
   *
   * The method has no effect if the account is already enabled.
   *
   * @param account The account to enable.
   * @return A promise that resolves when the account has been enabled.
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
   * @return A promise that resolves when the account has been disabled.
   */
  disableAccount(account: Account): Promise<Account>;

  /**
   * Removes the specified account from the storage.
   *
   * The method does not have to remove the account's subscriptions,
   * playlists and videos immediately with the account, depending on the
   * implementation.
   *
   * @param account The account to remove from the storage.
   * @return A promise that resolves when the account has been removed.
   */
  removeAccount(account: Account): Promise<void>;
}
