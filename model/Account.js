
import type { AccountState } from './AccountState'

/**
 * The Account represents a YouTube account of the user of this extension. This
 * model is NOT used to represent the YouTube channels the user is subscribed
 * to.
 */
interface Account {
  /**
   * Google account ID, provided by the Chrome OAuth2 API.
   */
  id: string

  /**
   * ID of the YouTube channel associated with the account.
   */
  channelId: string

  /**
   * The name of the Google account (currently the e-mail address).
   */
  title: string

  /**
   * The state of the account, must be one of the {@linkcode AccountState.*}
   * constants.
   */
  state: AccountState

  /**
   * The last error reported by the YouTube API related to this account. Set
   * to {@code null} if the account works properly.
   */
  lastError: ?string

  /**
   * ID the of playlist that contains the watch history of the account.
   */
  watchHistoryPlaylistId: string

  /**
   * ID of the "watch later" playlist for this account.
   */
  watchLaterPlaylistId: string
}

export type Account = Account
