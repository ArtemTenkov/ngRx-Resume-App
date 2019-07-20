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
                About = "Some interesting description",
                UserName = "nickName"
            }
        };
        public AccountInfo GetAccountInfo(string email)
        {
            return _users.SingleOrDefault(us => us.Email == email);
        }
    }
}
