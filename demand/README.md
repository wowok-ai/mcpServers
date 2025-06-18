# WoWok Demand MCP Server
Describes operations to create or modify an on-chain Demand object using the 'account' field to sign transactions and the 'data' field to define object details. \nThe Demand object enables its manager to publish service-seeking demands, declare, and grant rewards to satisfactory service referrers. \nIt supports transaction models like C2B or C2C, where managers can dynamically update/refine demands, and referrers can adjust Services and their supply chain commitments to better fulfill personalized requirements. \nDemand administrators control permissions for different operations through a Permission object. and may set up a Guard object to enforce threshold verification requirements for service referrers.

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
        "wowok_demand_mcp_server"
      ]
    }
  }
}
```