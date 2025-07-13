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
    version: "1.2.34",
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

const QueryBuiltinName = 'Built-in permissions';

async function main() {
    const TOOLS: Tool[] = [
        {
            name: A.ToolName.OP_PERMISSION,
            description: A.CallPermissionSchemaDescription,
            inputSchema: A.CallPermissionSchemaInput()  as ToolInput,
        },
        {
            name: A.ToolName.OP_REPLACE_PERMISSION_OBJECT,
            description: A.CallObejctPermissionSchemaDescription,
            inputSchema: A.CallObejctPermissionSchemaInput()  as ToolInput,
        },
        {
            name: QueryBuiltinName,   
            description: `Retrive Built-in permissions within the modules of the Wowok protocol. 
            Browse, search and match the Permission-Index corresponding to the permission name or description by using the module names`,
            inputSchema: A.BuiltInPermissionSchemaInput()  as ToolInput,
        }
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
                return {content: [{ type: "text", text: A.ObjectOperationResult(await A.call_permission(args))}]};
            }
            
            case A.ToolName.OP_REPLACE_PERMISSION_OBJECT: {
                const args = A.CallObejctPermissionSchema.parse(request.params.arguments);
                return {content: [{ type: "text", text: A.ObjectOperationResult(await A.call_transfer_permission(args))}]};
            }
            
            case QueryBuiltinName: {
                const args = A.BuiltInPermissionSchema.parse(request.params.arguments);
                const built_in_permissions = args.module === 'all' 
                        ? A.WOWOK.PermissionInfo 
                        : A.WOWOK.PermissionInfo.filter(v => (args.module as string[]).includes(v.module));
                return {content: [{ type: "text", text: JSON.stringify(built_in_permissions)}]};
            }
            default:
              throw new Error(`Unknown tool: ${request.params.name}`);
          }
        } catch (error) { 
            throw new Error(`Invalid input: ${JSON.stringify(error)}`);
        }
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