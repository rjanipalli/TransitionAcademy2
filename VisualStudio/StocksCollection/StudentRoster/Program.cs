using System;
using System.Collections.Generic;

namespace StocksCollection
{
    class Program
    {
        static void Main(string[] args)
        {

            Person newPerson = new Person();
            Console.WriteLine("==============================================");
            Console.WriteLine("Lay Man Brother's Stock Advisor Services:");
            Console.WriteLine("==============================================");

            Console.WriteLine("Please enter Your First Name:");
            newPerson.FirstName = Console.ReadLine();
            Console.WriteLine("Please enter Your Last Name:");
            newPerson.LastName = Console.ReadLine();

                        List<Portfolio> stocksCollection = new List<Portfolio>();
            List<TechAnalysis> techAnalysisCollection = new List<TechAnalysis>();

            string more = "";
            bool loopFlag = true;
            while(loopFlag)
            {
                string priceInput1 = "";
                Console.WriteLine("Do you want to add " + more + " Stocks  " + newPerson.FirstName + "  " + newPerson.LastName + "'s Portfolio:");
                Console.WriteLine("\ty - Yes");
                Console.WriteLine("\tp - No, Print me the list instead with Technical Analysis advise");
                Console.WriteLine("\tr - No, I want to Remove a stock from his/her portfolio");
                Console.WriteLine("\te - Please exit");

                Console.Write("Your option? ");
                string op = Console.ReadLine();
                if (op == "y")
            {
                    Portfolio newPortfolio = new Portfolio();
                    Console.WriteLine("Please enter Stock Symbol:");
                    newPortfolio.Symbol = Console.ReadLine();
                    Console.WriteLine("Please enter Price:");
                    priceInput1 = Console.ReadLine();

                    double cleanInput1 = 0;
                    while (!double.TryParse(priceInput1, out cleanInput1))
                    {
                        Console.Write("This is not valid input. Please enter numeric value: ");
                        priceInput1 = Console.ReadLine();
                    }
                    newPortfolio.Price = cleanInput1;
                    Console.WriteLine("Please enter Sector:");
                    newPortfolio.Sector = Console.ReadLine();
                    Console.WriteLine("Please enter Quantity:");
                    newPortfolio.Qty = Console.ReadLine();
                    Console.WriteLine("Please enter your Buy Price:");
                    newPortfolio.BuyPrice = Console.ReadLine();
                    TechAnalysis newTechAnalysis = new TechAnalysis();
                    if (newPortfolio.Sector == "tech")
                    {
                        newTechAnalysis.BuySell = " Please Sell";
                        newTechAnalysis.SellShort = "Sell Short";
                    } else
                    {
                        newTechAnalysis.BuySell = " Please buy more";
                        newTechAnalysis.SellShort = "Go Long";
                    }
                    techAnalysisCollection.Add(newTechAnalysis);
                    stocksCollection.Add(newPortfolio);
                    more = "MORE";
                }
            if (op == "p"){
                    //TechAnalysis newTechAnalysis = new TechAnalysis();
                    string advise = "";
                    Console.WriteLine(newPerson + "'s Portfolio:");
                    Console.WriteLine("==============================================");
                    foreach (Portfolio portfolio in stocksCollection) {
                        if (portfolio.Sector == "tech")
                        {
                            advise = "please sell NOW.";
                        }
                        else
                        {
                            advise = "please buy more.";
                        }
                        
                        Console.WriteLine(" For " + portfolio.Symbol + " current price is " + portfolio.Price + ", you bought at " + portfolio.BuyPrice + "---Technical Advise:" + advise);
                      //  if (portfolio.Sector = "Tech")
                    }

                    Console.ReadLine();
                        
                }
                if (op == "r")
                {
                    //TechAnalysis newTechAnalysis = new TechAnalysis();
                    string removeSymbol = "";
                    Console.WriteLine("Please Enter the Sybmol you want to remove: ");
                    removeSymbol =Console.ReadLine();
                    //Portfolio List<portfolio>() =  stockCollection;
                    int i= stocksCollection.Count;

                    for (int j = i-1; j>=0; j--)
                    {
                        if (stocksCollection[j].Symbol == removeSymbol) {
                            //stocksCollection.Remove(j);
                            stocksCollection.RemoveAt(j);
                            Console.WriteLine("Symbol Removed, Press enter to continue ");
                           // Console.ReadLine();
                            //Console.WriteLine(portfolio.Symbol + " " + portfolio.Price);
                        }
                        //  if (portfolio.Sector = "Tech")



                    }
                    Console.ReadLine();

                }
                if (op == "e")
                {
                    loopFlag = false;
                }

            }

           

        }
    }
}
