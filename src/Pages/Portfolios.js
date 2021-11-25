import React, { useState } from "react";
import { MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import portfolios from "../data/portfolios";
import Menu from "../components/Menu";
import Button from "../components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  // eslint-disable-next-line
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />

      <Button filter={filter} button={button} />
      <Menu menuItem={menuItem} />
    </MainLayout>
  );
}

export default PortfoliosPage;
