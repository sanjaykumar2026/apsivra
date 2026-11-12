export interface StoredObject {
  key: string;
  body: Uint8Array;
  contentType: string;
}

export interface StoragePort {
  put(object: StoredObject): Promise<void>;
  get(key: string): Promise<StoredObject | null>;
}

export class LocalStoragePort implements StoragePort {
  constructor(private readonly root: string) {}

  async put(_object: StoredObject): Promise<void> {
    throw new Error(`Local storage at ${this.root} is not connected yet.`);
  }

  async get(): Promise<StoredObject | null> {
    return null;
  }
}
