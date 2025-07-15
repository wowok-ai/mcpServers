# WoWok Machine MCP Server
Operations to create or modify an on-chain Machine object, where the 'account' field is used to sign transactions and the 'data' field defines object details.    
The Machine object enables its manager to orchestrate collaborative workflows, manage permissions, and validate deliverables on-chain. It achieves reusable workflow execution through the generation of distinct instances (Progress objects), such as service processes for e-commerce orders. Core functionalities include:
  - Workflow Orchestration : Defines multi-stage collaborative workflows (e.g., Requirement Confirmation → Development → Testing → Acceptance) with parallel or sequential execution, specifying step order and trigger conditions to support complex collaboration scenarios.
  - Permission Management : Assigns granular operational permissions to collaborators (e.g., only service providers can execute development steps; only purchasers can approve acceptance steps), and sets namespace-specific permissions for different workflow instances (Progress objects) (e.g., distinct delivery personnel for different Progress objects).
  - Delivery Validation : Implements automatic validation rules via Guard objects (e.g., verifying updates to the latest data in a named Repository or confirming purchase order fulfillment as committed).      
Machine administrators control permissions for different operations through a Permission object and can configure namespaces to provide unified permission operation spaces for different instances (Progress objects). 
Once published, the workflow orchestration and delivery validation rules of a Machine object become immutable. To enhance a Machine, a new Machine object can be generated and modified via the Clone method.

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
        "wowok_machine_mcp_server"
      ]
    }
  }
}
```

## How to use     
#### Ask Your AI Client    
```
Functions provided by the MCP server, how to use, and scenario introduction.
```

#### Create Your Account    
Create a new account through the 'wowok_personal_mcp_server', and transfer some SUI tokens to the new account via the faucet or another wallet.         
wowok_personal_mcp_server：[https://www.npmjs.com/package/wowok_personal_mcp_server](https://www.npmjs.com/package/wowok_personal_mcp_server)     
 
#### Examples    

