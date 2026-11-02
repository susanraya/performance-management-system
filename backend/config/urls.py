"""The URL root: the liveness probe, and everything the application declares."""

from django.http import HttpRequest, JsonResponse
from django.urls import include, path

from app.services import configured_services


def health(request: HttpRequest) -> JsonResponse:
    """Liveness probe, and the only view here that is not a stub."""
    return JsonResponse({"status": "ok", "services": configured_services()})


urlpatterns = [
    path("health", health),
    path("", include("app.urls")),
]
