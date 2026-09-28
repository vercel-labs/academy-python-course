# Python on Vercel Academy

The student projects for [Python on Vercel](https://vercel.com/academy/python-on-vercel). Build Hazel Home, a Next.js storefront backed by FastAPI, using Vercel Services.

- `starter/`: two independent applications with mock frontend inventory. Add Services configuration in Lesson 2.1 and connect the frontend in Lesson 2.2.
- `complete/`: the finished reference with `vercel.json`, service routing, and a connected frontend.

## Follow the course

```bash
git clone https://github.com/vercel-labs/academy-python-course.git
cd academy-python-course/starter
```

The repository root is one level above the student project. Run backend commands in `starter/backend/` and npm commands in `starter/frontend/`. Run Vercel commands from `starter/` once you have created `vercel.json`.

You need Python 3.12+, a current Node.js LTS release, and the current Vercel CLI. The course assumes some FastAPI and npm familiarity. A Hobby account supports a personal, non-commercial learning deployment.

## Run the finished reference

From the repository root, install the backend into a virtual environment:

```bash
cd complete/backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install .
cd ../frontend
npm install
cd ..
npm install -g vercel@latest
vercel dev -L
```

On Windows PowerShell, activate the backend environment with `.venv\Scripts\Activate.ps1`.

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

The frontend declares a service binding named `BACKEND_URL`. Vercel supplies its value at runtime, locally and for each deployment. The Server Component uses that URL to fetch inventory with `cache: "no-store"`. Running Next.js alone does not provide the binding; use `vercel dev -L` at the project root for the connected application.

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

The repository also includes a Cursor skill at `.cursor/skills/academy-python-course/SKILL.md`. Both describe the Services version of this course.

## Earlier course versions

Earlier versions kept Next.js at the project root and FastAPI in `api/index.py`. This version uses separate service roots and explicit configuration. Existing `/api` Python functions remain supported by Vercel, but don't combine the older lesson paths with this starter.

See the current [Services](https://vercel.com/docs/services), [routing](https://vercel.com/docs/services/routing), and [bindings](https://vercel.com/docs/services/bindings) documentation.
