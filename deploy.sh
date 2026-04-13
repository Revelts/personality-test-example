#!/usr/bin/env bash
# AWS EC2 deployment script for sandisktechshift.com
# Run this once on a fresh Ubuntu 22.04 instance.
# Prerequisites: DNS A record for sandisktechshift.com pointing to this EC2 IP.

set -euo pipefail

DOMAIN="sandisktechshift.com"
EMAIL="leynardoyosef@gmail.com"   # <-- replace with your real email

# ── 1. Install Docker + Compose plugin ────────────────────────────────────────
if ! command -v docker &>/dev/null; then
  apt-get update -y
  apt-get install -y ca-certificates curl gnupg lsb-release
  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
    | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    > /etc/apt/sources.list.d/docker.list
  apt-get update -y
  apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
  systemctl enable --now docker
fi

echo "Docker version: $(docker --version)"

# ── 2. Issue first SSL cert (nginx serves ACME challenge via HTTP only) ────────
echo ">>> Starting temporary HTTP-only nginx for ACME challenge..."

docker run -d --rm --name nginx_init \
  -p 80:80 \
  -v "$(pwd)/nginx/nginx-init.conf:/etc/nginx/nginx.conf:ro" \
  -v sandisk_certbot_webroot:/var/www/certbot \
  nginx:alpine

sleep 3

echo ">>> Requesting Let's Encrypt cert for ${DOMAIN}..."
docker run --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v sandisk_certbot_webroot:/var/www/certbot \
  certbot/certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "${EMAIL}" \
    --agree-tos \
    --no-eff-email \
    -d "${DOMAIN}" \
    -d "www.${DOMAIN}"

docker stop nginx_init || true

# ── 3. Build and start full stack ─────────────────────────────────────────────
echo ">>> Building application image..."
docker compose build

echo ">>> Starting all services..."
docker compose up -d

echo ""
echo "✅  Deployed! Visit https://${DOMAIN}"
echo "    To view logs: docker compose logs -f"
echo "    To renew certs manually: docker compose exec certbot certbot renew"
