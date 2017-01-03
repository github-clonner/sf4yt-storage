
import type { Video } from './model/Video'

/**
 * This interface describes the methods that should be implemented by a class
 * providing the access to the videos in the storage for the purpose of showing
 * a video feed and marking videos as watched.
 */
export interface VideoStorage {
  /**
   * Fetches the videos matching the specified query (if provided), published
   * after the specified since time (inclusive) and before the specified until
   * time (exclusive).
   *
   * Only the videos uploaded to the channels subscribed to by at least one
   * enabled user account or incognito channel subscription, or were added to
   * a playlist subscribed by at least one incognito playlist subscription.
   *
   * @param query The query that the returned videos must match. The query
   *        matching method to use is left to the implementation.
   * @param since The time at or after which the returned videos must have been
   *        published.
   * @param until The time before which the returned videos must have been
   *        published.
   * @param maxVideos The maximum number of matching videos to return.
   * @param includeWatched Flag signalling whether the videos marked as watched
   *        will be included in the returned videos.
   * @return A promise that will resolve to the matched videos. The returned
   *         videos will be sorted from the most lately published to the most
   *         early published.
   */
  getVideos(
    query: ?string,
    since: Date,
    until: Date,
    maxVideos: number,
    includeWatched: boolean
  ): Promise<Array<Video>>;

  /**
   * Marks the provided video as watched in the storage.
   *
   * The method has no effect if the video is already marked as watched in the
   * storage.
   *
   * @param video The video to mark as watched.
   * @return A promise that resolves to the updated video entity re-retrieved
   *         from the storage. The promise resolves once the changes has been
   *         persisted.
   */
  markAsWatched(video: Video): Promise<Video>;
}
