
export interface StorageMaintaner {
  updateSubscriptions(): Promise<void>;

  updateVideoViews(ttl: number): Promise<void>;
}
