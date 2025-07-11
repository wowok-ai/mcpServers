#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport,} from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, Tool, ToolSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import * as A from 'wowok_agent';

const ToolInputSchema = ToolSchema.shape.inputSchema;
type ToolInput = z.infer<typeof ToolInputSchema>;

const ToolOutputSchema = ToolSchema.shape.outputSchema;
type ToolOutput = z.infer<typeof ToolOutputSchema>;

A.WOWOK.Protocol.Instance().use_network(A.WOWOK.ENTRYPOINT.testnet);
// Create server instance
const server = new Server({
    name: "wowok_permission_mcp_server",
    version: "1.2.30",
    description: `${A.CallPermissionSchemaDescription} - A server for handling Permission calls in the WOWOK protocol.`,
  },{
    capabilities: {
      prompts: { },
      resources: {},
      tools: { },
      logging: {},
      tokensOptimized: true, // Optimize tokens for better performance and efficiency.
    },
},);

async function main() {
    const TOOLS: Tool[] = [
        {
            name: A.ToolName.OP_PERMISSION,
            description: A.CallPermissionSchemaDescription,
            inputSchema: A.CallPermissionSchemaInput()  as ToolInput,
            outputSchema: A.ObjectChangedSchemaOutput() as ToolOutput,
        },
        {
            name: A.ToolName.OP_REPLACE_PERMISSION_OBJECT,
            description: A.CallObejctPermissionSchemaDescription,
            inputSchema: A.CallObejctPermissionSchemaInput()  as ToolInput,
            outputSchema: A.ObjectChangedSchemaOutput() as ToolOutput,
        },
    ]

    const transport = new StdioServerTransport();
    server.setRequestHandler(ListToolsRequestSchema, async () => {
        return {tools:TOOLS};
    });

    server.setRequestHandler(CallToolRequestSchema, async (request) => {
        try {
          if (!request.params.arguments) {
            throw new Error("Arguments are required");
          }
      
          switch (request.params.name) {
            case A.ToolName.OP_PERMISSION: {
                const args = A.CallPermissionSchema.parse(request.params.arguments);
                return A.ObjectOperationResult(await A.call_permission(args));
            }
            
            case A.ToolName.OP_REPLACE_PERMISSION_OBJECT: {
                const args = A.CallObejctPermissionSchema.parse(request.params.arguments);
                return A.ObjectOperationResult(await A.call_transfer_permission(args));
            }
            
            default:
              throw new Error(`Unknown tool: ${request.params.name}`);
          }
        } catch (error) { 
            throw new Error(`Invalid input: ${JSON.stringify(error)}`);
        }
        return {content:[]}
    });

    
    await server.connect(transport);

    // Cleanup on exit
    process.on("SIGINT", async () => {
        await cleanup();
        await server.close();
        process.exit(0);
    });
}

async function cleanup() {
}

main().catch((error) => {
    process.exit(1);
});

process.stdin.on("close", async () => {
    await cleanup();
    await server.close();
    process.exit(0);
});