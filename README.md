# Python on Vercel Academy

The student projects for [Python on Vercel](https://vercel.com/academy/python-on-vercel). Build Hazel Home, a Next.js storefront backed by FastAPI, using Vercel Services.

- `starter/`: two independent applications with mock frontend inventory. Add Services configuration in Lesson 2.1 and connect the frontend in Lesson 2.2.
- `complete/`: the finished reference with `vercel.json`, service routing, and a connected frontend.

## Follow the course

```bash
git clone https://github.com/vercel/academy-python-course.git
cd academy-python-course/starter
```

The repository root is one level above the student project. Run backend commands in `starter/backend/` and npm commands in `starter/frontend/`. Run Vercel commands from `starter/` once you have created `vercel.json`.

You need [uv](https://docs.astral.sh/uv/getting-started/installation/), a current Node.js LTS release, and the current Vercel CLI. uv manages the backend environment and can install a supported Python version (3.12, 3.13, or 3.14). Python 3.14 is the newest supported minor; Vercel's default is 3.12. To select 3.14 for deployment, set `requires-python = ">=3.14,<3.15"` in the project's `backend/pyproject.toml` and run `uv sync --python 3.14` from `backend/`. See [Python version selection](https://vercel.com/docs/functions/runtimes/python/python-version).

The course assumes some FastAPI and npm familiarity. A Hobby account supports a personal, non-commercial learning deployment.

## Run the finished reference

Install uv using the linked instructions for your operating system and confirm `uv --version` works. From the repository root, install the dependencies and start both apps:

```bash
cd complete/backend
uv sync --python 3.12
uv run python --version
cd ../frontend
npm install
cd ..
npm install -g vercel@latest
vercel dev -L
```

`uv sync` creates `backend/.venv` and `backend/uv.lock`; it downloads Python 3.12 if needed. These commands also work in Windows PowerShell without activating the environment. Commit the generated `backend/uv.lock` and `frontend/package-lock.json` if they are new or changed.

`vercel dev -L` starts FastAPI and Next.js together, routes requests, and supplies the backend binding. This is the only development server command needed for the finished app. The separate `uv run fastapi dev main.py` and `npm run dev` commands in Section 1 are for touring the starter before adding Services.

Open the local URL printed by the CLI. `/` renders the storefront; `/api/items` returns eight furniture items. Change an item in `complete/backend/main.py`, wait for the server to reload, and refresh the storefront to verify the connection.

## How it works

```text
complete/
├── vercel.json
├── backend/
│   ├── main.py
│   └── pyproject.toml
└── frontend/
    ├── app/
    └── package.json
```

`vercel.json` defines a Next.js service rooted at `frontend/` and a FastAPI service rooted at `backend/`, with entrypoint `main:app`. Public rewrites route `/api` and `/api/*` to the backend before the frontend catch-all.

The frontend declares a service binding named `BACKEND_URL`. Vercel supplies its value at runtime, locally and for each deployment. The Server Component awaits `connection()` from `next/server` before reading the binding, then fetches inventory with `cache: "no-store"`. This keeps the missing-binding check out of build-time prerendering. Running Next.js alone does not provide the binding; use `vercel dev -L` at the project root for the connected application.

## Deploy

From the project directory containing `vercel.json`, authenticate and inspect the intended project before deploying:

```bash
vercel login
vercel link
vercel project inspect --non-interactive
vercel deploy
```

This creates a preview. Use `vercel deploy --prod` when you intend to update production. Keep the project root at `starter/` or `complete/`, depending on which project you are deploying. Verify both the storefront and `/api/items` at the returned URL. Account for Deployment Protection when using curl.

## Companion skill

Install the course skill from the student project root:

```bash
npx skills add vercel-labs/academy-skills --skill python-on-vercel -y
```

## Earlier course versions

Earlier versions kept Next.js at the project root and FastAPI in `api/index.py`. This version uses separate service roots and explicit configuration. Existing `/api` Python functions remain supported by Vercel, but don't combine the older lesson paths with this starter.

See the current [Services](https://vercel.com/docs/services), [routing](https://vercel.com/docs/services/routing), and [bindings](https://vercel.com/docs/services/bindings) documentation.
