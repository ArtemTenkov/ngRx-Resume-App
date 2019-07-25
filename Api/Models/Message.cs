using System;

namespace Models
{
    public class Message
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public DateTime SendDate { get; set; }
        public ChatUserDto User { get; set; }
    }
}
