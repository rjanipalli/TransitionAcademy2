using System;
using System.Collections.Generic;
using System.Text;

namespace StudentRoster
{
    class RosterView: Person

    {
        public void GetInstructorData()
        {
            Instructor newInstructor = new Instructor();
            Console.WriteLine("Instructor First Name:");
            newInstructor.FirstName = Console.ReadLine();
            Console.WriteLine("Instructor Last Name:");
            newInstructor.LastName = Console.ReadLine();
            Console.WriteLine("Instructor Subject:");
            newInstructor.Subject = Console.ReadLine();
        }
        public void GetStudentData()
        {
            //todo
        }
        public void ShowRosterData()
        {
            //todo
        }
    }
}
