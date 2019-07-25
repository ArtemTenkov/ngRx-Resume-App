using System;
using System.Collections.Generic;
using System.Text;
using Models;

namespace App
{
    public class MessageService
    {
        private const string AllowedUser = "user";
        private ChatUserDto AdminUser = new ChatUserDto
        {
            Id = Guid.NewGuid(),
            UserName = "John S",
            Role = "Administrator",
            ProfileImage = new UserImageProvider().GetFirstUserImage
        };

        private ChatUserDto Friend = new ChatUserDto
        {
            Id = Guid.NewGuid(),
            UserName = "James H",
            Role = "Guess Who",
            ProfileImage = new UserImageProvider().GetSecondUserImage
        };

        private ChatUserDto BestFriend = new ChatUserDto
        {
            Id = Guid.NewGuid(),
            UserName = "Lebron",
            Role = "Best Friend",
            ProfileImage = new UserImageProvider().GetThirdUserImage
        };

        public List<Message> GetAllMessages(string userEmail)
        {
            var messages = new List<Message>
            {
                new Message
                {
                    Id = "1",
                    SendDate = DateTime.Now.AddDays(-7),
                    User = AdminUser,
                    Text = "Welcome to CV App. Have fun!"
                },
                new Message
                {
                    Id = "2",
                    SendDate = DateTime.Now.AddDays(-6),
                    User = BestFriend,
                    Text = "Hey dude. Whats up?"
                },
                new Message
                {
                    Id = "3",
                    SendDate = DateTime.Now.AddDays(-5),
                    User = Friend,
                    Text = "Where is money bro?"
                },
                new Message
                {
                    Id = "4",
                    SendDate = DateTime.Now.AddDays(-5),
                    User = Friend,
                    Text = "That was cool"
                },
                new Message
                {
                    Id = "5",
                    SendDate = DateTime.Now.AddDays(-4),
                    User = AdminUser,
                    Text = "This is not a spam. Just annoying advertisement"
                },
            };

            if (userEmail == AllowedUser)
                return messages;

            return null;
        }
    }
}
