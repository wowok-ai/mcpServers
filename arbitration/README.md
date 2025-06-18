# WoWok Arbitraion MCP Server
Describes operations to create or modify an on-chain Arbitration object, where the 'account' field is used to sign transactions and the 'data' field defines object details. \nThe Arbitration object enables its managers to provide dispute arbitration for orders on-chain. It facilitates named voting based on descriptions and claims of the dispute object (Arb object) to determine the compensation amount for the order owner. If a Service object declares and accepts this Arbitration object, its arbitration results and compensation requirements will be automatically executed.\nWhen an order owner encounters a dispute with an order, they can initiate arbitration by selecting the Arbitration objects accepted by their Service object, resulting in the generation of a new Arb object.\nArbitration administrators control permissions for different operations through a Permission object.

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
        "wowok_arbitration_mcp_server"
      ]
    }
  }
}
```