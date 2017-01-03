
export interface StorageUpdater {
  updateSubscriptions(): Promise<void>;

  updateVideoViews(ttl: number): Promise<void>;
}
