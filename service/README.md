# WoWok Service MCP Server
Describes operations to create or modify an on-chain Service object, where the 'account' field is used to sign transactions and the 'data' field defines object details.      
The Service object enables its managers to publish purchasable services on-chain, including setting product/service descriptions, prices, inventory, service workflows (Machine object), withdrawal guard rules (Withdraw Guard objects), refund guard rules (Refund Guard objects), dispute commitments (Arbitration objects), the conditions for the purchaser (Buy Guard object), incentives/rewards (Treasury objects), information service endpoints (Endpoint), and encryption of sensitive information.     
Upon successful payment by the purchaser, a new Order object is generated, granting the purchaser all rights committed by the Service to the Order, including:\
  - Service Workflow : Full transparency of all service and delivery processes prior to purchase.  
  - Breach Arbitration : In case of order disputes, the Order owner can apply for arbitration and compensation claims through these Arbitration objects, with arbitration results and compensation requirements executed automatically.   
  - Refund Commitment : Pre-purchase review of refund/withdrawal processes and terms to ensure alignment with purchaser needs.    
  - Incentive Rewards : Pre-purchase review of incentives/rewards obtainable when Guard conditions are met.     
  - Privacy Protection : On-chain encryption of purchaser's sensitive data or submission via the service provider's Endpoint.
Service administrators control permissions for different operations through a Permission object.     
Once published, the Service object's service workflows, Guard objects, and other configurations become immutable. To adjust services, a new Service object must be created and configured via the Clone method. A Service can be paused to stop generating new orders, though commitments to existing orders remain unaffected.

## What is WoWok？
Create, collaborate, and transact on your own terms with the AI-driven web3 collaboration protocol.

Github: [https://github.com/wowok-ai/wowok](https://github.com/wowok-ai/wowok)   
Wowok Agent for AI: [https://github.com/wowok-ai/wowok_agent](https://github.com/wowok-ai/wowok_agent)   
MCP Server: [https://github.com/wowok-ai/mcp_server](https://github.com/wowok-ai/mcp_server)   
Standalone MCP Servers: [https://github.com/wowok-ai/mcpServers](https://github.com/wowok-ai/mcpServers)   
Website: [https://wowok.net/](https://wowok.net/)   
Docs: [https://github.com/wowok-ai/docs](https://github.com/wowok-ai/docs)   
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
        "wowok_service_mcp_server"
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
