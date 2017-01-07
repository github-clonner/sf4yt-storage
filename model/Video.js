// @flow

import type { Channel } from './Channel'

/**
 * Model representing a YouTube video.
 */
export interface Video {
  /**
   * Video ID, as provided by the YouTube Data API.
   */
  id: string;

  /**
   * Video title.
   */
  title: string;

  /**
   * Video description.
   */
  description: string;

  /**
   * The moment at which the video has been uploaded and published.
   */
  publishedAt: Date;

  /**
   * Thumbnails of the video. The keys are quality description strings.
   *
   * The thumbnail qualities, sorted from the lowest to the highest, with their
   * dimensions (at the moment of writing this) attached, are as follows:
   *
   * - {@code default} - 120 &times; 90
   * - {@code medium} - 320 &times; 180
   * - {@code high} - 480 &times; 360
   * - {@code standard} - 640 &times; 480
   * - {@code maxres} - 1280 &times; 720
   */
  thumbnails: {[label: string]: {url: string, width: number, height: number}};

  /**
   * Duration of the video in seconds.
   */
  duration: number;

  /**
   * Number of views of the video.
   */
  viewCount: number;

  /**
   * The YouTube channel to which the video has been uploaded.
   */
  channel: Channel;

  /**
   * Set to {@code true} if this video has already been watched, marked as
   * watched or watched by the "watch history" playlist of any account; set to
   * {@code false} otherwise.
   */
  watched: boolean;

  /**
   * The moment the video's view count has been updated the last time.
   */
  lastUpdate: Date;
}
