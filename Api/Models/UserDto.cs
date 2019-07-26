using System;
using System.Collections.Generic;

namespace Models
{
    public class UserDto
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string ProfileImage { get; set; }
        public string Role { get; set; }
        public List<Message> Messages { get; set; }
    }
}
