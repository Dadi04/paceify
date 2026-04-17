using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Endpoints {
    public static class RaceEndpoints {
        public static void MapRaceEndpoints(this WebApplication app) {
            app.MapPost("/api/create-race/", ([FromBody] Race race) => {
                if (race == null) return Results.BadRequest();

                Console.WriteLine($"Name: {race.Name}");
                Console.WriteLine($"Description: {race.Description}");
                Console.WriteLine($"Race Type: {race.RaceType}");
                Console.WriteLine($"Visibility: {race.RaceVisibility}");
                Console.WriteLine($"Cover Image: {race.CoverImage}");
                Console.WriteLine($"Participants: {race.Participants}");
                Console.WriteLine($"Teams: {race.Teams}");
                Console.WriteLine($"Start Date: {race.StartDate}");
                Console.WriteLine($"End Date: {race.EndDate}");
                Console.WriteLine($"Scoring Type: {race.ScoringType}");

                race.Id = new Random().Next(1, 10000); // change with db logic TODO

                return Results.Ok(new { race });
            });
        }
    }
}