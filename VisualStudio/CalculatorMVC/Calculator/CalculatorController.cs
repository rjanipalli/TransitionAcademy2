using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorMVC
{
    class CalculatorController
    {
        private CalculatorView calculatorView;
        private CalculatorModel calculatorModel;
        public CalculatorController()
        {
            string opr = "";
            while (opr != "n")
            {
                calculatorView = new CalculatorView();
                calculatorModel = new CalculatorModel();
                calculatorView.FinalResult = calculatorModel.DoOperation(calculatorView.Num1, calculatorView.Num2, calculatorView.Op);
                calculatorView.Op = calculatorView.ShowValues(calculatorView.FinalResult);
                opr = calculatorView.Op;
            }
            //calculatorView.FinalResult = 
        }

    }
}
