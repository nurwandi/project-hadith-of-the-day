# Hadith of the Day

Welcome to the **Hadith of the Day** project! This is a simple website that displays a random Hadith every time you click the generate button on the page. The website is built using various AWS services, making it scalable and efficient.

You can visit the live website at: [dailyhadith.online](dailyhadith.online)

![dailyhadith.online GIF](https://s3.us-east-1.amazonaws.com/dailyhadith.online/gif/1108.gif)

## Overview

This website serves as a **Hadith generator**, where it fetches random Hadiths from an API and displays them on the homepage. The website uses **AWS services** for hosting and backend functionality:

- **Amazon S3** for hosting static content (website files).
- **AWS Lambda** for handling API logic.
- **Amazon DynamoDB** for storing and retrieving Hadith data.
- **Amazon API Gateway** to expose the Lambda function as an API.
- **Amazon Route 53** for DNS management, file caching, and domain routing.
- **AWS Certificate Manager** to manage SSL certificates for secure HTTPS connections.

### Key Features

- Displays a random Hadith on the homepage.
- The Hadiths are fetched dynamically from the backend using an API built on AWS.
- The backend is designed for scalability and reliability using AWS services.
- **SSL/HTTPS** support for secure browsing, managed through **AWS Certificate Manager**.
- Domain management, including file caching and routing through **Amazon Route 53**.

## Architecture

The architecture of the website is as follows:

- **Frontend (S3):** The website files (HTML, CSS, JavaScript) are hosted on Amazon S3.
- **Backend (Lambda + API Gateway):** The API that fetches a random Hadith is powered by AWS Lambda and exposed through API Gateway.
- **Database (DynamoDB):** Hadiths are stored in Amazon DynamoDB, providing a fast and scalable way to retrieve the data.
- **DNS and Caching (Route 53):** **Amazon Route 53** handles DNS for the website, including domain management, file caching, and routing for better performance.
- **SSL/HTTPS (Certificate Manager):** **AWS Certificate Manager** is used to secure the website with an SSL certificate, ensuring secure HTTPS connections.

## How It Works

1. When you visit the website, the frontend (hosted on S3) makes a request to the API Gateway.
2. The API Gateway triggers the AWS Lambda function, which fetches a random Hadith from the DynamoDB.
3. The Lambda function sends the data back to the API Gateway, which forwards it to the frontend.
4. The frontend displays the Hadith on the page for the user.
5. **Route 53** is used to route the domain and manage DNS settings, while also implementing file caching to improve performance.
6. The **SSL certificate** from **AWS Certificate Manager** ensures that the connection between the user and the website is secure, using HTTPS.
