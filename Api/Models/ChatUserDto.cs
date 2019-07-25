using System;

namespace Models
{
    public class ChatUserDto
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string ProfileImage { get; set; }
        public string Role { get; set; }
    }
}
