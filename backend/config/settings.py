"""Django settings for performance management system.

Everything that differs between a laptop and a deployment comes from the environment.
SQLite by default so a fresh clone runs with nothing but `pip install -r
requirements.txt`; point `DATABASE_URL` at the real database when it exists.
"""

import os
import re
from pathlib import Path

import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent

# The platform's sandboxes and servers may hand over DATABASE_URL in SQLAlchemy's form
# ("postgresql+psycopg://..."); dj-database-url reads only the scheme before the "+".
_DATABASE_URL = re.sub(r"^([a-z]+)\+[a-z0-9_]+://", r"\1://", os.getenv("DATABASE_URL", ""))

# Set DJANGO_SECRET_KEY in every deployment: the fallback is for a laptop only.
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "insecure-development-key-change-me")
DEBUG = os.getenv("DJANGO_DEBUG", "false").lower() == "true"
ALLOWED_HOSTS = [h.strip() for h in os.getenv("ALLOWED_HOSTS", "*").split(",") if h.strip()]

INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.auth",
    "corsheaders",
    "rest_framework",
    "app",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "config.urls"
WSGI_APPLICATION = "config.wsgi.application"

DATABASES = {"default": dj_database_url.parse(_DATABASE_URL or f"sqlite:///{BASE_DIR / 'app.db'}")}
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
USE_TZ = True

# The SPA runs on a different origin than the API, so the browser refuses its calls
# unless that origin is allowed here. In development that is the Vite dev server; when
# deployed, the platform injects the frontend's real URL as ALLOWED_ORIGINS (comma
# separated).
_DEV_ORIGINS = ["http://localhost:5173", "http://127.0.0.1:5173"]
CORS_ALLOWED_ORIGINS = [
    o.strip() for o in os.getenv("ALLOWED_ORIGINS", "").split(",") if o.strip()
] or _DEV_ORIGINS
CORS_ALLOW_CREDENTIALS = True

# JSON in and out, and no authentication yet: the views are stubs until a ticket
# implements them, and the tickets decide how each one is protected.
REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": ["rest_framework.renderers.JSONRenderer"],
    "DEFAULT_AUTHENTICATION_CLASSES": [],
    "DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.AllowAny"],
    "UNAUTHENTICATED_USER": None,
}
