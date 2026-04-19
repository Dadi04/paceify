namespace backend.Endpoints {
    public static class UserEndpoints {
        public static void MapUserEndpoints(this WebApplication app) {
            app.MapPost("/api/login/", async (HttpContext context) => {
                var req = await context.Request.ReadFromJsonAsync<LoginRequest>();
                if (req?.Code == null) {
                    return Results.BadRequest("Missing code");
                }
                var httpClient = new HttpClient();

                var stravaResponse = await httpClient.PostAsJsonAsync(
                    "https://www.strava.com/oauth/token",
                    new {
                        client_id = Environment.GetEnvironmentVariable("STRAVA_CLIENT_ID"),
                        client_secret = Environment.GetEnvironmentVariable("STRAVA_CLIENT_SECRET"),
                        code = req.Code,
                        grant_type = "authorization_code"
                    }
                );

                var content = await stravaResponse.Content.ReadAsStringAsync();
                Console.WriteLine(content);
                return Results.Content(content, "application/json");
            });
        }

        public record LoginRequest(string Code);
    }
}