using System;
using System.Collections.Generic;

namespace StudentRoster
{
    class Program
    {
        static void Main(string[] args)
        {

            

            //Console.WriteLine(newInstructor);
            List<Student> studentRoster = new List<Student>();
           
            string more = "";
            bool loopFlag = true;
            while(loopFlag)
            {
                Console.WriteLine("Do you want to add " + more + " Students to " + newInstructor.FirstName + "  " + newInstructor.LastName + "'s class:");
                Console.WriteLine("\ty - Yes");
                Console.WriteLine("\tp - No, Print me the list instead");
                Console.WriteLine("\te - Please exit");

                Console.Write("Your option? ");
                string op = Console.ReadLine();
                if (op == "y" || op == "Y")
            {
                Student newStudent = new Student();
                Console.WriteLine("Sutdents First Name:");
                newStudent.FirstName = Console.ReadLine();
                Console.WriteLine("Sutdents Last Name:");
                newStudent.LastName = Console.ReadLine();
                Console.WriteLine("Sutdents ID:");
                newStudent.StudentID = Console.ReadLine();
                    
                studentRoster.Add(newStudent);
                    more = "MORE";
                }
            if (op == "p" || op == "P")
                {
                    Console.WriteLine(newInstructor + "'s Stundets:");
                    foreach (Student student in studentRoster)
                        Console.WriteLine(student.FirstName + " " + student.LastName);
                    Console.ReadLine();
                        
                }
            if (op == "e" || op == "E")
                {
                    loopFlag = false;
                }

            }

           

        }
    }
}
