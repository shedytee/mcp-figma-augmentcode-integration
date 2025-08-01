# 🚀 Figma MCP Server + Augment Code Integration

![GitHub license](https://img.shields.io/github/license/shedytee/mcp-figma-augmentcode-integration)
![GitHub issues](https://img.shields.io/github/issues/shedytee/mcp-figma-augmentcode-integration)
![GitHub stars](https://img.shields.io/github/stars/shedytee/mcp-figma-augmentcode-integration?style=social)

This project shows how to connect a [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server to the [Figma API](https://www.figma.com/developers/api) and integrate it with [Augment Code](https://www.augmentcode.com/) to supercharge your development workflow.

---

## ✨ Features

✅ Builds an MCP server that:
- Queries Figma files  
- Exposes Figma data to an MCP-compatible interface  
- Integrates directly into Augment Code as a custom tool

✅ Uses:
- [`@modelcontextprotocol/sdk`](https://github.com/modelcontextprotocol/typescript-sdk)  
- [`figma-js`](https://github.com/jongold/figma-js)  
- [`zod`](https://github.com/colinhacks/zod)  
- [`dotenv`](https://github.com/motdotla/dotenv)

---

## 📦 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/shedytee/mcp-figma-augmentcode-integration.git
   cd mcp-figma-augmentcode-integration
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy the example file and fill in your values:

   ```bash
   cp .env.example .env
   ```

   Set:
   - `FIGMA_TOKEN` → your Figma API token  
   - `FIGMA_FILE_ID` → your Figma file ID  
   - `MCP_PORT` → usually `3000`

4. **Run the MCP server**

   ```bash
   npm run start:mcp
   ```

   You should see:
   ```
   MCP Server running on port 3000
   ```

---

## ⚙️ Connect to Augment Code

1. Open **Augment Code → Workspace Settings → MCP**  
2. Add a new MCP server:
   - **Name:** `figma`
   - **Command:**  
     ```
     node C:/path/to/your/project/figma-mcp-server.js
     ```

3. Add environment variables in Augment Code:
   - `FIGMA_TOKEN`
   - `FIGMA_FILE_ID`
   - `MCP_PORT`

4. Restart Augment Code to apply the changes.

---

## 💬 Example Prompts

See [`prompts.md`](./prompts.md) for ready-to-use chat prompts.

Examples:
- Ask figma to get the full file data.
- Use figma to fetch the latest file from the Figma API.
- Ask figma for details about the component named `ButtonPrimary`.
- Use the figma tool to show all components in the design file.

---

## 🗂 Example Code

This repo includes [`figma-mcp-server.js`](./figma-mcp-server.js),  
a working example of the MCP server wired to the Figma API.

To run:
```bash
npm run start:mcp
```

---

## ⚠ Important Notes

### 🛡️ Watch for directory names with spaces

If your project directory contains spaces (like `ZZZZ Platform`),  
you **must wrap the script path in quotes** in the Augment Code command:
```
node "C:/Users/yourname/Documents/Dev/ZZZZ Platform/zzzz-platform/figma-mcp-server.js"
```

✅ Recommended → move to a no-space path:
```
C:/Users/yourname/Documents/Dev/ZZZZPlatform/zzzz-platform/
```

Then use:
```
node C:/Users/yourname/Documents/Dev/ZZZZPlatform/zzzz-platform/figma-mcp-server.js
```

---

### 🔧 Troubleshooting

See [`troubleshooting.md`](./troubleshooting.md) for common issues and fixes.

---

## 🛠 Repository Structure

```
/README.md            → Main guide  
/.env.example         → Example environment config  
/figma-mcp-server.js → MCP server code  
/prompts.md          → Sample prompts for Augment Code  
/troubleshooting.md  → Error guide  
/package.json        → Dependencies and scripts  
/LICENSE             → License
```

---

## 🤝 Contributing

Got ideas, improvements, or questions?  
Please open an [issue](https://github.com/shedytee/mcp-figma-augmentcode-integration/issues) or submit a pull request — contributions are welcome!

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for guidelines.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🌐 Links

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io)  
- [Figma API](https://www.figma.com/developers/api)  
- [Augment Code](https://www.augmentcode.com/)
