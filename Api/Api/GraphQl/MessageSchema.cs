using GraphQL.Types;

namespace Api.GraphQl
{
    public class MessageSchema : Schema
    {
        public MessageSchema()
        {
            Query = new UserMessagesQuery();
           // Mutation = new MessageMutation();
        }
    }
}
