# demo-lambda-whatsapp-twilio

This project demonstrates a serverless WhatsApp bot using AWS Lambda and Twilio.

## Prerequisites
- Node.js 18.x or later
- AWS CLI configured with your credentials
- AWS SAM CLI installed
- Twilio account with WhatsApp sandbox configured

## Installation

1. Clone this repository
    ```shell
    git clone https://github.com/your-username/demo-lambda-whatsapp-twilio.git
    cd demo-lambda-whatsapp-twilio
    ```

2. Install dependencies
    ```shell
    npm install
    ```

3. Build the project
    ```shell
    npm run build
    ```

4. Deploy to AWS
    ```shell
    npm run sam:deploy --profile your-aws-profile-name
    ```

## Local Development

1. Run ESLint
    ```shell
    npm run lint
    ```

2. Test locally with SAM
    ```shell
    sam local start-api
    ```
    
## Project Structure

    .
    ├── src/
    │   └── handler.ts        # Lambda function handler
    ├── dist/                 # Compiled JavaScript files
    ├── template.yaml         # SAM template
    └── package.json         # Project dependencies and scripts


## Available Scripts
- `npm run build` - Compiles TypeScript to Javascript
- `npm run lint` - Runs ESLint on source files
- `npm run sam:build` - Builds the SAM application
- `npm run sam:deploy` - Deploys to AWS (with guided setup)

## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'feat: add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## License
This project is licensed under the ISC License.


