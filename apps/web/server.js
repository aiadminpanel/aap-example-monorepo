import express from 'express'
import { greeting } from '@example/greeting'

const app = express()
const port = Number(process.env.PORT) || 8080

app.get('/', (_req, res) => {
  res.type('html').send(`<!doctype html><title>aap-example:monorepo</title><h1>Monorepo</h1><p>${greeting('apps/web')}.</p><p>Marker: <code>aap-example:monorepo</code></p>`)
})
app.get('/healthz', (_req, res) => res.json({ ok: true }))

app.listen(port, '0.0.0.0', () => console.log(`listening on ${port}`))
