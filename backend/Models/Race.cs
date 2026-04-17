using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models {
    public class Race {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string Description { get; set; } = string.Empty;
        public required string RaceType { get; set; }
        public required string RaceVisibility { get; set; }
        public string CoverImage { get; set; } = string.Empty;
        public required int Participants { get; set; }
        public required int Teams { get; set; }
        public required DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public required string ScoringType { get; set; }
    }
}