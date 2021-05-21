using System;
using System.Collections.Generic;
using System.Text;

namespace StudentRoster
{
    class Student : Person
    {
        private string studentID;

        public Student(): base()
        {
            studentID = "";
        }
        public Student(string firstName, string lastName, string studentID1) : base(firstName, lastName)
        {
            studentID = studentID1;
        }
        public string StudentID
        {
            get;
            set;

        }
    }
}
