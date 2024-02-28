# Yprey

**Backend created by [Fernando Mengali](https://www.linkedin.com/in/fernando-mengali-273504142/)**

**Frontend created by [Vagner Mengali](https://www.linkedin.com/in/vagnermengali/)**

**The Vulnerable API** *(Based on OpenAPI 3)*


Yprey is an API framework with vulnerabilities from the OWASP TOP 10 API 2019 and 2023. The framework was developed for teaching and learning details in Pentest (penetration testing) and Application Security. In the context of Offensive Security, vulnerabilities contained in APIs can be identified, exploited and compromised. For application security professionals and specifics, the framework provides an in-depth understanding of code-level vulnerabilities. Currently, Yrprey is one of the frameworks with the highest number of vulnerabilities in the world, making it valuable for educational, learning and teaching purposes in the Information Security area. For more information about the vulnerabilities, we recommend exploring the details available at [yrprey.com](https://yrprey.com).

#### Features
 - Based on OWASP's top 10 vulnerabilities for APIs.
 - OpenAPI3 specs and Postman collection included.

Initially, an unregistered user has access to minimal information about the framework such as the Landing Page and the Blog. When registering, the user can log in, thus obtaining a token that will be used to purchase Ethereum cryptocurrency. Features include buying Ethereum, sending messages, viewing news, viewing shopping list, etc. The framework was built based on vulnerabilities and is not recommended to be used for business and service sales.

#### List of Vulnerabilities

In this section, we have a comparison of the vulnerabilities present in the framework with the routes and a comparison between the OWASP TOP 10 API of 2019 and 2023.
This table makes it easier to understand how to exploit vulnerabilities in each systemic function.
In the last two columns we have a parenthesis and the scenario associated with the OWASP TOP 10 API of the last two years, facilitating the understanding of the theory described on the page https://owasp.org/API-Security/.
After understanding the scenario and the vulnerable route, the process of identifying and exploiting vulnerabilities becomes easier. If you are an Application Security professional, knowing the scenario and routes of endpoints makes the process of identifying and correcting vulnerabilities easier with manual Code Review Security techniques or automated SAST, SCA and DAST analyses

Complete table with endpoint routes, vulnerability details and a comparison between OWASP TOP 10 API 2019 and 2023 vulnerabilities:

| **Qtde**| **Action**|  **Path**    |      **Details**               |          OWASP 2019                                |            OWASP 2023        |
|:-------:|:---------:|:------------:|:------------------------------:|:--------------------------------------------------:|:-----------------------------|
|   01    |  POST     |  /profile    |  Tokenized data access         | API-1 Broken Object Level Authorization (Scene 01) | API-1 Broken Object Level Authorization (Scene 01)   |
|   02    |  POST     |   /login      |    Brute Force Attack         | API-2 Broken User Authentication (Scene 01) | API-2 Broken Authentication (Scene 01) |
|   03    |  POST     |   /home       |  Changing the session token (storage)  | API-2 Broken User Authentication            | API-2 Broken Authentication (Scene 02)            |
|   04    |  POST     |   /login      |   Authentication Error          | API-3 Excessive Data Exposure (Scene 01)    | API-3 Broken Object Property Level (Scene 01)  |Authorization (Scene 01) |
|   05    |  GET      |   /shop       |Shop Page Image Slides         | API-4 Lack of Resources&Rate Limiting(Scene 2) |  API-4 Unrestricted Resource Consumption  |
|   06    |  GET      |   /alter      |         Delete Product        | API-5 Broken Function Level Authorization(Scene 1)|  API-5 Broken Function Level Authorization(Scene 1) | 
|   07    |  GET      |   /v1/status  | View purchase history         | API6:2019 - Mass Assignment |   Change to API-3 Broken Object Property Level (Scene 1)  |Authorization (Scene 2)|
|   08    |  GET       |   /          |    Sending message as SPAM    | Does not exist in OWASP 2019| API6:2023 Unrestricted Access to Sensitive Business Flows |
|   09    |  GET       |/ftp/WS_FTP.LOG |    WS_FTP Logs File         | API-7 Misconfiguration        | Change to API-8 Misconfiguration       |                               |
|   10    |  GET       |   /phpinfo    |    PHP Settings              | API-7 Misconfiguration        | Change to API-8 Misconfiguration       |                               |
|   11    |  GET       |   /           | Connection without HTTPS and Certificate| API-7 Misconfiguration        | Change to API-8 Misconfiguration       |                               |
|   12    |  GET       |   /login      | Authentication without captcha       | API-7 Misconfiguration        | Change to API-8 Misconfiguration       |                               |
|   13    |     GET    |   /           | Checks if back-end is Active| Does not exist in OWASP 2019        | API-7 Server Side Request Forgery (SSRF)                             |
|   14    |  POST      |   /login      |    User authentication     | API-8 Injection (MySQLi)      |   Does not exist in OWASP 2023                        |
|   15    |  POST      |   /register   |    Register user           | API-8 Injection (RCE Command) |   Does not exist in OWASP 2023                        |
|   16    |  GET       |   /vendor/jquery.js            |    Library exploration    | API-8 Injection (XSS e Prototype Pollution ) |   Does not exist in OWASP 2023                        |
|   17    |  GET       |   /vendor/bootstrap.js            |    Library exploration    | API-8 Injection (XSS) |   Does not exist in OWASP 2023                        |
|   18    |  GET       |   /vendor/lodash.js            |    Library exploration    | API-8 Injection (RCE,ReDos e PrototypePollution ) |   Does not exist in OWASP 2023                        |
|   19    |  POST      |   /logout     | Logout and direct to home   | API-8 Injection (Open Redirect) |   Does not exist in OWASP 2023                        |
|   20    |  POST      |   /profile    |    Redefine password             | API-8 Injection (CSRF)          |   Does not exist in OWASP 2023                        | 
|   21    |  GET       |   /shop       |    View my purchases   | API9:2019 Improper Assets Management (Scene 01) | Change to API3:2023 Broken Object Property Level Authorization |
|   22    |  GET       |   /about?id={injection} |    View content About    | API10:2019 Insufficient Logging & Monitoring | Does not exist in OWASP 2023      |

For more details you can use a service like the [swagger editor](https://editor.swagger.io).


## How to create the environment:
You can created one local servers:

Backend
- Linux Ubuntu with PHP and MySQL
- Give chmod 777 /var/www/html/
- Give chmod 777 /var/www/html/log/log.php
- Create database with name yrprey
- Download the yrprey database file (yrprey.sql) and run it in the MySQL database
- In the database yrprey, dive: "SET GLOBAL sql_mode = ''"

## Reporting Vulnerabilities

Please, avoid taking this action and requesting a CVE!

The application intentionally has some vulnerabilities, most of them are known and are treated as lessons learned. Others, in turn, are more "hidden" and can be discovered on your own. If you have a genuine desire to demonstrate your skills in finding these extra elements, we suggest you share your experience on a blog or create a video. There are certainly people interested in learning about these nuances and how you identified them. By sending us the link, we may even consider including it in our references.
