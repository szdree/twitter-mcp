# Twitter MCP Server

[![smithery badge](https://smithery.ai/badge/@enescinar/twitter-mcp)](https://smithery.ai/server/@enescinar/twitter-mcp)

This MCP server allows Clients to interact with Twitter, enabling posting tweets and searching Twitter.

<a href="https://glama.ai/mcp/servers/dhsudtc7cd">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/dhsudtc7cd/badge" alt="Twitter Server MCP server" />
</a>

## Quick Start

1. Create a Twitter Developer account and get your API keys from [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)

2. Add this configuration to your Claude Desktop config file:

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`  
**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "twitter-mcp": {
      "command": "npx",
      "args": ["-y", "@szdree/twitter-mcp"],
        "env": {
          "CLIENT_ID": "",
          "CLIENT_SECRET": "",
          "BEARER_TOKEN": "",
          "ACCESS_TOKEN": "",
          "REFRESH_TOKEN": ""
        }
    }
  }
}
```

3. Restart Claude Desktop

That's it! Claude can now interact with Twitter through two tools:

- `post_tweet`: Post a new tweet
- `search_tweets`: Search for tweets

## Example Usage

Try asking Claude:
- "Can you post a tweet saying 'Hello from Claude!'"
- "Can you search for tweets about Claude AI?"

## Troubleshooting

Logs can be found at:
- **Windows**: `%APPDATA%\Claude\logs\mcp-server-twitter.log`
- **macOS**: `~/Library/Logs/Claude/mcp-server-twitter.log`

### Common Issues

#### Search Functionality Not Working
- Make sure your `BEARER_TOKEN` is valid and correctly configured
- Twitter API v2 searching requires elevated access for certain endpoints
- Check log files for specific error messages
- Keep in mind that Twitter's free tier has rate limits for search API

### Environment Variables

Copy the `.env.example` file to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

Then edit the `.env` file with your Twitter API credentials.

## Development

If you want to contribute or run from source:

1. Clone the repository:
```bash
git clone https://github.com/szdree/twitter-mcp.git
cd twitter-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Build:
```bash
npm run build
```

4. Run:
```bash
npm start
```

## License

MIT