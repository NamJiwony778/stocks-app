import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useGetStockPriceChangeQuery } from "../../redux/apiSlice";
import StocksTabPanel from "../stocks-tab-panel/stocks-tab-panel";
import Loading from "../loading/loading";
import ErrorMessage from "../error/error-message";
import "../../styles/styles.scss";

const StocksCharts = () => {
  const {
    data: stockPriceChangeData,
    isLoading,
    isError,
    error,
  } = useGetStockPriceChangeQuery();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#6425FE",
    },
  });

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(12),
      marginRight: theme.spacing(1),
      color: "#838383",
      "&.Mui-selected": {
        color: "#fff",
        backgroundColor: "#6425FE",
        borderRadius: "8px",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#6425FE",
      },
    })
  );

  if (stockPriceChangeData && stockPriceChangeData.length > 0) {
    return (
      <div className="card-container">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ bgcolor: "#ffffff" }}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs"
            >
              {stockPriceChangeData.map((el) => (
                <StyledTab label={el.symbol} key={uuidv4()} />
              ))}
            </StyledTabs>
            <Box sx={{ p: 3 }} />
          </Box>
          <StocksTabPanel
            value={value}
            index={value}
            data={stockPriceChangeData[value]}
          />
        </Box>
      </div>
    );
  }
};

export default StocksCharts;
