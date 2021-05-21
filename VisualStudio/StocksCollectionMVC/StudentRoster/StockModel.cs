using System;
using System.Collections.Generic;
using System.Text;

namespace StocksCollectionMVC
{
    class StockModel
    {
        private Person person;
        private StockView stockView;
        private string opr = "";
        private string firstName;
        private string lastName;
       
        public StockModel(StockView stockView)
        {
            firstName = stockView.FirstName;
            lastName = stockView.LastName;
            opr = stockView.Op;
            AddCustomer();
            PortfolioData();
        }
        public void AddCustomer()
        {

            person = new Person();
            person.FirstName = firstName;
            person.LastName = lastName;

        }
        public void PortfolioData()
        {

            stockView = new StockView(firstName, lastName);
            List<Portfolio> stocksCollectionMVC = new List<Portfolio>();
            while (opr == "y" || opr == "p" || opr == "r")
            {
                Portfolio newPortfolio = new Portfolio();
                if (opr == "y")
                {
                    stockView.GetPortfolio();
                    newPortfolio.BuyPrice = stockView.BuyPrice;
                    newPortfolio.Price = stockView.Price;
                    newPortfolio.Qty = stockView.Qty;
                    newPortfolio.Sector = stockView.Sector;
                    newPortfolio.Symbol = stockView.Symbol;

                    stocksCollectionMVC.Add(newPortfolio);
                }
                if (opr == "p")
                {
                    stockView.ShowPortfolio(person, stocksCollectionMVC);
                }
                if (opr == "r")
                {
                    stockView.DeletePortfolioItem(person, stocksCollectionMVC);
                }
                stockView.GetPortfolioMenu();
                opr = stockView.Op;
            }



        }

    }
}
