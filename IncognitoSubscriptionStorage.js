
import type { Subscription } from './model/Subscription'

export interface IncognitoSubscriptionStorage {
  addIncognitoSubscription(subscription: Subscription): Promise<Subscription>;

  enableIncognitoSubscription(subscription: Subscription): Promise<Subscription>;

  disableIncognitoSubscription(subscription: Subscription): Promise<Subscription>;

  removeIncognitoSubscription(subscription: Subscription): Promise<Subscription>;
}
