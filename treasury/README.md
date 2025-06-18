# WoWok Treasury MCP Server
Describes operations to create or modify an on-chain Treasury object, where the 'account' field is used to sign transactions and the 'data' field defines object details. The Treasury object enables its administrators to manage a specific token's funds on-chain, including operations such as depositing, withdrawing, receiving funds, and setting memos/purposes for fund flows (e.g., allocating compensation payments from the treasury as a verification condition for collaborative workflows, such as after a courier loses a package, leveraging Guard objects to seamlessly integrate business processes).\nTreasury administrators control permissions for different operations through a Permission object. For withdrawal operations, distinct verification conditions (Guard objects) can be set to allow withdrawals of varying amounts, providing flexible and rapid withdrawal channels for external operators (e.g., airdrops or order incentives).

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
        "wowok_treasury_mcp_server"
      ]
    }
  }
}
```