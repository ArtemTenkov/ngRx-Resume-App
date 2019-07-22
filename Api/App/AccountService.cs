using System.Collections.Generic;
using System.Linq;
using Models;

namespace App
{
    public class AccountService
    {
        private List<AccountInfo> _users => new List<AccountInfo>
        {
            new AccountInfo
            {
                Email = "user",
                About = @"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur.",

                UserName = "nickName"
            }
        };
        public AccountInfo GetAccountInfo(string email)
        {
            return _users.SingleOrDefault(us => us.Email == email);
        }
    }
}
