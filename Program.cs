var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "_site" // Set the folder where the static files are located (e.g., Eleventy output folder)
});

builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
});

var app = builder.Build();

app.UseResponseCompression();

// Just a test, if we would like to use ASP.NET Core with static files
app.MapGet("/stride", () => "Hello Stride!");

// Configure the application to redirect 404 (Not Found) errors to a custom 404.html page
app.UseStatusCodePagesWithReExecute("/404.html");

app.UseHttpsRedirection();

// Set up the application to serve the index.html file when the root path is requested
app.UseDefaultFiles();

var cacheMaxAgeOneYear = (60 * 60 * 24 * 365).ToString();

// Enable serving static files from the specified WebRootPath
app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = ctx =>
    {
        ctx.Context.Response.Headers.Append(
             "Cache-Control", $"public, max-age={cacheMaxAgeOneYear}");
    }
});

app.Run();