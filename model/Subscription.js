// @flow

import type { Account } from './Account'
import type { Channel } from './Channel'
import type { Playlist } from './Playlist'
import type { SubscriptionState } from './SubscriptionState'
import type { SubscriptionType } from './SubscriptionType'

/**
 * An entity representing a subscription to new videos from a single channel or
 * added to a single playlist.
 */
export interface Subscription {
  /**
   * The type of this subscription, must be one of the
   * {@linkcode SubscriptionType.*} constants.
   */
  type: SubscriptionType;

  /**
   * The Playlist from which the videos should be retrieved. This is the
   * "uploads" playlist if this is a subscription to a YouTube channel.
   */
  playlist: Playlist;

  /**
   * The channel to which the subscription is made to. The field is set to the
   * channel owning the playlist for incognito subscriptions to a playlist.
   */
  channel: Channel;

  /**
   * The state of this subscription, must be one of the
   * {@linkcode SubscriptionState.*} constants.
   */
  state: SubscriptionState;

  /**
   * The last reported error related to this subscription, set to
   * {@code undefined} if there is no current error.
   */
  lastError: ?string;

  /**
   * The Google account from which this subscription has been provided. The
   * field is {@code undefined} if this is an incognito subscription.
   */
  account: ?Account;

  /**
   * Set to {@code true} if this is an incognito subscription (has been
   * provided manually instead of read from YouTube channel subscriptions); set
   * to {@code false} otherwise.
   */
  isIncognito: boolean;
}
