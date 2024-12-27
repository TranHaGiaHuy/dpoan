using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace BusinessObject.Models;

[Table("profiles")]
public class Profile : BaseModel
{
    [PrimaryKey("id")]
    public Guid Id { get; set; }

    [Column("full_name")]
    public string FullName { get; set; } = null!;

    [Column("profile_picture")]
    public string? ProfilePicture { get; set; } = null!;

    [Column("bio")]
    public string? Bio { get; set; } = null!;

    [Column("date_of_birth")]
    public DateTime DateOfBirth { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at")]
    public DateTime UpdatedAt { get; set; }

    [Column("role")]
    public string Role { get; set; } = null!;
    
    [Column("account_id")]     
    public Guid AccountId { get; set; }

}
