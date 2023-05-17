import Header from "./components/header/header";
import StockCarouselContainer from "./components/stocks-carousel-container/stocks-carousel-container";
import StocksSlider from "./components/stocks-slider/stocks-slider";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content-container">
        <StockCarouselContainer />
        <div className="row">
          <StocksSlider />
        </div>
      </div>
    </div>
  );
}

export default App;
