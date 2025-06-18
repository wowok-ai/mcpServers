# WoWok Guard MCP Server
Operations to create or modify an on-chain Arbitration object, where the 'account' field is used to sign transactions and the 'data' field defines object details. Guard object is immutable once created.    
A Guard object is designed to define a set of verification conditions that yield a final boolean result (True or False). These conditions include querying on-chain object data (e.g., verifying if an order owner is 0x1234, or if 100 SUI tokens were paid from a specific Treasury object to 0x1234 and an order(owned by 0x1234) of a Service object  has reached the 'express loss verification' process node), validating Witness data provided by the signer (e.g., the provided order address must belong to a certain Service object, and the order owner must be the actual transaction signer), and performing mathematical/logical operations on numerical values.    
Due to its immutability, the Guard object is widely used as a pre-validation requirement for critical operations (e.g., placing an order for a Service object or withdrawing funds from a Treasury object). Additionally, Guard objects can be integrated with Permission object's operation validation: an operation is only executed if both the permission requirements and the Guard verification are satisfied.     

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
        "wowok_guard_mcp_server"
      ]
    }
  }
}
```