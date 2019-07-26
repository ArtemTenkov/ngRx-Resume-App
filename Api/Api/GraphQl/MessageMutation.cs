using GraphQL.Types;
using Microsoft.AspNetCore.Mvc.ViewFeatures.Internal;

namespace Api.GraphQl
{
    public class MessageMutation : ObjectGraphType
    {
        public MessageMutation()
        {
            Name = "CreateMessageMutation";

            //Field<MessageWrapper>("CreateMessage", 
            //    arguments: new QueryArguments(new QueryArgument<NonNullGraphType<MessageWrapper>>
            //    {
            //        Name = "message"
            //    }), resolve: context =>
            //    {
            //        return new MessageWrapper();
            //    });
        }
    }
}
