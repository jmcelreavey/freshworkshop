FROM denoland/deno:1.23.3

WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
COPY . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache dev.ts

ENTRYPOINT ["/app/entrypoint.sh"]
CMD []