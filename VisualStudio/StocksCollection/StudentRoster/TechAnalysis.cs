using StocksCollection;
using System;
using System.Collections.Generic;
using System.Text;

namespace StocksCollection
{
    class TechAnalysis: Stocks
    {
        private string buySell;
        private string addMore;
        private string sellShort;

        public TechAnalysis(): base()
        {
            buySell = "";
            addMore = "";
            sellShort = "";
        }

        public TechAnalysis(string symbol, double price, string sector, string buySell1, string addMore1, string sellShort1) : base(symbol, price, sector)
        {
            buySell = buySell1;
            addMore = addMore1;
            sellShort = sellShort1;
        }
        public override string ToString()
        {
            return this.BuySell + " " + this.AddMore;
        }
        public string BuySell
        {
            get;
            set;
        }
        public string AddMore
        {
            get;
            set;
        }
        public string SellShort
        {
            get;
            set;
        }
    }
}
