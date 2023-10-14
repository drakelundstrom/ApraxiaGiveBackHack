from typing import AsyncIterable, Awaitable
import asyncio


async def wrap_done(fn: Awaitable, event: asyncio.Event):
    """Wrap an awaitable with a event to signal when it's done or an exception is raised."""
    try:
        await fn
    except Exception as e:
        print(f"Caught exception: {e}")
    finally:
        event.set()
