# Bamboware

**Bamboware** is a US PTO-registered brand committed to sustainability by selling disposable bamboo utensils in the US market. Our mission is to replace plastic utensils with eco-friendly options, ensuring a better future for generations to come. 

🌍 Visit [www.bamboware.com](https://www.bamboware.com) or search **Bamboware** on [Amazon](https://www.amazon.com) to explore our products and support our mission!

---

## This Application

This application is **Bamboware's internal analytics tool**, designed to empower the brand owner with insights and real-time data. It provides the following key functionalities:
- **Sales Analytics**: Analyze sales patterns to identify trends and optimize strategies.
- **Customer Management**: Access customer data to track returning and loyal customers.
- **Real-Time Notifications**: Receive real-time notifications for each sale via email or SMS.

---

## Goals

1. **Amazon Marketplace Integration**
   - Use **Amazon SP-API** to:
     - Receive real-time sales notifications via email or SMS.
     - Gather customer data to identify returning and loyal customers.
     - Generate and send weekly or monthly automated sales reports.

2. **Walmart Marketplace Integration**
   - Leverage Walmart Marketplace API to achieve the same functionalities:
     - Real-time sales notifications.
     - Customer analytics.
     - Automated sales reports.

---

### Code Structure (Mono-repository)
```plantext
project-root/
├── frontend/                # React or Next.js Frontend Code
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── backend/                 # Node.js Backend Node
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── functions/               # GCP Cloud Functions Code
│   ├── function1/
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── function2/
├── infra/                   # Terraform Code
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── .github/                 # GitHub Actions Workflow
│   └── workflows/
│       ├── ci-cd-backend.yml
│       ├── ci-cd-frontend.yml
│       └── terraform-deploy.yml
├── shared/                  # Shared library and utils
│   ├── utils/
│   ├── types/
│   └── package.json
├── .gitignore
└── README.md
```

---

This app is intended to work only with Bamboware's configuration that is not open to public.
