# Deploy Portfolio to VPS (hasibsafi.com) — Step by Step

Uses **systemd** (no PM2). Run all commands on your VPS unless noted.

---

## Step 0: Cleanup (if you have an existing deployment)

```bash
chmod +x /var/www/portfolio/deploy/cleanup.sh
/var/www/portfolio/deploy/cleanup.sh
```

Or run manually (use this if migrating from old structure, since cleanup.sh may be gone):

```bash
pm2 delete portfolio 2>/dev/null || true
sudo rm -f /etc/nginx/sites-enabled/000-hasibsafi.com /etc/nginx/sites-enabled/hasibsafi.com
sudo rm -f /etc/nginx/sites-available/hasibsafi.com
sudo rm -rf /var/www/Portfolio/Personal-Potfolio
sudo rm -rf /var/www/portfolio
sudo nginx -t && sudo systemctl reload nginx
```

---

## Step 1: Create directory and set ownership

```bash
sudo mkdir -p /var/www/portfolio
sudo chown -R hasib:hasib /var/www/portfolio
```

---

## Step 2: Clone the project

```bash
cd /var/www
rm -rf portfolio
git clone https://github.com/hasibsafi/Personal-Portfolio.git portfolio
cd portfolio
```

---

## Step 3: Install dependencies and build

```bash
cd /var/www/portfolio
npm install
npm run build
```

---

## Step 4: Install systemd service

```bash
sudo cp /var/www/portfolio/deploy/portfolio.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable portfolio
sudo systemctl start portfolio
sudo systemctl status portfolio
```

---

## Step 5: Configure Nginx

```bash
sudo cp /var/www/portfolio/deploy/nginx.hasibsafi.com.conf /etc/nginx/sites-available/hasibsafi.com
sudo ln -sf /etc/nginx/sites-available/hasibsafi.com /etc/nginx/sites-enabled/000-hasibsafi.com
sudo nginx -t && sudo systemctl reload nginx
```

---

## Step 6: SSL (if not already done)

```bash
sudo certbot certonly --manual --preferred-challenges dns -d hasibsafi.com -d www.hasibsafi.com
# Add TXT record when prompted, wait, then press Enter
```

---

## Step 7: Verify

```bash
sudo ss -tlnp | grep 3005
curl -sI http://127.0.0.1:3005 | head -3
curl -sL https://hasibsafi.com | grep -o "<title>.*</title>"
```

---

## Deploying updates

```bash
cd /var/www/portfolio
./deploy/deploy.sh
```

---

## Useful commands

| Command | Description |
|---------|-------------|
| `sudo systemctl status portfolio` | Check service status |
| `sudo systemctl restart portfolio` | Restart app |
| `sudo journalctl -u portfolio -f` | View logs |
| `sudo systemctl stop portfolio` | Stop app |
