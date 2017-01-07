// @flow

/**
 * Enum containing the possible states of a user's YouTube account.
 *
 * @enum {string}
 */
const AccountStates = {
  /**
   * The account is enabled and working properly.
   */
  ACTIVE: 'ACTIVE',

  /**
   * The account is currently disabled.
   */
  DISABLED: 'DISABLED',

  /**
   * The account is enabled, but access to the account is not currently
   * authorized by the user, some features may not be available.
   */
  UNAUTHORIZED: 'UNAUTHORIZED',

  /**
   * The account is enabled, but the YouTube API is reporting an error related
   * to this account.
   */
  ERROR: 'ERROR'
}
Object.freeze(AccountStates)

export type AccountState = $Keys<typeof AccountStates>
export default AccountStates
