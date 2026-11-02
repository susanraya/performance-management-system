"""The baseline tests the scaffold ships with.

The platform installs this tree and runs `pytest` against it, so there has to be
something green to run before an agent has written anything.
"""

from django.test import Client
from django.urls import get_resolver


def test_health_reports_ok(client: Client) -> None:
    """A failure here means the project does not import or does not start."""
    response = client.get("/health")

    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert set(body["services"]) == {"redis-queue"}


def test_every_generated_url_resolves() -> None:
    """Every path the API spec declares is wired to a view that imports."""
    assert get_resolver().url_patterns
