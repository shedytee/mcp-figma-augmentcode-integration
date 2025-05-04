Figma MCP Server + Augment Code Integration

This project shows how to connect a Model Context Protocol (MCP) server to the Figma API and integrate it with Augment Code to expand your development workflow.

🚀 What It Does

✅ Builds an MCP server that can:
Query Figma files
Expose Figma data through an MCP-compatible interface
Integrate into Augment Code as a custom tool

✅ Uses:
@modelcontextprotocol/sdk
figma-js
zod
dotenv

⚙ Setup Instructions

1. Clone the repo

git clone https://github.com/yourusername/figma-mcp-augmentcode-integration.git
cd figma-mcp-augmentcode-integration

2. Install dependencies

npm install

3. Create a .env file

cp .env.example .env

Fill in:

FIGMA_TOKEN → your Figma API token
FIGMA_FILE_ID → your Figma file ID
MCP_PORT → usually 3000

4. Run the server

npm run start:mcp

🔗 Connect to Augment Code

Go to Augment Code → Workspace Settings → MCP

Add a new MCP server:

   Name: figma
   Command:

          node "C:/path/to/your/project/figma-mcp-server.js"

Add environment variables in Augment Code:

   FIGMA_TOKEN
   FIGMA_FILE_ID
   MCP_PORT

Restart Augment Code.

💬 Sample Prompts

See prompts.md for ready-to-use chat prompts to test your setup.

⚠ Common Gotchas

See troubleshooting.md for common errors and fixes.

⚠ Important: Watch for directory names with spaces

If your project directory contains spaces (like Moments Platform),
you must wrap the full script path in quotes inside the Augment Code Command box:

node "C:/Users/yourname/Documents/Dev/Moments Platform/moments-platform/figma-mcp-server.js"

✅ Even better → move the project to a no-space folder:

C:/Users/yourname/Documents/Dev/MomentsPlatform/moments-platform/

Then use:

node C:/Users/yourname/Documents/Dev/MomentsPlatform/moments-platform/figma-mcp-server.js

❤️ Feedback and Contributions

Got ideas, improvements, or questions?
Please open an issue or pull request — contributions are welcome!

📄 License

MIT


✅ If you want, I can also prep a:
GitHub Actions CI template**
CONTRIBUTING.md**
Social media post draft to announce the repo**

Just say: “Yes, prepare the next pack!” 🚀

          
