using System;
using System.Collections.Generic;
using System.Text;
//using CalculatorLibrary;




namespace CalculatorMVC
{
    class CalculatorView
    {
        private double num1;
        private double num2;
        private double finalResult;
        private string op;

        public CalculatorView()
        {
            num1 = 0;
            num2 = 0;
            finalResult = 0;
            GetValues();
        }

        public double Num1
        {
            get;
            set;
        }
        public double Num2
        {
            get;
            set;
        }
        public double FinalResult
        {
            get;
            set;
        }
        public string Op
        {
            get;
            set;
        }

        public void GetValues()
        {
            Console.Clear();
            Console.WriteLine("Console Calculator in C#\r");
            Console.WriteLine("------------------------\n");

            //  while (!endApp)
            // {
            // Declare variables and set to empty.
            string numInput1 = "";
            string numInput2 = "";
           

            // Ask the user to type the first number.
            Console.Write("Type a number, and then press Enter: ");
            numInput1 = Console.ReadLine();

            double cleanNum1 = 0;
            while (!double.TryParse(numInput1, out cleanNum1))
            {
                Console.Write("This is not valid input. Please enter an integer value: ");
                numInput1 = Console.ReadLine();
            }

            // Ask the user to type the second number.
            Console.Write("Type another number, and then press Enter: ");
            numInput2 = Console.ReadLine();

            double cleanNum2 = 0;
            while (!double.TryParse(numInput2, out cleanNum2))
            {
                Console.Write("This is not valid input. Please enter an integer value: ");
                numInput2 = Console.ReadLine();
            }

            // Ask the user to choose an operator.
            Console.WriteLine("Choose an operator from the following list:");
            Console.WriteLine("\ta - Add");
            Console.WriteLine("\ts - Subtract");
            Console.WriteLine("\tm - Multiply");
            Console.WriteLine("\td - Divide");
            Console.Write("Your option? ");

            string op = Console.ReadLine();

            Num1 = cleanNum1;
            Num2 = cleanNum2;
            Op = op;


            // }

            return ;
        }

        public string ShowValues(double res1)
        {


            Console.WriteLine("Your result: {0:0.##}\n", res1);
            Console.WriteLine("------------------------\n");

            // Wait for the user to respond before closing.
            Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
            string op = Console.ReadLine();

            return op;

         

        }
    }
}
