using App;
using GraphQL.Types;

namespace Api.GraphQl
{
    public class UserMessagesQuery : ObjectGraphType
    {
        public UserMessagesQuery()
        {
            Field<ListGraphType<UserType>>("users", 
                resolve: context => new MessageService().GetAllUserMessages());

            Field<ListGraphType<UserType>>("user",
                arguments: new QueryArguments(
                    new QueryArgument<StringGraphType> { Name = "userEmail", Description = "Email of User" }
                ),
                resolve: context =>
                {
                    var email = context.GetArgument<string>("userEmail");
                    return new MessageService().GetUserMessages(email);
                });
        }
    }
}
