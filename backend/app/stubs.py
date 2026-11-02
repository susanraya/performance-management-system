"""What a generated view returns until someone implements it.

A stub that returns a body rather than raising keeps the service startable, so the
frontend can be built against the agreed shape while the views are still being written.
"""

from rest_framework.request import Request


def not_implemented(request: Request, path: str) -> dict[str, str]:
    return {
        "endpoint": f"{request.method} {path}",
        "status": "not_implemented",
        "detail": "Scaffolded from the approved API spec; no behaviour yet.",
    }
