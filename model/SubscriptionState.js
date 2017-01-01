
/**
 * Possible states of a subscription to a YouTube channel or playlist.
 *
 * @enum {string}
 */
const SubscriptionStates = {
  /**
   * The subscription is enabled, videos are fetched from the playlist.
   */
  ACTIVE: 'ACTIVE',

  /**
   * The subscription is disabled (either this is a disabled incognito
   * subscription, or the Google account has been disabled).
   */
  DISABLED: 'DISABLED',

  /**
   * The subscription is enabled, but reporting an error.
   */
  ERROR: 'ERROR'
}
Object.freeze(SubscriptionStates)

export type SubscriptionState = $Keys<typeof SubscriptionStates>
export default SubscriptionStates
