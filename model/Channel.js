// @flow

import type { Playlist } from './Playlist'

/**
 * Model for storing information about a YouTube channel the user is subscribed
 * to.
 */
export interface Channel {
  /**
   * The ID of the YouTube channel, as provided by the YouTube Data API.
   */
  id: string;

  /**
   * The name of the YouTube channel.
   */
  title: string;

  /**
   * The thumbnails of the channel. The keys are quality description strings,
   * the values are thumbnail URLs.
   *
   * The thumbnail qualities, sorted from the lowest to the highest, with their
   * dimensions (at the moment of writing this) attached, are as follows:
   *
   * - {@code default} - 88 &times; 88 pixels
   * - {@code high} - 240 &times; 240 pixels
   */
  thumbnails: {[label: string]: string};

  /**
   * The playlist containing the uploaded videos.
   */
  uploadsPlaylist: Playlist;
}
