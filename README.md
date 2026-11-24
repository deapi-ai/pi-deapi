# deAPI for Pi

A [Pi](https://pi.dev) package that adds [deAPI](https://deapi.ai): image, video, speech and music generation, transcription of files and YouTube, TikTok, X, Twitch and Kick links, video description and OCR.

It contains:

- an extension that registers deAPI's hosted MCP server (`https://mcp.deapi.ai/mcp`) as `deapi`, with its tools loaded through tool search, so they do not take up context until needed;
- a `deapi` skill that tells the agent which tool fits which task, to check prices before long jobs and not to guess model names.

## Install

```bash
pi install npm:@deapi/pi
```

Then authenticate in one of two ways:

- **API key:** create one at [app.deapi.ai/settings/api-keys](https://app.deapi.ai/settings/api-keys), set `DEAPI_API_KEY` in your environment and start Pi.
- **Sign in:** without `DEAPI_API_KEY`, open `/mcp` in Pi, select `deapi` and sign in.

Try: *"Transcribe https://www.youtube.com/watch?v=... and summarise it"* or *"Make a 16:9 image of a lighthouse at dusk"*.

### Without the package

```bash
pi mcp add deapi --url "https://mcp.deapi.ai/mcp?source=pi" --bearer-token-env-var DEAPI_API_KEY
```

A `deapi` entry in `mcp.json` takes precedence over the one this package registers.

## Notes

- Jobs are paid from your deAPI balance. Every generation tool has a `*_price` twin that returns the cost without running the job.
- Requests carry an `X-Deapi-Source: pi` header so deAPI can see traffic from this package. Nothing about you or your prompts is added.

## License

MIT
