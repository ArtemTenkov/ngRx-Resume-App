using GraphQL.Types;
using Models;

namespace Api.GraphQl
{
    public class UserType : ObjectGraphType<UserDto>
    {
        public UserType()
        {
            Name = "User";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("User's Id");
            Field(x => x.Email, type: typeof(StringGraphType)).Description("User's Email");
            Field(x => x.ProfileImage, type: typeof(StringGraphType)).Description("User's Profile Image");
            Field(x => x.Role, type: typeof(StringGraphType)).Description("User's Role");
            Field(x => x.UserName, type: typeof(StringGraphType)).Description("User's Name");
            Field(x => x.Messages, type: typeof(ListGraphType<MessageType>)).Description("Messages");
        }
    }
}
