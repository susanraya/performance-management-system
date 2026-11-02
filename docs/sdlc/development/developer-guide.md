# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `3a0f283` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
This repository is a Quorq-generated performance management system split into two independently run apps: an approved Angular 22 single-page app (served via Vite through the Analog plugin) that currently renders seeded sample data, and a Django 5.1 + Django REST Framework backend that, since no backend architecture was approved yet, ships only a health check and the scaffolding (models, serializers, services, urls) for future endpoints. Postgres 16 and Redis are provisioned via docker-compose for later use once the backend grows beyond its current stub.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (for npm/Vite/Angular tooling)
- Python 3.12 (matches backend/Dockerfile base image)
- Docker and Docker Compose (for Postgres and Redis)
- pip
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Copy .env.example to .env and fill in the required values
2. cd backend && pip install -r requirements.txt
3. python manage.py migrate --run-syncdb   # creates tables from app/models.py (none yet beyond Django defaults)
4. cd ../frontend && npm install
5. (optional) from the repo root: docker-compose up -d   # starts Postgres on 5432 and Redis on 6379
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `python manage.py runserver` | Runs the Django/DRF app locally; exposes GET /health |
| frontend dev | `npm run dev` | Starts the Vite dev server for the Angular (Analog) SPA |
| frontend build | `npm run build` | Compiles the Angular components ahead of time via the Analog Vite plugin and bundles the app |
| frontend preview | `npm run preview` | Serves the production build locally |
| docker services | `docker-compose up -d` | Starts the Postgres 16 and Redis containers defined in docker-compose.yml |
| backend container | `docker build -t backend ./backend` | Builds the backend image; its CMD runs migrate --run-syncdb then gunicorn on 0.0.0.0:8000 |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend/` | Django REST Framework service (config + app) |
| `backend/app/` | The single Django app: models.py, serializers.py, services.py, urls.py, stubs.py, apps.py |
| `backend/config/` | Django project settings, root urls.py, wsgi.py |
| `backend/tests/` | pytest/pytest-django tests (currently test_health.py) |
| `frontend/` | Angular 22 SPA built/served with Vite via the Analog plugin |
| `frontend/src/` | App source: main.ts, app component, lib/ helpers (api.ts, ui.ts, icons.ts, navigate.ts, screen-base.ts) |
| `frontend/e2e/` | Playwright end-to-end specs |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend is a single Django app named 'app' holding models/serializers/services/urls rather than multiple apps
- No Django migrations are checked in; manage.py migrate --run-syncdb creates tables straight from models.py
- Frontend screens are generated to render seeded sample data; frontend/src/lib/api.ts is the designated seam for wiring a screen to the real backend (apiFetch wrapper + API_BASE_URL/API_SECRET_KEY env vars)
- Every screen extends shared helpers from src/lib/screen-base.ts for navigation and branding, and uses the shared src/lib/ui.ts / icons.ts component library
- Styling via Tailwind CSS (@tailwindcss/vite) plus CSS variables in src/index.css for brand tokens
- Linting/formatting: ESLint + Prettier on the frontend, ruff (check and format) on the backend
- Component tests live beside the component they test (*.spec.ts) and run under Vitest with jsdom; Playwright e2e specs live separately under e2e/
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend tests | `pytest` | Runs pytest-django tests from backend/tests (settings via pytest.ini) |
| backend lint | `ruff check .` | Lints the backend Python code |
| frontend unit tests | `npm test` | Runs Vitest component tests (vitest run --passWithNoTests) |
| frontend lint | `npm run lint` | Runs ESLint over the whole frontend app |
| frontend e2e | `npm run test:e2e` | Runs Playwright acceptance tests from e2e/; run 'npm run test:e2e:install' once first to fetch the Chromium browser |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Backend returns errors about missing tables | Run 'python manage.py migrate --run-syncdb' to create tables from backend/app/models.py (no migration files are committed) |
| Frontend calls to the API fail with 401 or connect to the wrong host | Set VITE_API_BASE_URL and VITE_API_SECRET_KEY in the frontend environment to match the backend's URL and SECRET_KEY; frontend/src/lib/api.ts falls back to http://localhost:8000 with no auth header if unset |
| Playwright e2e run fails because no browser is installed | Run 'npm run test:e2e:install' before 'npm run test:e2e' |
| Postgres/Redis containers not reachable | Run 'docker-compose up -d' from the repo root; db listens on 5432 and redis-queue on 6379 per docker-compose.yml |
<!-- sdlc:auto:end troubleshooting -->
