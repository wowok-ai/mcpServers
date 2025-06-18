import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport,} from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListResourcesRequestSchema, ListResourceTemplatesRequestSchema, ListToolsRequestSchema, 
    ReadResourceRequestSchema, ResourceTemplate, Tool, ToolSchema, Resource } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import * as A from 'wowok_agent';

const ToolInputSchema = ToolSchema.shape.inputSchema;
type ToolInput = z.infer<typeof ToolInputSchema>;

A.WOWOK.Protocol.Instance().use_network(A.WOWOK.ENTRYPOINT.testnet);
// Create server instance
const server = new Server({
    name: "wowok_personal_mcp_server",
    version: "1.1.14",
    description: `${A.CallPersonalSchemaDescription} - A server for handling Personal calls in the WOWOK protocol.`,
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
            name: A.ToolName.OP_PERSONAL,
            description: A.CallPersonalSchemaDescription,
            inputSchema: A.CallPersonalSchemaInput() as ToolInput,
        },
        {
            name: A.ToolName.OP_LOCAL_INFO,
            description: A.LocalInfoOperationSchemaDescription,
            inputSchema: A.LocalInfoOperationSchemaInput()  as ToolInput,

        },
        {
            name: A.ToolName.OP_LOCAL_MARK,
            description: A.LocalMarkOperationSchemaDescription,
            inputSchema: A.LocalInfoOperationSchemaInput()  as ToolInput,
        },
        {
            name: A.ToolName.OP_ACCOUNT,
            description: A.AccountOperationSchemaDescription,
            inputSchema: A.LocalInfoOperationSchemaInput()  as ToolInput,
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
            case A.ToolName.OP_PERSONAL: {
                const args = A.CallPersonalSchema.parse(request.params.arguments);
                return {
                    content: [{ type: "text", text: JSON.stringify(await A.call_personal(args)) }],
                };
            }

            case A.ToolName.OP_ACCOUNT: {
                const args = A.AccountOperationSchema.parse(request.params.arguments);
                return {
                    content: [{ type: "text", text: JSON.stringify(await A.account_operation(args)) }],
                };
            }

            case A.ToolName.OP_LOCAL_MARK: {
                const args = A.LocalMarkOperationSchema.parse(request.params.arguments);
                await A.local_mark_operation(args);
                return {
                    content: [{ type: "text", text: 'success'}],
                };
            }

            case A.ToolName.OP_LOCAL_INFO: {
                const args = A.LocalInfoOperationSchema.parse(request.params.arguments);
                await A.local_info_operation(args);       
                return {
                    content: [{ type: "text", text: 'success'}],
                };  
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