using Supabase.Gotrue;

namespace BusinessObject.DTO;

public class LoginResponseDTO
{
    public string AccessToken { get; set; } = null!;
}
