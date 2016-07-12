using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccessLayer.models;
using OneHousingPerson.Models;

namespace OneHousingPerson.Controllers
{
    public class PersonController : ApiController
    {
        private OneHousingPersonContext _personContext = new OneHousingPersonContext(); //TODO interface and inject

        // GET: api/Person
        public List<Person> Get()
        {
            return _personContext.People.ToList();
        }


        // GET: api/Person/5
        public List<Order> Get(int id) //TODO separate out 'get details' and 'get order'
        {
            var person = _personContext.People.FirstOrDefault(p => p.Id == id);
            return person != null ? person.Orders.ToList() : null;
        }

        // POST: api/Person
        public void Post([FromBody]string title, string firstName, string lastName, short age)
        {
            var person = new Person {Title = title, FirstName = firstName, LastName = lastName, Age = age};
            _personContext.People.Add(person);
            _personContext.SaveChanges();
        }

    }
}
