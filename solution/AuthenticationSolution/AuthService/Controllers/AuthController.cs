using AuthService.DAO;
using BusinessObject.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Supabase;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace TestAuth.Controllers;

[Route("/api/auth")]
[ApiController]
public class AuthController : Controller
{
    private readonly AuthDAO _authDAO;
    private readonly IConfiguration _configuration;


    public AuthController(AuthDAO authDAO, IConfiguration configuration)
    {
        _authDAO = authDAO;
        _configuration = configuration;
    }

    [HttpPost("/login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDTO request)
    {
        try
        {
            var loginResponse = await _authDAO.Login(request.Email,request.Password);

            return Ok(loginResponse);
        }
        catch (Exception ex)
        {
            return BadRequest(new { msg = ex.Message });
        }
    }

    [HttpPost("/register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequestDTO request)
    {
        try
        {
            await _authDAO.Register(request);

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(new { msg = ex.Message });
        }
    }

    [Authorize]
    [HttpPost("/logout")]
    public async Task<IActionResult> Logout()
    {
        try
        {
            await _authDAO.Logout();

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("getProfile")]
    [Authorize]
    public async Task<IActionResult> GetProfile()
    {
        try
        {
            var token = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
            var user = await _authDAO.GetCurrentUser(token);
            return Ok(user);
        }
        catch (Exception ex)
        {
            return BadRequest(new { msg = ex.Message });
        }
        
    }

    [HttpGet("createProfile")]
    [Authorize]
    public async Task<IActionResult> CreateProfile([FromBody] CreateProfileDTO request)
    {
        try
        {
            var token = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
            var reponse = await _authDAO.CreateUser(request, token);
            return Ok(reponse);
        }
        catch (Exception ex)
        {
            return BadRequest(new { msg = ex.Message });
        }

    }


}