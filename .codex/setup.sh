#!/bin/bash
set -e
pnpm install
pnpm typecheck || true
pnpm lint || true
pnpm test || true
