# Performance Monitoring Stack (k6 + Prometheus + Grafana)

This project provides a complete, automated performance monitoring solution. It uses **k6** for load testing, **Prometheus** for metric storage, and **Grafana** for professional visualization, including a specialized **Executive Summary** report.

## 🚀 Getting Started

### Prerequisites
- [Docker](https://www.docker.com/get-started)
- Docker Compose

### Running the Stack
To start the entire monitoring stack (k6, Prometheus, and Grafana), run the following command in the project root:

```powershell
docker compose up -d
```

To stop the stack:
```powershell
docker compose down
```

## 📊 Dashboard Access
Once the stack is running, you can access the professional performance dashboard:
- **URL**: [http://localhost:3000](http://localhost:3000)
- **Login**: (Not required if anonymous access is enabled, otherwise use `admin`/`admin123`)

## 🛠 Project Structure
- `test.js`: The k6 load testing script (includes page tagging for the report).
- `docker-compose.yml`: Defines the k6, Prometheus, and Grafana services.
- `grafana/`: Contains dashboard provisioning and the `k6-dashboard.json`.
- `prometheus.yml`: Configuration for Prometheus metric scraping.

## 📝 The Executive Dashboard
The dashboard is designed for two audiences:
1. **Management**: A high-level **Narrative Report** at the top with "Stable" vs "Needs Review" statuses.
2. **Engineers**: Deep-dive **Technical Charts** at the bottom showing VUs, p95/p99 durations, and Error Rates.

## 🧪 Testing Types
- **Current Setup**: **Load Test** (Simulating a constant flow of 20 users).
- **Metric Collection**: Tracks P95, P99, Throughput (TPS), and Error Rates in real-time.
