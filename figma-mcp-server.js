import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import * as Figma from 'figma-js';
import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;

const figmaClient = Figma.Client({ personalAccessToken: FIGMA_TOKEN });

const server = new McpServer({ name: 'figma-designs', version: '1.0.0' });

server.tool('figma', { component: z.string().optional() }, async ({ component }) => {
    try {
        const file = await figmaClient.file(FIGMA_FILE_ID);
        return {
            content: [{ type: 'text', text: JSON.stringify(file.data) }]
        };
    } catch (error) {
        console.error('Error fetching Figma data:', error);
        return {
            content: [{ type: 'text', text: `Error: ${error.message}` }]
        };
    }
});

const transport = new StdioServerTransport();
await server.connect(transport);
