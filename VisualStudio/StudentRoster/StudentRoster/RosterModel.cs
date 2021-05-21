using System;
using System.Collections.Generic;
using System.Text;

namespace StudentRoster
{
    class RosterModel
    {
        public void AddStudents()
        {
            List<Student> studentRoster = new List<Student>();
            //List<Student> studentRoster = new List<Student>();

            string more = "";
            bool loopFlag = true;
            while (loopFlag)
            {
                GetStudentData();
            }
        }
    } 
}
