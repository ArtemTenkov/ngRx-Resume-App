using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using Models;

namespace App
{
 
    public class UserService
    {
        private List<UserResponse> _users = new List<UserResponse>
        {
            new UserResponse { Id = 1, FirstName = "Root", LastName = "Admin", Username = "user", Password = "password" }
        };

        public const string Secret = "Classified secret sting for api to generate a token";
    
        public UserResponse Authenticate(string email, string password)
        {
            var userLoginReponse = _users.SingleOrDefault(x => x.Username == email && x.Password == password);

            // return null if user not found
            if (userLoginReponse == null)
                return null;

            
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, userLoginReponse.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            try
            {
                var token = tokenHandler.CreateToken(tokenDescriptor);
                userLoginReponse.Token = tokenHandler.WriteToken(token);
            }
            catch (Exception exc)
            {
                throw;
            }
            
            
            userLoginReponse.Password = null;
            return userLoginReponse;
        }
    }
}
