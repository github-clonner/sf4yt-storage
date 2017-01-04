
import type { Account } from './model/Account'
import type { Playlist } from './model/Playlist'
import type { Subscription } from './model/Subscription'
import type { Video } from './model/Video'

/**
 * Provides data from the YouTube Data API.
 */
export interface StorageDataSource {
  resolveAccount(accountId: string): Promise<Account>;

  fetchSubscriptions(account: Account): Promise<Subscription>;

  fetchPlaylistUpdates(playlists: Array<Playlist>): Promise<Array<Playlist>>;

  fetchVideos(playlist: Playlist, shouldContinue: (videos: Array<Video>) => boolean): Promise<Array<Video>>;

  fetchViewCountUpdates(videos: Array<Video>): Promise<Array<Video>>;
}
