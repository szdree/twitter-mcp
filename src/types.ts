import { z } from 'zod';

// Configuration schema with validation
export const ConfigSchema = z.object({
    client_id: z.string().min(1, 'Client ID is required'),
    client_secret: z.string().min(1, 'Client Secret is required'),
    bearer_token: z.string().min(1, 'Bearer Token is required'),
    access_token: z.string().optional(),
    refresh_token: z.string().optional()
});

export type Config = z.infer<typeof ConfigSchema>;

// Tool input schemas
export const PostTweetSchema = z.object({
    text: z.string()
        .min(1, 'Tweet text cannot be empty')
        .max(280, 'Tweet cannot exceed 280 characters')
});

export const SearchTweetsSchema = z.object({
    query: z.string().min(1, 'Search query cannot be empty'),
    count: z.number()
        .int('Count must be an integer')
        .min(10, 'Minimum count is 10')
        .max(100, 'Maximum count is 100')
});

export type PostTweetArgs = z.infer<typeof PostTweetSchema>;
export type SearchTweetsArgs = z.infer<typeof SearchTweetsSchema>;

// API Response types
export interface TweetMetrics {
    likes: number;
    retweets: number;
}

export interface PostedTweet {
    id: string;
    text: string;
}

export interface Tweet {
    id: string;
    text: string;
    authorId: string;
    metrics: TweetMetrics;
    createdAt: string;
}

export interface TwitterUser {
    id: string;
    username: string;
}

// Error types
export class TwitterError extends Error {
    constructor(
        message: string,
        public readonly code: string,
        public readonly status?: number
    ) {
        super(message);
        this.name = 'TwitterError';
    }

    static isRateLimit(error: unknown): error is TwitterError {
        return error instanceof TwitterError && error.code === 'rate_limit_exceeded';
    }
}

// Response formatter types
export interface FormattedTweet {
    position: number;
    author: {
        username: string;
    };
    content: string;
    metrics: TweetMetrics;
    url: string;
}

export interface SearchResponse {
    query: string;
    count: number;
    tweets: FormattedTweet[];
}