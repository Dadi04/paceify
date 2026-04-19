namespace backend.Endpoints {
    public static class UserEndpoints {
        public static void MapUserEndpoints(this WebApplication app) {
            app.MapPost("/api/login/", async (HttpContext context, IHttpClientFactory httpClientFactory) => {
                var req = await context.Request.ReadFromJsonAsync<LoginRequest>();
                if (req?.Code == null) {
                    return Results.BadRequest("Missing code");
                }
                var httpClient = httpClientFactory.CreateClient();

                var stravaResponse = await httpClient.PostAsJsonAsync(
                    "https://www.strava.com/oauth/token",
                    new {
                        client_id = Environment.GetEnvironmentVariable("STRAVA_CLIENT_ID"),
                        client_secret = Environment.GetEnvironmentVariable("STRAVA_CLIENT_SECRET"),
                        code = req.Code,
                        grant_type = "authorization_code"
                    }
                );

                if (!stravaResponse.IsSuccessStatusCode) {
                    return Results.BadRequest("Strava auth failed");
                }

                var content = await stravaResponse.Content.ReadAsStringAsync();

                return Results.Content(content, "application/json");
            });
        }

        public record LoginRequest(string Code);
    }
}