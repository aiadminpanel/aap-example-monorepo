# aap-example-monorepo

A minimal **npm workspaces monorepo** app, kept as a deploy example for [AI Admin Panel](https://aiadminpanel.com).

AI Admin Panel deploys it from this repository with **Git Deploy** (and **AI Deploy**) and checks
the result regularly: the page at `/` must contain the marker `aap-example:monorepo`. Use it to see how
your own npm workspaces monorepo project is built, or as a starting point.

The app lives in `apps/web` and imports a shared package from `packages/greeting`, the layout Turborepo-style projects use. `npm start` at the root starts `apps/web`.

- The app listens on `$PORT` (default 8080).
- No secrets in this repository.
- License: MIT.
