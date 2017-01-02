
import type { AccountState } from './AccountState'
import type { Channel } from './Channel'
import type { Playlist } from './Playlist'

/**
 * The Account represents a YouTube account of the user of this extension. This
 * model is NOT used to represent the YouTube channels the user is subscribed
 * to.
 */
interface Account {
  /**
   * Google account ID, as provided by the Chrome OAuth2 API.
   */
  id: string;

  /**
   * The YouTube channel associated with the account.
   */
  channel: Channel;

  /**
   * The name of the Google account (currently the e-mail address).
   */
  title: string;

  /**
   * The state of the account, must be one of the {@linkcode AccountState.*}
   * constants.
   */
  state: AccountState;

  /**
   * The last error reported by the YouTube API related to this account. Set
   * to {@code null} if the account works properly.
   */
  lastError: ?string;

  /**
   * The of playlist that contains the watch history of the account.
   */
  watchHistoryPlaylist: Playlist;

  /**
   * The "watch later" playlist for this account.
   */
  watchLaterPlaylist: Playlist;
}

export type Account = Account
