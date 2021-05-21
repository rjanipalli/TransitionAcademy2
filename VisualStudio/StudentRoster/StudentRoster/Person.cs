using System;
using System.Collections.Generic;
using System.Text;

namespace StudentRoster
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

        

    }
}
