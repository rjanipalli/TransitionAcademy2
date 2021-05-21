using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorMVC
{
    class CalculatorModel
    {
        private double number1;
        private double number2;
        private double result;
        private string op1;


        public CalculatorModel()
        {
            number1 = 0;
            number2 = 0;
            result = 0;
            op1 = "";
        }
        public CalculatorModel(double num1, double num2, string opr)
        {
            number1 = num1;
            number2 = num2;
            op1 = opr;
        }
        public double Number1
        {
            get;
            set;
        }
        public double Number2
        {
            get;
            set;
        }
        public double Result
        {
            get;
            set;
        }
        public CalculationType calculationType
        {
            get;
            set;
        }

        public enum CalculationType
        {
            Addition = '+',
            Subtraction = '-',
            Multiplication = '*',
            Division = '/'

        }

        public double DoOperation(double num1, double num2, string op)
        {
            double result = double.NaN; // Default value is "not-a-number" which we use if an operation, such as division, could result in an error.

            // Use a switch statement to do the math.
            switch (op)

            {
                case "a":
                    result = num1 + num2;
                    break;
                case "s":
                    result = num1 - num2;
                    break;
                case "m":
                    result = num1 * num2;
                    break;
                case "d":
                    // Ask the user to enter a non-zero divisor.
                    if (num2 != 0)
                    {
                        result = num1 / num2;
                    }
                    break;
                // Return text for an incorrect option entry.
                default:
                    break;
            }
            return result;
        }
    }
}
