using System;
using System.Collections.Generic;
using System.Text;

namespace StocksCollectionMVC
{
    class Person
    {
        private string firstName;
        private string lastName;
        public Person()
        {
            firstName = "";
            lastName = "";
        }
        public Person(string newFirstName, string newLastName)
        {
            firstName = newFirstName;
            lastName = newLastName;
        }

        public string FirstName
        {
            get; set;

        }
        public string LastName
        {
            get; set;

        }
        public override string ToString()
        {
            return this.FirstName + " " + this.LastName;
        }
    }
}
