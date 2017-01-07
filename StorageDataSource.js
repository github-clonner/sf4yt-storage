// @flow

import type { Account } from './model/Account'
import type { Playlist } from './model/Playlist'
import type { Subscription } from './model/Subscription'
import type { Video } from './model/Video'

/**
 * Data provider for the {@linkcode StorageUpdater}, fetches the data from the
 * YouTube Data API.
 */
export interface StorageDataSource {
  /**
   * Fetches the details and related information of the specified account. This
   * required the user to choose the account of the specified ID as the primary
   * account so that the request to the YouTube Data API can be properly
   * authorized.
   *
   * @param accountId The GAIA user ID of the account.
   * @return A promise that will resolve to the account details.
   */
  resolveAccount(accountId: string): Promise<Account>;

  /**
   * Fetches the current list of subscribed channels of the specified user's
   * account.
   *
   * @param account The user's Google account for which the subscribed channels
   *        should be fetched.
   * @return A promise that will resolve to the channel subscriptions currently
   *         subscribed by the specified account.
   */
  fetchSubscriptions(account: Account): Promise<Array<Subscription>>;

  /**
   * Fetches the updates of the provided playlists. The method checks whether
   * the thumbnails, the video count of the playlist's videos, playlist title
   * or description has been changed.
   *
   * @param playlists The playlists that should be checked for updated.
   * @return A promise that will resolve to the playlists that were updated
   *         with new data. The playlists that has not changed in the YouTube
   *         Data API since their last updated will not be included.
   */
  fetchPlaylistUpdates(playlists: Array<Playlist>): Promise<Array<Playlist>>;

  /**
   * Fetches the videos from the specified playlist, starting the most recently
   * added videos and working its way towards the most early added ones.
   *
   * The videos are fetched in batches, the callback passed as the second
   * argument is used to determine when enough batches of videos have been
   * fetched (unless the end of the playlist has been reached). The method does
   * not have to invoke the predicate on the last batch if the end of the
   * playlist is reached.
   *
   * @param playlist The playlist from which the videos should be fetched.
   * @param shouldContinue A predicate invoked on each fetched batch of videos.
   *        The predicate will receive the last fetched batch of videos (that
   *        is excluding the previously fetched batches) and should return
   *        {@code true} if the following batch should be fetched as well.
   * @return A promise that will resolve to all of the fetched videos.
   */
  fetchVideos(
    playlist: Playlist,
    shouldContinue: (videos: Array<Video>) => boolean
  ): Promise<Array<Video>>;

  /**
   * Fetches the current view counts for the provided videos.
   *
   * @param videos The videos for which the current view count should be
   *        fetched.
   * @return A promise that will resolve to the videos that had their view
   *         count updated.
   */
  fetchViewCountUpdates(videos: Array<Video>): Promise<Array<Video>>;
}
