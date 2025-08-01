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
- Integrates into Augment Code as a custom tool

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

   Install the required NPM packages:
   ```bash
   npm install @modelcontextprotocol/sdk figma-js zod dotenv
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Fill in:
   - `FIGMA_TOKEN` → your Figma API token  
   - `FIGMA_FILE_ID` → your Figma file ID  
   - `MCP_PORT` → usually `3000`

4. **Update `package.json`**

   In your `package.json`, add `"type": "module"` at the top level and a `start:mcp` script under `"scripts"`:

   ```diff
   {
     "name": "mcp-figma-augmentcode-integration",
     "version": "1.0.0",
   + "type": "module",
     "scripts": {
       "start:mcp": "node figma-mcp-server.js"
     },
     "dependencies": {
       "@modelcontextprotocol/sdk": "^1.17.1",
       "figma-js": "^1.16.1-0",
       "zod": "^3.25.76",
       "dotenv": "^17.2.1"
     }
   }
   ```

5. **Add startup log to `figma-mcp-server.js`**

   Ensure your script ends with a console message so you see startup success. For example, after connecting:

   ```diff
   const transport = new StdioServerTransport();
   await server.connect(transport);
   + console.log(`MCP Server running on port ${MCP_PORT}`);
   ```

6. **Run the MCP server**

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
     node figma-mcp-server.js
     ```
     (runs from your workspace root)

3. Under **Environment Variables**, add:
   - `FIGMA_TOKEN`
   - `FIGMA_FILE_ID`
   - `MCP_PORT`

4. **Save** and **toggle ON** the “figma” server.  
   Look for this in the logs:
   ```
   [dotenv@…] injecting env …
   MCP Server running on port 3000
   ```
   Once you see it, the icon will turn green.

---

## 💬 Example Prompts

See [`prompts.md`](./prompts.md) for ready-to-use chat prompts. Examples:

- Ask figma to get the full file data.  
- Use figma to fetch the latest file from the Figma API.  
- Ask figma for details about the component named `ButtonPrimary`.  
- Use the figma tool to show all components in the design file.

---

## 🗂 Example Code

This repo includes [`figma-mcp-server.js`](./figma-mcp-server.js), a working example of the MCP server wired to the Figma API.

To run locally:
```bash
npm run start:mcp
```

---

## ⚠ Important Notes

### 🛡️ Directories with spaces

If your **workspace path** includes spaces (e.g. `My Projects`), wrap the command argument in quotes:

```text
node "figma-mcp-server.js"
```

—or—  
Move your project to a path without spaces to avoid quoting:

```
C:/Users/yourname/Dev/NoSpacesRepo/
```

---

### 🔧 Troubleshooting

See [`troubleshooting.md`](./troubleshooting.md) for common issues and fixes.

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
