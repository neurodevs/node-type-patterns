export interface FileLoader<Content> {
    load: (path: string) => Promise<Content>
}

export interface Extractor<Content, Result> {
    extract: (data: Content) => Result
}

export interface SyncRunnable<Result = void> {
    run: () => Result
}

export interface AsyncRunnable<Result = void> {
    run: () => Promise<Result>
}
