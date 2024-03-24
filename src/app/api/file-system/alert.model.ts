export type QuoteData = {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
};

export type Handle<T> = (...args: T[]) => Promise<void>;
