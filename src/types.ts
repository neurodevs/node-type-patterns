export interface FileLoader<T> {
    load: (path: string) => Promise<T>
}
