import Header from "./components/header/header";
import StockCarouselContainer from "./components/stocks-carousel-container/stocks-carousel-container";
import StocksSlider from "./components/stocks-slider/stocks-slider";
import MarketCapitalizationChart from "./components/market-capitalization-chart/market-capitalization-chart";
import StocksCharts from "./components/stocks-charts/stocks-charts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content-container">
        <StockCarouselContainer />
        <div className="row">
          <StocksSlider />
          <MarketCapitalizationChart />
        </div>
      </div>
    </div>
  );
}

export default App;
