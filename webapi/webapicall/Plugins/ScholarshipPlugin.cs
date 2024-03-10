using System.ComponentModel;
using System.Globalization;
using System.Text.RegularExpressions;
using Microsoft.SemanticKernel;

namespace webapicall.Plugins;

public class ScholarshipPlugin
{
    [KernelFunction, Description("Get all scholarships")]
    public static string? GetAllScholarships()
    {
        var db = Utils.GetDbContext();
        var scholarships = db.Scholarships.ToList();
        if (scholarships == null)
            return null;
        return string.Join("\n", scholarships);
    }

    [KernelFunction, Description("Get scholarship details by name")]
    public static string? GetScholarshipDetails(
    [Description("scholarship name e.g. Dr. Alice Girard Award")]
      string name
)
    {
        var db = Utils.GetDbContext();
        var scholarshipDetails = db.Scholarships
           .Where(s => s.name == name).FirstOrDefault();
        Console.WriteLine(scholarshipDetails);
        if (scholarshipDetails == null)
            return null;
        return scholarshipDetails.ToString();
    }

    [KernelFunction, Description("Get scholarships by field of study")]
    public static string? GetScholarshipsByFieldOfStudy(
        [Description("field of study e.g. Computer Science")]
      string fieldOfStudy
    )
    {
        var db = Utils.GetDbContext();
        var scholarships = db.Scholarships
           .Where(s => s.fieldofstudy.Contains(fieldOfStudy)).ToList();
         if (scholarships == null)
             return null;
         return string.Join("\n", scholarships);

    }

//     [KernelFunction, Description("Get scholarships by field of study")]
//     public static string? GetScholarshipsByFieldOfStudy(
//     [Description("field of study e.g. Computer Science")]
//   string fieldOfStudy
// )
//     {
//         var db = Utils.GetDbContext();
//         var scholarships = db.Scholarships
//            .Where(s => s.fieldofstudy.Contains(fieldOfStudy, StringComparison.OrdinalIgnoreCase))
//            .Select(s => s.name) // Assuming each scholarship has a Name property
//            .ToList();

//         if (!scholarships.Any())
//             return null;

//         // Generating a numbered list of scholarship names
//         var numberedScholarshipList = scholarships
//             .Select((name, index) => $"{index + 1}. {name}")
//             .ToList();

//         return string.Join("\n", numberedScholarshipList);
//     }


    [KernelFunction, Description("Get scholarships by award budget")]
    public static string? GetScholarshipsByAwardBudget(
        [Description("award budget e.g. $5000")]
      string awardBudget
    )
    {
        var db = Utils.GetDbContext();
        var scholarships = db.Scholarships
           .Where(s => s.amount == awardBudget).ToList();
        if (scholarships == null)
            return null;
        return string.Join("\n", scholarships);
    }

    // [KernelFunction, Description("Get scholarships by deadline")]
    // public static string? GetScholarshipsByDeadline(
    //     [Description("deadline e.g. 2022-12-31")]
    //   string deadline
    // )
    // {
    //     var db = Utils.GetDbContext();
    //     var scholarships = db.Scholarships
    //        .Where(s => s.deadline == deadline).ToList();
    //      if (scholarships == null)
    //          return null;
    //      return string.Join("\n", scholarships);
    // }

    [KernelFunction, Description("Get scholarships by deadline")]
    public static string? GetScholarshipsByDeadline(
        [Description("deadline e.g. 2022-12-31")]
    string deadlineInput
    )
    {
        // Check if the input string is in the expected format (basic check, does not validate actual date)
        if (!Regex.IsMatch(deadlineInput, @"^\d{4}-\d{2}-\d{2}$"))
        {
            return "Invalid deadline format. Please use YYYY-MM-DD.";
        }

        var db = Utils.GetDbContext();

        // Directly compare the strings since they're in YYYY-MM-DD format
        var scholarships = db.Scholarships
            .Where(s => string.Compare(s.deadline, deadlineInput) <= 0)
            .ToList();

        if (!scholarships.Any())
            return "No scholarships found with the specified deadline or earlier.";

        // Format the list of scholarships into a string representation
        return string.Join("\n", scholarships.Select(s => s.ToString()));
    }

}