export interface FileLoader<Content> {
    load: (path: string) => Promise<Content>
}

export interface RuleExtractor<Content, Rule, Result> {
    extract: (data: Content, rules: Rule[]) => Result
}

export interface SyncRunnable<Result = void> {
    run: () => Result
}

export interface AsyncRunnable<Result = void> {
    run: () => Promise<Result>
}
