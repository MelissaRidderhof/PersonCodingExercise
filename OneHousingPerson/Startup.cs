using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OneHousingPerson.Startup))]
namespace OneHousingPerson
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
