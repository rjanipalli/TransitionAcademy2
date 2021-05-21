using System;
using System.Collections.Generic;
using System.Text;

namespace StudentRoster
{
    class Instructor: Person
    {
        private string subject;

        public Instructor(): base()
        {
            subject = "";
        }
        public Instructor(string firstName, string lastName, string subject1 ) : base(firstName,lastName)
        {
            subject = subject1;
        }
        public override string ToString()
        {
            return this.FirstName + " " + this.LastName;
        }
        public string Subject
        {
            get;
            set;
        }
    }
}
