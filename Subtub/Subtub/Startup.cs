using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Subtub.Startup))]
namespace Subtub
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
