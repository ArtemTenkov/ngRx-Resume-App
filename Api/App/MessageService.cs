using System;
using System.Collections.Generic;
using System.Linq;
using Models;

namespace App
{
    public class MessageService
    {
        private List<UserDto> _usersAvailable = new List<UserDto>
        {
            new UserDto
            {
                Id = "1",
                Email = "user",
                UserName = "John S",
                Role = "Administrator",
                ProfileImage = new UserImageProvider().GetFirstUserImage,
                Messages = new List<Message>
                {
                    new Message
                    {
                        Id = "1",
                        SendDate = DateTime.Now.AddDays(-7),
                        //User = AdminUser,
                        Text = "Welcome to CV App. Have fun!"
                    },
                    new Message
                    {
                        Id = "5",
                        SendDate = DateTime.Now.AddDays(-4),
                        //User = AdminUser,
                        Text = "This is not a spam. Just annoying advertisement"
                    }
                }
            },
            new UserDto
            {
                Id = "2",
                Email = "james@h.com",
                UserName = "James H",
                Role = "Guess Who",
                ProfileImage = new UserImageProvider().GetSecondUserImage,
                Messages = new List<Message>
                {
                    new Message
                    {
                        Id = "2",
                        SendDate = DateTime.Now.AddDays(-6),
                        //User = BestFriend,
                        Text = "Hey dude. Whats up?"
                    }
                }
            },
            new UserDto
            {
                Id = "3",
                Email = "lebron@nba.com",
                UserName = "Lebron",
                Role = "Best Friend",
                ProfileImage = new UserImageProvider().GetThirdUserImage,
                Messages = new List<Message>
                {
                    new Message
                    {
                        Id = "3",
                        SendDate = DateTime.Now.AddDays(-5),
                        //User = Friend,
                        Text = "Where is money bro?"
                    },
                    new Message
                    {
                        Id = "4",
                        SendDate = DateTime.Now.AddDays(-5),
                        //User = Friend,
                        Text = "That was cool"
                    },
                }
            }
        };

        public List<UserDto> GetUserMessages(string userEmail)
        {
            var user = _usersAvailable?.Where(u => u.Email == userEmail).ToList();
            return user;
        }

        public List<UserDto> GetAllUserMessages()
        {
            return _usersAvailable.ToList();
        }
    }
}
