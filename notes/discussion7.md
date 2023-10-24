# Web APIs

Visit Postman's Web API listings:
[https://www.postman.com/categoriesLinks to an external site.](https://www.postman.com/categories), [https://www.postman.com/explore/trending-apis,Links to an external site.](https://www.postman.com/explore/trending-apis,) or [https://www.postman.com/explore/spotlight.Links to an external site.](https://www.postman.com/explore/spotlight,) Find four interesting web APIs and answer the following questions for each:

- Name of the provider of the web API and a description of the general purpose of the API
- API Type (a list is located in your [What is an APILinks to an external site.](https://aws.amazon.com/what-is/api/) reading) and whether tokens or keys are needed 
- List AND describe three HTTP endpoints, what each endpoint returns (include the format), and each applicable HTTP method

Example:
Slack Web API - integration and automation of Slack product services
Public API - tokens are required
POST [https://slack.com/api/chat.deleteLinks to an external site.](https://slack.com/api/chat.delete) - deletes a message from a conversation (JSON response format)
POST [https://slack.com/api/chat.postMessageLinks to an external site.](https://slack.com/api/chat.postMessage) - posts a message to a public/private/DM channel (JSON response format)
GET [https://slack.com/api/files.listLinks to an external site.](https://slack.com/api/files.list) - returns a list of files within the team (JSON response format)

**Visit TWO classmates' posts and post TWO replies with CONSTRUCTIVE insights, comments, or thoughts.**
**COMPLETE BY 10/11/23 @ 11:59 am EDT**



## below are the notes

API: application programming interface. 

### SOAP APIs 

These APIs use Simple Object Access Protocol. Client and server exchange messages using XML. This is a less flexible API that was more popular in the past.

### RPC APIs

These APIs are called Remote Procedure Calls. The client completes a function (or procedure) on the server, and the server sends the output back to the client.

### Websocket APIs

[Websocket API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview?pg=wianapi&cta=websocketapi) is another modern web API development that uses JSON objects to pass data. A WebSocket API supports two-way communication between client apps and the server. The server can send callback messages to connected clients, making it more efficient than REST API.

### REST APIs

These are the most popular and flexible APIs found on the web today. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client.



### Private APIs

These are internal to an enterprise and only used for connecting systems and data within the business.

### Public APIs 

These are open to the public and may be used by anyone. There may or not be some authorization and cost associated with these types of APIs.

### Partner APIs 

These are only accessible by authorized external developers to aid business-to-business partnerships.

### Composite APIs 

These combine two or more different APIs to address complex system requirements or behaviors. 





=========below is the hw i will submit=================

- Discord REST API
  - this is an http-based api to interact with discord
  - public api - api key is needed
  - PUT https://discord.com/api/v10/channels/:channel_id/messages/:message_id/reactions/:emoji_name/@me - add my message reaction
  - GET https://discord.com/api/v10/applications/@me - get my application (response with JSON)
  - PATCH https://discord.com/api/v10/applications/@me -update the application (Response with JSON)
- Merchant API
  - an api for processing the order of a credit or debit card. 
  - public api - api id is needed with Revolut Checkout Widget.
  - POST https://merchant.revolut.com/api/orders - create an order (Response with JSON and axios)
  - GET https://merchant.revolut.com/api/orders/{order_id}/payments - retrieve payment list of an order (Response with JSON)
  - POST https://merchant.revolut.com/api/1.0/orders/{order_id}/refund  - refund an order for a completed order, can be either full or partial refund. (response with JSON)
- Creatio API
  - test integrations with Creatio platform  for streaming data and batch requests, set up filtering.
  - public api - api key is needed
  - GET http://mycreatio.com/0/odata/$metadata#Account/$entity - gets an instance of a collection of objects by id of an instance in another collection of objects (response with JSON)
  - POST http://mycreatio.com/0/odata/$metadata#Contact/$entity - adds an object collection instance (response with JSON)
  - GET http://mycreatio.com/0/odata/$metadata#Employee(Name,FullJobTitle) - gets object collection instances with slelected field (response with JSON)
- Mist Cloud APIs 2309.1.1
  - set of tools for building software applications that communicate with mist cloud. 
  - public api - api ket token is needed
  - GET api.mist.com/api/v1/orgs/:org_id/site - returns the value of a resource or a list of resources, depending on whether an identifier is specified (Response with JSON)
  - GET api.mist.com/api/v1/sites/:site_id - returns a particular site (:site_id) (Response with JSON)
  - POST https://api.mist.com/api/v1/sites/:site_id/location/ml/reset/map/:map_id - reset the site's MI Stat's by map (response with JSON)
