
export interface StorageUpdater {
  resolveAccount(accountId: string): Promise<void>;

  updateSubscriptions(): Promise<void>;

  updateVideoViews(ttl: number): Promise<void>;
}
