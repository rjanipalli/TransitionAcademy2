using System;
using System.Collections.Generic;
using System.Text;

namespace StocksCollection
{
    class Portfolio : Stocks
    {
        private string qty;
        private string buyPrice;

        public Portfolio(): base()
        {
            qty = "";
            buyPrice = "";
        }
        public Portfolio(string symbol, double price, string sector,string qty1, string buyPrice1) : base(symbol, price, sector)
        {
            qty = qty1;
            buyPrice = buyPrice1;
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
    }
}
