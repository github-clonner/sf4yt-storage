
/**
 * Types of subscriptions.
 *
 * @enum {string}
 */
const SubscriptionTypes = {
  /**
   * A subscription to a YouTube channel.
   */
  CHANNEL: 'CHANNEL',

  /**
   * A subscription to a playlist.
   */
  PLAYLIST: 'PLAYLIST'
}
Object.freeze(SubscriptionTypes)

export type SubscriptionType = $Keys<typeof SubscriptionTypes>
export default SubscriptionTypes
