using GraphQL.Types;
using Models;

namespace Api.GraphQl
{
    public class MessageType : ObjectGraphType<Message>
    {
        public MessageType()
        {
            Field(x => x.Id, type: typeof(IdGraphType));
            Field(x => x.SendDate, type: typeof(DateTimeGraphType));
            Field(x => x.Text, type: typeof(StringGraphType));
        }
    }
}
