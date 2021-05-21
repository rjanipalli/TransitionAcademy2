using System;
using System.Collections.Generic;
using System.Text;

namespace StocksCollectionMVC
{
    class StockController
    {
        private StockView stockView;
        private StockModel stockModel;
        public StockController()
        {
            stockView = new StockView();
            stockModel = new StockModel(stockView);

        }
    }
}
