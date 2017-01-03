
import type { Account } from './model/Account'

export interface AccountStorage {
  addAccount(account: Account): Promise<Account>;

  enableAccount(account: Account): Promise<Account>;

  disableAccount(account: Account): Promise<Account>;

  removeAccount(account: Account): Promise<void>;
}
