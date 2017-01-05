
import type { Subscription } from './model/Subscription'

export interface IncognitoSubscriptionStorage {
  getIncognitoSubscriptions(): Promise<Subscription>;

  addIncognitoSubscription(subscription: Subscription): Promise<Subscription>;

  /**
   * Enables the specified incognito subscription. This will make all videos
   * associated with this subscription available (again).
   *
   * The method has no effect if the subscription is already enabled.
   *
   * @param subscription The subscription to enable.
   * @return A promise that resolves when the subscription has been enabled.
   *         The promise resolves to the updated subscription.
   */
  enableIncognitoSubscription(subscription: Subscription): Promise<Subscription>;

  /**
   * Disables the specified incognito subscription. This will make all videos,
   * that are not included in any other subscribed channel or playlist that are
   * subscribed by another enabled account or incognito subscription, hidden
   * from the video feed.
   *
   * The method has no effect if the subscription is already disabled.
   *
   * @param subscription The subscription to disable.
   * @return A promise that resolves when the subscription has been disabled.
   *         The promise resolves to the updated subscription.
   */
  disableIncognitoSubscription(
    subscription: Subscription
  ): Promise<Subscription>;

  /**
   * Removes the specified incognito subscription from the storage.
   *
   * The method does not have to remove the videos obtained through the
   * provided subscription immediately, depending on the implementation.
   *
   * The method has no effect if the provided subscription is not present in
   * the storage.
   *
   * @param subscription The subscription to remove from the storage.
   * @return A promise that resolves when the subscription has been removed.
   */
  removeIncognitoSubscription(
    subscription: Subscription
  ): Promise<void>;
}
