
import type { Video } from './model/Video'

export interface VideoStorage {
  getVideos(query: ?string, since: Date, until: Date, maxVideos: number, includeWatched: boolean): Promise<Array<Video>>;

  markAsWatched(video: Video): Promise<Video>;
}
