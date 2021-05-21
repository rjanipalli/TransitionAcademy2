using System;
using System.Collections.Generic;
using System.Text;

namespace StocksCollectionMVC
{
    class Stocks
    {
        private string symbol;
        private double price;
        private string sector;
        public Stocks()
        {
            symbol = "";
            price = 0;
            sector = "";
        }
        public Stocks(string newSymbol, double newPrice, string newSector)
        {
            symbol = newSymbol;
            price = newPrice;
            sector = newSector;
        }

        public string Symbol
        {
            get; set;

        }
        public double Price
        {
            get; set;

        }
        public string Sector
        {
            get; set;

        }



    }
}
