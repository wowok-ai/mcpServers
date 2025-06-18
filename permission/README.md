# WoWok Permission MCP Server
Operations to create or modify an on-chain Permission object, where the 'account' field is used to sign transactions and the 'data' field defines object details.     
The Permission object enables its administrators to set distinct operational permissions (including built-in permissions and custom permissions) and additional verification conditions (Guard object) for different addresses on-chain. For example, assigning Permission No. 123 (a built-in permission for cloning Service objects) to address 0x1234 allows that address to initiate clone operations across all Service objects that accept this Permission object.   
In the Wowok protocol, objects of types such as Demand, Repository, Treasury, Service, Machine, and Arbitration include a 'permission' field that specifies the accepted Permission object. This enables addresses and permissions defined by the linked Permission object to perform operations on these target objects.

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
        "wowok_permission_mcp_server"
      ]
    }
  }
}
```