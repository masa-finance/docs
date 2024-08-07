# Masa Node LLM Chat Feature

The Masa Node introduces an innovative feature for interacting with large language models (LLMs) through chat. This functionality acts as a proxy, allowing users to communicate with any LLM, whether it's hosted locally or through a larger service like OpenAI. The feature is designed to be flexible, supporting various data structures depending on the specific LLM being used.

## Overview

The LLM Chat feature enhances the Masa Node's capabilities, enabling users to leverage the power of advanced language models for generating responses to queries. This feature is particularly useful for developers and researchers looking to integrate conversational AI into their applications without directly managing the complexities of LLM APIs.

## How It Works

The LLM Chat handler functions by forwarding user requests directly to the specified LLM endpoint. The structure of the request and response must conform to the format expected by the target LLM, making it the caller's responsibility to ensure compatibility.

### Request Structure

The request structure varies based on the LLM being targeted. For example, when interacting with ollama, the request might look like this:

```json
{
    "model": "llama3",
    "messages": [
        {
            "role": "user",
            "content": "why is the sky blue?"
        }
    ],
    "stream": false
}
```

However, for services like OpenAI's GPT models, the request structure would follow their API specifications, focusing on a prompt and other parameters like temperature and max tokens.

### Proxying Requests

To use the LLM Chat feature, you simply send a POST request to a staked Masa Node endpoint, this can be done to your local node if it is staked. If the node does not have an LLM it will be sent out to the all of your known peers where any node that does support LLMs can service the request.  There is a timeout if no response is received within 30 seconds. The first node to process the request and return the response to the node you called "wins". The body of your request should match the structure expected by the LLM you're querying.  It is an important note that one of the peers in your peer store must support the model for the request.

> POST to the endpoint `/v1/api/chat`

### URLs for Data Structure Formats

For detailed information on the data structure formats required by different LLMs, refer to their official documentation:

- **OpenAI (GPT models):** [OpenAI API Documentation](https://platform.openai.com/docs/api-reference/authentication)

- **Anthropic (Claude models):** [Anthropic API Documentation](https://docs.anthropic.com/claude/reference/complete_post)

- **Ollama:** [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md)

### Example Usage

To interact with an LLM through the Masa Node, follow these steps:

1. Determine the request structure required by the LLM you wish to use.
2. Format your request accordingly, including the model name and any necessary parameters.
3. Send a POST request to the `/v1/api/chat` endpoint of the Masa Node with your formatted request body.

The Masa Node will forward your request to the LLM and return the response, allowing you to integrate conversational AI capabilities seamlessly into your applications.

## Running your own LLM

You will need to set an environment variable `LLM_CHAT_URL` to the value that corresponds to your Ollama instance's URL. This setup allows your Masa Node to communicate with the LLM through Ollama, leveraging its capabilities to process and respond to queries.

### Setting Up Ollama

Ollama provides a straightforward and flexible way to host and manage LLMs, including models from OpenAI or custom-trained models. To set up Ollama for your use case, follow these steps:

1. **Install Ollama**: Visit the [Ollama GitHub repository](https://github.com/ollama/ollama/tree/main/docs) and follow the installation instructions provided in the documentation.

2. **Pull Your Desired Models**: Ollama supports a variety of models. You can pull the specific models you wish to serve through your Masa Node. Detailed instructions on importing models can be found in the [Importing Models](https://github.com/ollama/ollama/blob/main/docs/import.md) section of the Ollama documentation.

3. **Configure Ollama**: After installing Ollama and pulling your models, configure Ollama according to your requirements. This may involve setting up endpoints, adjusting performance settings, and ensuring compatibility with the models you intend to use.

4. **Set LLM_CHAT_URL**: With Ollama configured, set the `LLM_CHAT_URL` in your `.env` file to point to your Ollama instance's URL. This ensures that your Masa Node can route LLM chat requests to Ollama.

5. **Test Your Setup**: Finally, test your setup by sending a request to your Masa Node that should be handled by the LLM. Verify that the request is correctly processed by Ollama and that the expected response is returned. This will usually be: `localhost:8080/api/v1/chat`

By following these steps, you can enhance your Masa Node with the ability to serve responses from LLMs, opening up a wide range of possibilities for natural language processing, chat functionalities, and more.

For more detailed information on setting up and using Ollama, refer to the [Ollama Documentation](https://github.com/ollama/ollama/tree/main/docs).

### Conclusion

The LLM Chat feature of the Masa Node offers a versatile and powerful tool for developers and researchers to interact with large language models. By acting as a proxy, it simplifies the process of integrating advanced conversational AI into various applications, providing flexibility and ease of use.

## Running Hosted LLM with Cloudflare AI Workers

To run a hosted LLM using Cloudflare AI Workers, follow these steps:

### Setting Up Cloudflare AI Workers

Cloudflare AI Workers provide a scalable and efficient way to host and manage LLMs. To set up Cloudflare AI Workers for your use case, follow these steps:

1. **Create a Cloudflare Account**: If you don't already have a Cloudflare account, sign up at [Cloudflare](https://www.cloudflare.com/).

2. **Set Up a Worker**: Navigate to the Workers section in the Cloudflare dashboard and create a new Worker. Follow the instructions to set up your Worker environment.

3. **Deploy Your Worker**: Write and deploy your Worker script. This script will handle incoming requests and forward them to the appropriate LLM endpoint. Refer to the [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/) for detailed instructions on deploying Workers.

4. **Configure Environment Variables**: Set the necessary environment variables in your Cloudflare Worker script. These variables include the LLM endpoint URL and any required authentication tokens. For example:

    ```javascript
    export LLM_CF_URL = 'https://gateway.ai.cloudflare.com/v1/a72433aa3bb83aecaca1bc8acecdb166/masa/workers-ai/';
    export LLM_CF_TOKEN = 'YOUR_CLOUDFLARE_TOKEN';
    ```

5. **Set LLM_CF_URL**: In your `.env` file, set the `LLM_CF_URL` to point to your Cloudflare Worker instance's URL. This ensures that your Masa Node can route LLM chat requests to Cloudflare AI Workers.

6. **Test Your Setup**: Finally, test your setup by sending a request to your Masa Node that should be handled by the LLM. Verify that the request is correctly processed by Cloudflare AI Workers and that the expected response is returned. This will usually be: `https://<your-worker-subdomain>.workers.dev/api/v1/chat`

7. **Supported LLM Models**: Call the endpoint on your node `http://localhost:8080/api/v1/llm/models` to see the list of supported LLMs.

By following these steps, you can enhance your Masa Node with the ability to serve responses from LLMs hosted on Cloudflare AI Workers, providing a robust and scalable solution for natural language processing and chat functionalities.

For more detailed information on setting up and using Cloudflare AI Workers, refer to the [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/).

### Conclusions

The LLM Chat feature of the Masa Node, when integrated with Cloudflare AI Workers, offers a powerful and scalable tool for developers and researchers to interact with large language models. By leveraging Cloudflare's infrastructure, it simplifies the process of integrating advanced conversational AI into various applications, providing flexibility and ease of use.
