
/**
 * This interface describes the methods that should be implemented by a class
 * the manages updating the data stored in the storage using the data fetched
 * from the YouTube Data API using the {@linkcode StorageDataSource}.
 */
export interface StorageUpdater {
  /**
   * Resolves the specified account, that has to be already present in the
   * storage, but nothing but the account ID is known as of yet.
   *
   * This method must be triggered only by a user's action.
   *
   * @param accountId The ID of the user's account to resolve.
   * @return A promise that resolves when the account has been resolved and its
   *         details have been loaded and persisted in the storage.
   */
  resolveAccount(accountId: string): Promise<void>;

  /**
   * Updates the subscriptions of all user's accounts and incognito
   * subscriptions, the playlists of all subscriptions, and fetches all new
   * videos available in those playlists.
   *
   * The method does not have to update disabled accounts and incognito
   * subscriptions.
   *
   * The method must skip over accounts that were not resolved yet.
   *
   * @return A promise that resolves when the method has finished updating the
   *         subscriptions, playlists and videos.
   */
  updateSubscriptions(): Promise<void>;

  /**
   * Updates the video view counts of videos, that did not have their view
   * count updated for longer than the specified {@code ttl} duration.
   *
   * The method should prioritize videos that were not updated for the longest
   * time period. Not all videos have to be updated if there are too many. The
   * method may prioritize more recently published videos, while not
   * prioritizing videos that are already watched or accessible only through
   * the disabled accounts and incognito subscriptions.
   *
   * @param ttl The time period, specified in milliseconds, within which since
   *        the last update is a video's view count considered fresh and wont
   *        be updated.
   * @return A promise that resolves when the method has finished updating the
   *         video views in the storage.
   */
  updateVideoViews(ttl: number): Promise<void>;
}
