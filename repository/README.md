# WoWok Repository MCP Server
Describes operations to create or modify an on-chain Repository object using the 'account' field to sign transactions and the 'data' field to define object details. \nThe Repository object enables its manager to declare and manage an on-chain database through consensus names and their independent permission settings, with data retrieval and management based on both address and consensus name. \nRepositories are widely used for on-chain data maintenance and utilization, such as: a named Repository providing medical data for different patients (addresses) and injury conditions (consensus names) to validate insurance claim conditions; \na named Repository offering hourly(with time converted to addresses) diving recommendations (consensus names) for Maldives city to support travel service providers in force majeure service disclaimers; and various data oracles. \nRepository administrators control permissions for different operations through a Permission object. and may individually set Policies for specific consensus names (including independent write permissions, declarations of consensus content, and data usage rules).

## What is WoWok？
Create, collaborate, and transact on your own terms with the AI-driven web3 collaboration protocol.

Github: [https://github.com/wowok-ai/wowok](https://github.com/wowok-ai/wowok)   
Wowok Agent for AI: [https://github.com/wowok-ai/wowok_agent](https://github.com/wowok-ai/wowok_agent)   
MCP Server: [https://github.com/wowok-ai/mcp_server](https://github.com/wowok-ai/mcp_server)   
Standalone MCP Servers: [https://github.com/wowok-ai/mcpServers](https://github.com/wowok-ai/mcpServers)   
Website: [https://wowok.net/](https://wowok.net/)   
Docs: [https://github.com/wowok-ai/wowok/wiki](https://github.com/wowok-ai/wowok/wiki)   
X: [https://x.com/Wowok_Ai](https://x.com/Wowok_Ai)


## Setup   
#### NPX   
```json
{
  "mcpServers": {
    "wowok": {
      "command": "npx",
      "args": [
        "-y",
        "wowok_repository_mcp_server"
      ]
    }
  }
}
```