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
 
// Create server instance
const server = new Server({
    name: "wowok_guard_mcp_server",
    version: "1.4.4",
    description: `${A.CallGuardSchemaDescription} - A server for handling Guard calls in the WOWOK protocol. ${A.NoticeFieldsOrder}`,
  },{
    capabilities: {
      prompts: { },
      resources: {},
      tools: { },
      logging: {},
      tokensOptimized: true, // Optimize tokens for better performance and efficiency.
    },
},);

const FetchGuardQueries = 'Fetch guard queries';

async function main() {
    const TOOLS: Tool[] = [
        {
            name: A.ToolName.OP_GUARD,
            description: A.CallGuardSchemaDescription,
            inputSchema: A.CallGuardSchemaInput() as ToolInput,
        },
        {
            name: FetchGuardQueries,
            description: `Retrive guard queries within the modules of the Wowok protocol. 
                Browse, search and match the query id corresponding to the query name or description by using the module names,
                especially when the query parameter "invalid" is present`,
            inputSchema: A.QueriesForGuardSchemaInput() as ToolInput,
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
            case A.ToolName.OP_GUARD: {
                const args = A.CallGuardSchema.parse(request.params.arguments);
                return {content: [{ type: "text", text: A.ObjectOperationResult(await A.call_guard(args))}]};
            }

            case FetchGuardQueries: {
                const args = A.QueriesForGuardSchema.parse(request.params.arguments);
                const guard_queries = args.module === 'all' 
                        ? A.WOWOK.GUARD_QUERIES 
                        : A.WOWOK.GUARD_QUERIES.filter(v => (args.module as string[]).includes(v.module));
                return {content: [{ type: "text", text: JSON.stringify(guard_queries)}]};
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