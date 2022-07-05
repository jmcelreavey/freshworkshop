#!/bin/bash

echo "Waiting for DB"
/app/wait-for-it.sh -t 30 db:3306 -- echo "DB READY"

deno run -A --watch=static/,routes/ dev.ts