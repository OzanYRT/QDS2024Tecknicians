using webapicall.Plugins;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
using Microsoft.SemanticKernel.Connectors.OpenAI;
using webapicall.Data;

namespace webapicall.Controllers;

[Route("api/[controller]")]
[EnableCors("ScholarshipPolicy")]
[ApiController]
public class ScholarshipController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IConfiguration _config;

    public ScholarshipController(ApplicationDbContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    [HttpGet]
    public async Task<string> AnswerQuestion(string question)
    {
        string Reply = "";
        Reply = await CallFunction(question);
        Console.WriteLine(Reply);
        return Reply;
    }

    private async Task<string> CallFunction(string question)
    {
        string azEndpoint = _config["AzureOpenAiSettings:Endpoint"]!;
        string azApiKey = _config["AzureOpenAiSettings:ApiKey"]!;
        string azModel = _config["AzureOpenAiSettings:Model"]!;
        string oaiModelType = _config["OpenAiSettings:ModelType"]!;
        string oaiApiKey = _config["OpenAiSettings:ApiKey"]!;
        string oaiModel = _config["OpenAiSettings:Model"]!;
        string oaiOrganization = _config["OpenAiSettings:Organization"]!;
        var builder = Kernel.CreateBuilder();
        if (_config["AIService"].ToLower() == "openai")
            builder.Services.AddOpenAIChatCompletion(oaiModelType, oaiApiKey);
        else
            builder.Services.AddAzureOpenAIChatCompletion(azModel, azEndpoint, azApiKey);
        builder.Services.AddLogging(c => c.AddDebug().SetMinimumLevel(LogLevel.Trace));
        builder.Plugins.AddFromType<ScholarshipPlugin>();
        var kernel = builder.Build();
        // Create chat history
        ChatHistory history = [];
        // Get chat completion service
        var chatCompletionService = kernel.GetRequiredService<IChatCompletionService>();
        // Get user input
        history.AddUserMessage(question);
        // Enable auto function calling
        OpenAIPromptExecutionSettings openAIPromptExecutionSettings = new()
        {
            ToolCallBehavior = ToolCallBehavior.AutoInvokeKernelFunctions
        };
        // Get the response from the AI
        var result = chatCompletionService.GetStreamingChatMessageContentsAsync(
          history,
          executionSettings: openAIPromptExecutionSettings,
          kernel: kernel);
        string fullMessage = "";
        await foreach (var content in result)
        {
            fullMessage += content.Content;
        }
        // Add the message to the chat history
        history.AddAssistantMessage(fullMessage);
        return fullMessage;
    }

}
