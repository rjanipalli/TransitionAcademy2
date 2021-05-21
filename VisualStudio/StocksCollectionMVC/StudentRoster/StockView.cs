using System;
using System.Collections.Generic;
using System.Text;

namespace StocksCollectionMVC
{
    class StockView
    {
        private string firstName;
        private string lastName;
        private string symbol;
        private double price;
        private string sector;
        private string qty;
        private string buyPrice;
        private string op;


        public StockView()
        {
            firstName = "";
            lastName = "";
            symbol = "";
            price = 0;
            sector = "";
            qty = "";
            buyPrice = "";
            op = "";

            GetCustomer();
            GetPortfolioMenu();
        }
        public StockView(string fname, string lname)
        {
            FirstName = fname;
            LastName = lname;

        }
        public string FirstName
        {
            get;
            set;

        }
        public string LastName
        {
            get;
            set;

        }
        public string Symbol
        {
            get;
            set;

        }
        public double Price
        {
            get;
            set;

        }
        public string Sector
        {
            get;
            set;

        }
        public string Qty
        {
            get;
            set;

        }
        public string BuyPrice
        {
            get;
            set;

        }
        public string Op
        {
            get;
            set;

        }
        public void GetCustomer()
        {

            Console.WriteLine("==============================================");
            Console.WriteLine("Lay Man Brother's Stock Advisor Services:");
            Console.WriteLine("==============================================");

            Console.WriteLine("Please enter Your First Name:");
            FirstName = Console.ReadLine();
            Console.WriteLine("Please enter Your Last Name:");
            LastName = Console.ReadLine();

        }

        public void GetPortfolioMenu()
        {

            Console.WriteLine("Do you want to add Stocks  " + FirstName + "  " + LastName + "'s Portfolio:");
            Console.WriteLine("\ty - Yes");
            Console.WriteLine("\tp - No, Print me the list instead with Technical Analysis advise");
            Console.WriteLine("\tr - No, I want to Remove a stock from his/her portfolio");
            Console.WriteLine("\tEnter - Please exit");

            Console.Write("Your option? ");
            Op = Console.ReadLine();

        }
        public void GetPortfolio()
        {


            string priceInput1 = "";
            Console.WriteLine("Please enter Stock Symbol:");
            Symbol = Console.ReadLine();
            Console.WriteLine("Please enter Price:");
            priceInput1 = Console.ReadLine();

            double cleanInput1 = 0;
            while (!double.TryParse(priceInput1, out cleanInput1))
            {
                Console.Write("This is not valid input. Please enter numeric value: ");
                priceInput1 = Console.ReadLine();
            }
            Price = cleanInput1;
            Console.WriteLine("Please enter Sector:");
            Sector = Console.ReadLine();
            Console.WriteLine("Please enter Quantity:");
            Qty = Console.ReadLine();
            Console.WriteLine("Please enter your Buy Price:");
            BuyPrice = Console.ReadLine();
            //  more = "MORE";

        }
        public void ShowPortfolio(Person newPerson, List<Portfolio> stocksCollectionMVC)
        {
            if (Op == "p")
            {
                string advise = "";
                Console.WriteLine(newPerson + "'s Portfolio:");
                Console.WriteLine("==============================================");
                foreach (Portfolio portfolio in stocksCollectionMVC)
                {
                    if (portfolio.Sector == "tech")
                    {
                        advise = "please sell NOW.";
                    }
                    else
                    {
                        advise = "please buy more.";
                    }

                    Console.WriteLine(" For " + portfolio.Symbol + " current price is " + portfolio.Price + ", you bought at " + portfolio.BuyPrice + "---Technical Advise:" + advise);
                }

                Console.ReadLine();

            }
        }
        public void DeletePortfolioItem(Person newPerson, List<Portfolio> stocksCollectionMVC)
        {


            if (Op == "r")
            {

                string removeSymbol = "";
                Console.WriteLine("Please Enter the Sybmol you want to remove: ");
                removeSymbol = Console.ReadLine();

                int i = stocksCollectionMVC.Count;

                for (int j = i - 1; j >= 0; j--)
                {
                    if (stocksCollectionMVC[j].Symbol == removeSymbol)
                    {

                        stocksCollectionMVC.RemoveAt(j);
                        Console.WriteLine("Symbol Removed, Press enter to continue ");

                    }

                }
                Console.ReadLine();

            }
        }



    }

}

