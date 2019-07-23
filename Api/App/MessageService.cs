using System;
using System.Collections.Generic;
using System.Text;
using Models;

namespace App
{
    public class MessageService
    {
        private const string AllowedUser = "user";

        public List<Message> GetAllMessages(string userEmail)
        {
            var messages = new List<Message>
            {
                new Message
                {
                    Id = "1",
                    SendDate = DateTime.Now.AddDays(-7),
                    SendersName = "Administrator",
                    Text = "Welcome to CV App. Have fun!"
                },
                new Message
                {
                    Id = "2",
                    SendDate = DateTime.Now.AddDays(-6),
                    SendersName = "Best friend",
                    Text = "Hey dude. Whats up?"
                },
                new Message
                {
                    Id = "3",
                    SendDate = DateTime.Now.AddDays(-5),
                    SendersName = "The very best friend",
                    Text = "Where is money bro?"
                },
                new Message
                {
                    Id = "4",
                    SendDate = DateTime.Now.AddDays(-5),
                    SendersName = "Guess who",
                    Text = "That was cool"
                },
                new Message
                {
                    Id = "5",
                    SendDate = DateTime.Now.AddDays(-4),
                    SendersName = "Not a spammer",
                    Text = "This is not a spam. Just annoying advertisement"
                },
            };

            if (userEmail == AllowedUser)
                return messages;

            return null;
        }
    }
}
